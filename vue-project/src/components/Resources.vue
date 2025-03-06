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
        <li><a href="https://www.w3schools.com/vue/" target="_blank">Vue </a></li>
        <li><a href="https://supabase.com/docs/guides/getting-started/quickstarts/vue" target="_blank">Supabase + Vue </a></li>
        <li><a href="https://rajlanjewar.medium.com/deploy-your-vuejs-application-with-vercel-0be8578c96a1" target="_blank">Vue and Vercel </a></li>
        <li><a href="https://www.figma.com/community/plugin/735098390272716381/iconify" target="_blank">Iconify </a></li>
        <li><a href="https://www.pinterest.com/" target="_blank">Pinterest </a></li>
        <li><a href="https://fonts.google.com/specimen/Jersey+10" target="_blank">Google Fonts</a></li>
        <li><a href="https://www.figma.com" target="_blank">Figma</a></li>
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
  padding-top: 80px;
}

/* 🔹 Back Button */
.back-button {
  font-size: 48px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 150px;
  left: 30px;
  padding: 10px;
  z-index: 9999;
}

/* 🔹 Resources Content */
.resources-content {
  margin-top: 120px;
  margin-left: 50px;
}

.resources-title {
  font-size: 75px;
  font-weight: bold;
  color: #bfa2db;
  margin-bottom: 20px;
}

.resources-list {
  font-family: 'Jersey 10', serif;
  font-size: 30px;
  list-style-type: disc;
  padding-left: 20px;
}

.resources-list li {
  margin-bottom: 10px;
  margin-left: 30px;
}

/* 🔹 Style the Link */
.resources-list li a {
  color: #BD94F9;
  text-decoration: none;
  transition: color 0.2s;
}

.resources-list li a:hover {
  color: #BD94F9;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Responsive styling */

/* For screens 780px and below */
@media (max-width: 780px) {
  .resources-container {
    padding: 30px;
    padding-top: 60px;
  }
  .back-button {

    font-size: 36px;
    top: 120px;
    left: 20px;
  }
  .resources-content {
    margin-top: 100px;
    margin-left: 30px;
  }
  .resources-title {
    font-size: 60px;
  }
  .resources-list {
    font-size: 24px;
  }
  .resources-list li {
    margin-bottom: 8px;
    margin-left: 20px;
  }
}

/* For screens 480px and below */
@media (max-width: 480px) {
  .resources-container {
    padding: 20px;
    padding-top: 40px;
  }
  .back-button {
    font-size: 30px;
    top: 100px;
    left: 15px;
  }
  .resources-content {
    margin-top: 80px;
    margin-left: 20px;
  }
  .resources-title {
    font-size: 45px;
  }
  .resources-list {
    font-size: 20px;
  }
  .resources-list li {
    margin-bottom: 6px;
    margin-left: 15px;
  }
}

/* For screens 360px and below */
@media (max-width: 360px) {
  .resources-container {
    padding: 15px;
    padding-top: 30px;
  }
  .back-button {
    font-size: 24px;
    top: 90px;
    left: 10px;
  }
  .resources-content {
    margin-top: 70px;
    margin-left: 10px;
  }
  .resources-title {
    font-size: 35px;
  }
  .resources-list {
    font-size: 18px;
  }
  .resources-list li {
    margin-bottom: 4px;
    margin-left: 10px;
  }
}
</style>
