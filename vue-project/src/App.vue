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
body {
  margin: 0;
  min-height: 100vh;
  background: url('@/assets/images/grid.png') center/cover fixed no-repeat;
}
</style>