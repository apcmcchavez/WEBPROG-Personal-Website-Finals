<template>
  <div>

    <!-- Gallery Section -->
    <section id="gallery-section">
      <Gallery @scroll-to-feedback="scrollToFeedback" />
    </section>

    <!-- Feedback Form Section -->
    <section id="feedback-section">
      <FeedbackForm />
    </section>
  </div>
</template>

<script setup>
import FeedbackForm from './components/FeedbackForm.vue';
import Gallery from './components/Gallery.vue';

const scrollToFeedback = () => {
  const feedbackSection = document.querySelector("#feedback-section");
  if (feedbackSection) {
    feedbackSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Jersey+10&display=swap');

h1, h2, h3, p {
  font-family: 'Jersey 10', serif;
  font-style: normal;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: black; /* Ensure full background coverage */
}
</style>
