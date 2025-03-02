<template>
    <div class="gallery-container" v-if="showGallery">
      <button @click="closeGallery" class="close-btn">Close</button>
      <div class="image-grid">
        <img v-for="(image, index) in images" :key="index" :src="image" class="gallery-image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showGallery = ref(false)
  
  // Image sources (replace with actual paths)
  const images = [
    '/src/assets/images/Me Painting.jpg',
    '/src/assets/images/With my Girl Besties.jpg',
    '/src/assets/images/Me and my siblings.jpg',
    '/src/assets/images/art exhibit.png',
    '/src/assets/images/bestiedate.jpg',
    '/src/assets/images/choco.jpg',
    '/src/assets/images/lloyd1.jpg',
    '/src/assets/images/ashy.jpg',
    '/src/assets/images/lloyd2.jpg',
    '/src/assets/images/frosty.jpg',
    '/src/assets/images/First time baking a cake.jpg',
    '/src/assets/images/first year honor list.jpg',
    '/src/assets/images/devcon.jpg',
    '/src/assets/images/ny2025.jpg',
    '/src/assets/images/crams.JPG'
  ]
  
  // Function to open/close gallery
  const openGallery = () => {
    showGallery.value = true
  }
  
  const closeGallery = () => {
    showGallery.value = false
  }
  
  // Expose function to parent
  defineExpose({ openGallery })
  </script>
  
  <style scoped>
  /* Full-screen overlay */
  .gallery-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    overflow-y: auto;
  }
  
  /* Close button */
  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 10px 15px;
    font-size: 1.2rem;
    background: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Responsive Image Grid */
  .image-grid {
    display: grid;
    grid-gap: 10px;
    max-width: 90vw;
    width: 100%;
  }
  
  /* Desktop: 5 columns, 3 rows */
  @media (min-width: 1024px) {
    .image-grid {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 200px); /* Fixed height per row */
    }
  }
  
  /* Tablet: 3 columns, auto rows */
  @media (min-width: 600px) and (max-width: 1023px) {
    .image-grid {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(auto-fit, 180px);
    }
  }
  
  /* Mobile: 2 columns, auto rows */
  @media (max-width: 599px) {
    .image-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(auto-fit, 150px);
    }
  }
  
  /* Image styles */
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures images maintain aspect ratio */
    border-radius: 8px;
  }
  </style>
  