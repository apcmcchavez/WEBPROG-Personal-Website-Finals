<template>
  <div class="feedback-container">
    <div class="feedback-content">
      <div class="feedback-form">
        <h2>Hopefully you like this simple webpage of mine ^^</h2>
        <h2>If you do not mind, I would like to know your name!</h2>
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

          <button type="submit" :disabled="loading">
            {{ loading ? "Submitting..." : "Submit" }}
          </button>
        </form>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </div>
      <div class="feedback-image">
        <img :src="imageUrl" alt="Feedback Illustration" />
      </div>
    </div>

    <h3>Honorable Mentions:</h3>
    <div class="mentions-container">
      <div v-for="(mention, index) in honorableMentions" :key="index" class="mention-card">
        <strong>{{ mention.name }}</strong> ({{ mention.section }})
        <p v-if="mention.message">{{ mention.message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feedback-content {
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.301);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 450px;
  overflow: hidden;
}

.feedback-form {
  width: 65%;
}

.feedback-image {
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: 30%;
}

.feedback-image img {
  width: 100%;
  height: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2em;
  color: #663366;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  font-size: 1em;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  width: 162px;
  padding: 12px 24px;
  background: #ff99cc;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1em;
  cursor: pointer;
  transition: 0.3s;
}

button:hover:not(:disabled) {
  background: #ff66b2;
}

.feedback-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.feedback-image img {
  max-width: 100%;
  height: auto;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

// Add this line to make imageUrl available to the template
const imageUrl = ref(new URL('@/assets/images/feedback.png', import.meta.url).href)

const name = ref('')
const section = ref('')
</script>

