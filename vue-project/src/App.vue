<template>
  <div :class="{ 'no-scroll': isResourcesVisible }">
    <!-- Navbar Section -->
    <section id="navbar-section">
      <NavBar @toggle-resources="toggleResources" @scroll-to-section="scrollToSection" />
    </section>  

    <!-- Main Content Sections -->
    <section id="about-section"><About /></section>  
    <section id="educ-section"><Educ /></section>
    <section id="course-section"><Course /></section>  
    <section id="hobbies-section"><Hobbies /></section>  
    <section id="goals-section"><Goals /></section>
    <section id="gallery-section"><Gallery /></section>
    <section id="feedback-section"><FeedbackForm /></section>
    <section id="footer-section"><Footer /></section>

    <!-- Resources Section (Hidden by Default) -->
    <section v-if="isResourcesVisible" id="resources-section" @click.self="toggleResources">
      <Resources />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
  if (isResourcesVisible.value) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = "auto"; // Enable scrolling
  }
};

const scrollToSection = (sectionId) => {
  const targetSection = document.querySelector(`#${sectionId}`);
  if (targetSection && !isResourcesVisible.value) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Jersey+10&display=swap');

h1, h2, h3, p {
  font-family: 'Jersey 10', serif;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow-x: hidden;
}

section {
  margin: 0;
  padding: 0;
}

/* Prevent scrolling when Resources.vue is open */
.no-scroll {
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
  align-items: center;
  justify-content: center;
  z-index: 200;
}
</style>
