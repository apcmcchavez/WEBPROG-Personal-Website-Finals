<template>
    <div class="hobbies-container">
      <h2 class="title">Hobbies and Interests</h2>
      <p class="subtitle">My hobbies and interests, such as gaming, art, and binge-watching, are shared here.</p>
  
      <div class="hobbies-content">
        <!-- Hobby Buttons (Left Side) -->
        <div class="hobby-buttons">
          <button @click="selectHobby('games')" class="hobby-button">
            <span>GAMES</span>
            <img src="/icons/games.png" alt="Games Icon" class="icon" />
          </button>
          <button @click="selectHobby('arts')" class="hobby-button">
            <span>ARTS N’ CRAFTS</span>
            <img src="/icons/arts.png" alt="Arts Icon" class="icon" />
          </button>
          <button @click="selectHobby('binge')" class="hobby-button">
            <span>BINGE WATCHING</span>
            <img src="/icons/binge.png" alt="Binge Icon" class="icon" />
          </button>
        </div>
  
        <!-- Right Panel (Appears on the Right) -->
        <div v-if="selectedHobby" class="right-panel">
          <button @click="prevImage" class="nav-button left">
            <img src="/icons/arrow-left.png" alt="Left Arrow" />
          </button>
  
          <div class="image-container">
            <img v-if="hobbies[selectedHobby][1]" :src="hobbies[selectedHobby][1]" class="display-image secondary-image" />
            <img :src="currentImage" class="display-image primary-image" />
          </div>
  
          <button @click="nextImage" class="nav-button right">
            <img src="/icons/arrow-right.png" alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const selectedHobby = ref(null);
  const currentIndex = ref(0);
  
  const hobbies = {
    games: ["/images/games/games (1).png", "/images/games/games (2).png", "/images/games/games (3).png", "/images/games/games (4).png", "/images/games/games (5).png", "/images/games/games (6).png", "/images/games/games (7).png"],
    arts: ["/images/arts/arts (1).png", "/images/arts/arts (2).png", "/images/arts/arts (3).png"],
    binge: ["/images/binge/binge (1).png", "/images/binge/binge (2).png", "/images/binge/binge (3).png", "/images/binge/binge (4).png", "/images/binge/binge (5).png", "/images/binge/binge (6).png",],
  };
  
  const selectHobby = (hobby) => {
    selectedHobby.value = hobby;
    currentIndex.value = 0;
  };
  
  const currentImage = computed(() => {
    return selectedHobby.value ? hobbies[selectedHobby.value][currentIndex.value] : "";
  });
  
  const prevImage = () => {
    if (selectedHobby.value) {
      currentIndex.value = (currentIndex.value - 1 + hobbies[selectedHobby.value].length) % hobbies[selectedHobby.value].length;
    }
  };
  
  const nextImage = () => {
    if (selectedHobby.value) {
      currentIndex.value = (currentIndex.value + 1) % hobbies[selectedHobby.value].length;
    }
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Jersey+10&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  h2, p, button {
    font-family: 'Jersey 10', serif;
    font-style: normal;
  }
  
  /* Page Container */
  .hobbies-container {
    padding: 50px;
    background: url("/images/stars.png") center/cover fixed no-repeat;
  }
  
  /* Title & Subtitle (Left-Aligned) */
  .title {
    font-size: 70px;
    color: #340B3C;
    text-align: left;
    margin-left: 10px;
  }
  
  .subtitle {
    font-size: 45px;
    color: #6B2855;
    margin-bottom: 30px;
    text-align: left;
    margin-left: 10px;
  }
  
  /* Content Layout (Flexbox for Side-by-Side) */
  .hobbies-content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  max-width: 1300px;
  gap: 50px;
  margin-left: 10px; /* Align with title and subtitle */
  }   

  
  /* Hobby Buttons (Left-Aligned) */
  .hobby-buttons {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    width: 617px;
    margin-left: 10px;
  }
  
  .hobby-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 617px;
    height: 201px;
    font-size: 90px;
    color: #6B2855;
    background: white;
    border: none;
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s ease-in-out;
    text-align: left;
  }
  
  .hobby-button:hover {
  transform: scale(1.05);
  border: 10px solid #6B2855; /* Added 'solid' and the color */
  }
  
  .icon {
    width: 135px;
    height: 135px;
  }
  
  /* Right Panel */
  .right-panel {
    flex-shrink: 0;
    background: black;
    border-radius: 20px 50px 50px 20px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 12px solid white;
    width: 520px;
    height: 500px;
    position: relative;
  }
  
  /* Image Container */
  .image-container {
    display: flex;
    position: relative;
  }
  
  .primary-image {
    max-width: 320px;
    max-height: 460px;
    z-index: 2;
  }
  
  .secondary-image {
    max-width: 280px;
    max-height: 420px;
    position: absolute;
    left: -40px;
    opacity: 0.6;
    z-index: 1;
  }
  
  /* Navigation Buttons */
  .nav-button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    z-index: 3;
  }
  
  .nav-button img {
    width: 50px;
    height: 50px;
  }
  
  .left {
    left: 15px;
  }
  
  .right {
    right: 15px;
  }
  </style>
  