<template>
  <div class="resources-container">
    <!-- Back Button -->
    <button class="back-button" @click="$emit('close-resources')">
      ←
    </button>

    <h2 class="title">Resources</h2>
    <ul class="resource-list">
      <li>Resources 1</li>
      <li>Resources 2</li>
      <li>Resources 3</li>
      <li>Resources 4</li>
    </ul>
  </div>
</template>

<style scoped>
.resources-container {
  position: absolute;
  top: 80px; /* Below navbar */
  left: 50px; /* Align to the left */
  color: white;
  font-family: 'Jersey 10', serif;
  text-align: left;
}

.back-button {
  font-size: 30px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  transition: color 0.2s ease-in-out;
}

.back-button:hover {
  color: #c3a6e6; /* Lighter purple on hover */
}

.title {
  font-size: 40px;
  color: #c3a6e6;
}

.resource-list {
  font-size: 20px;
  list-style-type: disc;
  padding-left: 20px;
}
</style>
