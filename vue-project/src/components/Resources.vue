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
  color: #BD94F9; /* Light purple */
  text-decoration: none;
  transition: color 0.2s;
}

.resources-list li a:hover {
  color: #BD94F9; /* Lighter purple on hover */
  text-decoration: underline;
  text-underline-offset: 3px; 
}
</style>
