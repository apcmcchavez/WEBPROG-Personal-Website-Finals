<template>
  <div>
    <h2>Do you want to see the gallery?</h2>
    <button @click="openGallery">Yes</button>
    <Gallery ref="galleryRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Gallery from './Gallery.vue'

const galleryRef = ref(null)

const openGallery = () => {
  galleryRef.value.openGallery()
}
</script>
