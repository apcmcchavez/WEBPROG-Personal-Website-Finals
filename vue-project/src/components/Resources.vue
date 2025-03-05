<template>
  <div class="resources-container">
    <!-- Back Button -->
    <button class="back-button" @click="$emit('close-resources')">
      ←
    </button>

    <!-- Resources Content -->
    <div class="resources-content">
      <h1 class="resources-title">Resources</h1>
      <ul class="resources-list">
        <li>Resources 1</li>
        <li>Resources 2</li>
        <li>Resources 3</li>
        <li>Resources 4</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.resources-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  padding-top: 80px; /* Push content down */
}

/* 🔹 Back Button - Now Visible */
.back-button {
  font-size: 48px; /* Large arrow */
  background: rgba(0, 0, 0, 0.5); /* Slight background for visibility */
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 150px; /* Moved lower */
  left: 30px;
  padding: 10px;
  z-index: 9999; /* 🔥 Stays above EVERYTHING */
}

/* 🔹 Resources Content */
.resources-content {
  margin-top: 120px; /* Lowered content */
}

.resources-title {
  font-size: 75px;
  font-weight: bold;
  color: #bfa2db;
  margin-bottom: 20px;
}

.resources-list {
  font-size: 30px;
  list-style-type: disc;
  padding-left: 20px;
}

.resources-list li {
  margin-bottom: 10px;
}
</style>
