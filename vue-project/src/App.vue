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

/* Universal box-sizing and max-width */
*,
*::before,
*::after {
  box-sizing: border-box;
  max-width: 100%;
}

h1, h2, h3, p {
  font-family: 'Jersey 10', serif;
}

/* Prevent horizontal overflow by using viewport width */
html, body {
  margin: 0;
  padding: 0;
  width: 100vw; /* Use the viewport width to prevent extra space */
  height: 100vh;
  overflow-x: hidden; /* Hide horizontal scroll */
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

/* Main Content: Scrollable vertically */
#main-content {
  margin-top: 80px; /* Adjust based on navbar height */
  width: 100%;  /* Ensure full width */
  height: calc(100vh - 80px);
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Custom vertical scrollbar styling for #main-content (Webkit browsers) */
#main-content::-webkit-scrollbar {
  width: 8px;
}

#main-content::-webkit-scrollbar-track {
  background: transparent;
}

#main-content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 1px solid transparent;
}

/* Firefox scrollbar styling for #main-content */
#main-content {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
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


