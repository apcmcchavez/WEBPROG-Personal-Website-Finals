<template>
  <div class="feedback-form">
    <h2>Submit Your Feedback</h2>
    <form @submit.prevent="submitFeedback">
      <label>
        Name:
        <input v-model="name" type="text" required />
      </label>

      <label>
        Section:
        <input v-model="section" type="text" required />
      </label>

      <label>
        Message (Optional):
        <textarea v-model="message"></textarea>
      </label>

      <button type="submit">Submit</button>
    </form>

    <h3>Honorable Mentions:</h3>
    <ul>
      <li v-for="mention in honorableMentions" :key="mention.id">
        <strong>{{ mention.name }}</strong> ({{ mention.section }})
        <p v-if="mention.message">{{ mention.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient' // ✅ Corrected import path

// Form data
const name = ref('')
const section = ref('')
const message = ref('')

// Honorable mentions data
const honorableMentions = ref([])

// Fetch honorable mentions from Supabase
async function getHonorableMentions() {
  const { data, error } = await supabase.from('honorable_mentions').select()

  if (error) {
    console.error('Error fetching data:', error)
    return
  }

  honorableMentions.value = data
}

// Submit form data to Supabase
async function submitFeedback() {
  if (!name.value || !section.value) return // Ensure required fields are filled

  const { error } = await supabase.from('honorable_mentions').insert([
    { name: name.value, section: section.value, message: message.value }
  ])

  if (error) {
    console.error('Error submitting feedback:', error)
    return
  }

  // Refresh list after submission
  getHonorableMentions()

  // Clear input fields
  name.value = ''
  section.value = ''
  message.value = ''
}

onMounted(() => {
  getHonorableMentions()
})
</script>

<style scoped>
.feedback-form {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background: #6200ea;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background: #4500b0;
}
</style>
