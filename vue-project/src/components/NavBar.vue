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
        { image: "/images/nav-bar/peeps-icon.png", sectionId: "goals-section" }
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
  position: relative; /* Remove `fixed` or `absolute` */
  width: 100%;
  z-index: 400;
}



.iyah-text {
  font-family: 'Jersey 10', serif;
  font-size: 90px;
  white-space: nowrap;
  margin-left: 60px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: normal;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.iyah-text:hover {
  color: #c3a6e6; /* Lighter purple on hover */
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
</style>
