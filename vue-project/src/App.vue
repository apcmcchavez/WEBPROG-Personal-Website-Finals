<template>
  <div>
    <h1>Hello World!</h1>
    <FeedbackForm />
  </div>
</template>

<script setup>
import FeedbackForm from './components/FeedbackForm.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Jersey+10&display=swap');

h1, h2, h3, p {
    font-family: 'Jersey 10', serif;
    font-style: normal;
}

body {
  margin: 0;
  min-height: 100vh;
  background: url('@/assets/images/grid.png') center/cover fixed no-repeat;
}
</style>
