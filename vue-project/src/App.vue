<template>
  <div :class="{ 'no-scroll': isResourcesVisible }">
    <!-- Navbar Section (Always Visible) -->
    <section id="navbar-section">
      <NavBar @toggle-resources="toggleResources" @scroll-to-section="scrollToSection" />
    </section>  

    <!-- Main Content (Now Scrollable) -->
    <div id="main-content">
      <section id="about-section"><About /></section>  
      <section id="educ-section"><Educ /></section>
      <section id="course-section"><Course /></section>  
      <section id="hobbies-section"><Hobbies /></section>  
      <section id="goals-section"><Goals /></section>
      <section id="gallery-section"><Gallery /></section>
      <section id="feedback-section"><FeedbackForm /></section>
      <section id="footer-section"><Footer /></section>
    </div>

    <!-- Resources Section (Hidden by Default) -->
    <section v-if="isResourcesVisible" id="resources-section">
      <Resources @close-resources="toggleResources" />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import About from './components/About.vue';
import Educ from './components/Educ.vue';
import Course from './components/Course.vue';
import Hobbies from './components/Hobbies.vue';
import Goals from './components/Goals.vue';
import Gallery from './components/Gallery.vue';
import FeedbackForm from './components/FeedbackForm.vue';
import Footer from './components/Footer.vue';
import Resources from './components/Resources.vue';

const isResourcesVisible = ref(false);

const toggleResources = () => {
  isResourcesVisible.value = !isResourcesVisible.value;
  document.documentElement.style.overflow = isResourcesVisible.value ? "hidden" : "auto";
};

const scrollToSection = (sectionId) => {
  const targetSection = document.getElementById(sectionId);
  if (targetSection && !isResourcesVisible.value) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Ensure scrolling is reset if needed
onMounted(() => {
  document.documentElement.style.overflow = "auto";
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Jersey+10&display=swap');

h1, h2, h3, p {
  font-family: 'Jersey 10', serif;
}

/* Prevent horizontal scrolling */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Prevents unwanted scroll */
  background-color: black;
}

/* Navbar: Fixed at the top */
#navbar-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #3b0f49;
  z-index: 300;
}

/* Main Content: Scrollable */
#main-content {
  margin-top: 80px; /* Adjust this based on navbar height */
  height: calc(100vh - 80px);
  overflow-y: auto; /* Enables scrolling */
}

/* Prevent scrolling when Resources.vue is open */
.no-scroll #main-content {
  overflow: hidden;
}

/* Resources Section Styling */
#resources-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 200;
}
</style>
