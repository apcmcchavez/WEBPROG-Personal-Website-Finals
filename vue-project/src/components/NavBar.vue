<template>
  <nav class="bg-purple-900 text-white p-4 flex items-center justify-between">
    <!-- Clickable Iyah Title -->
    <h1 class="iyah-text" @click="toggleResources">Iyah</h1>

    <!-- Folder icons container -->
    <div class="folders-container">
      <img 
        v-for="item in navItems" 
        :key="item.sectionId" 
        :src="item.image" 
        class="folder-img"
        @click="scrollTo(item.sectionId)"
      />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { image: "/images/nav-bar/me-icon.png", sectionId: "about-section" },
        { image: "/images/nav-bar/educ-icon.png", sectionId: "educ-section" },
        { image: "/images/nav-bar/skills-icon.png", sectionId: "course-section" },
        { image: "/images/nav-bar/likes-icon.png", sectionId: "hobbies-section" },
        { image: "/images/nav-bar/peeps-icon.png", sectionId: "feedback-section" }
      ]
    };
  },
  methods: {
    toggleResources() {
      this.$emit("toggle-resources");
    },
    scrollTo(sectionId) {
      this.$emit("scroll-to-section", sectionId);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/jersey-10');

nav {
  background-color: #3b0f49;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 400;
}

.iyah-text {
  font-family: 'Jersey 10', serif;
  font-size: 90px;
  white-space: nowrap;
  margin-left: 60px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: normal;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.iyah-text:hover {
  color: #c3a6e6;
}

.folders-container {
  display: flex;
  gap: 30px;
  margin-right: 30px;
}

.folder-img {
  width: 144px;
  height: 108px;
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.folder-img:hover {
  transform: scale(1.1);
}

/* Responsive styling */

/* For screens 780px and below */
@media (max-width: 780px) {
  .iyah-text {
    font-size: 70px;
    margin-left: 40px;
  }
  .folders-container {
    gap: 10px;
    margin-right: 50px;
  }
  .folder-img {
    width: 90px;
    height: 90px;
  }
}

/* For screens 480px and below */
@media (max-width: 480px) {
  .iyah-text {
    font-size: 45px;
    margin-left: 20px;
  }
  .folders-container {
    gap: 10px;
    margin-right: 50px;
  }
  .folder-img {
    width: 50px;
    height: 75px;
  }
}

/* For screens 360px and below */
@media (max-width: 360px) {
  .iyah-text {
    font-size: 30px;
    margin-left: 10px;
  }
  .folders-container {
    gap: 5px;
    margin-right: 35px;
  }
  .folder-img {
    width: 40px;
    height: 60px;
  }
}
</style>
