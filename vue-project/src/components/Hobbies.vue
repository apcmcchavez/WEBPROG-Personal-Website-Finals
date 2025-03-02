<template>
  <div class="hobbies-container">
    <h2 class="title">Hobbies and Interests</h2>
    <p class="subtitle">My hobbies and interests, such as gaming, art, and binge-watching, are shared here.</p>

    <div class="hobbies-content">
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

      <div v-if="selectedHobby" class="right-panel">
        <button v-if="selectedHobby !== 'arts'" @click="prevImage" class="nav-button">
          <img src="/icons/arrow-left.png" alt="Left Arrow" />
        </button>

        <div class="image-container">
          <img v-for="image in visibleImages" :key="image" :src="image" class="display-image" />
        </div>

        <button v-if="selectedHobby !== 'arts'" @click="nextImage" class="nav-button">
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
  binge: ["/images/binge/binge (1).png", "/images/binge/binge (2).png", "/images/binge/binge (3).png", "/images/binge/binge (4).png", "/images/binge/binge (5).png", "/images/binge/binge (6).png" ],
};

const selectHobby = (hobby) => {
  selectedHobby.value = hobby;
  currentIndex.value = 0;
};

const visibleImages = computed(() => {
  if (!selectedHobby.value) return [];
  const images = hobbies[selectedHobby.value];

  return [
    images[currentIndex.value],
    images[(currentIndex.value + 1) % images.length],
    images[(currentIndex.value + 2) % images.length],
  ];
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

body, html {
  overflow-x: hidden;
}

h2, p, button {
  font-family: 'Jersey 10', serif;
  font-style: normal;
}

.hobbies-container {
  padding: 150px;
  min-height: 900px;
  background: url("/images/stars.png") center/cover fixed no-repeat;
}

.title {
  font-size: 70px;
  color: #340B3C;
  text-align: left;
  margin-left: 45px;
}

.subtitle {
  font-size: 45px;
  color: #6B2855;
  margin-bottom: 30px;
  text-align: left;
  margin-left: 45px;
}

.hobbies-content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 100vw; /* max-width: 1920px; */
  gap: 30px;
  margin-left: 10px;
  flex-wrap: wrap;
}

.hobby-buttons {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  width: 617px;
  margin-left: 45px;
  margin-bottom: 50px;
  margin-right:  60px;
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
  border: 10px solid #6B2855;
}

.icon {
  width: 135px;
  height: 135px;
}

.right-panel {
  background: black;
  padding: 40px;
  max-width: calc(100vw - 50px); /* Limits max width */
  height: 640px;
  position: relative;
  right: 0; /* Aligns to the right */
  top: auto; /*top: 75px */
  overflow: hidden; /* Ensure content does not overflow */

  border-top: 12px solid white;
  border-left: 12px solid white;

  margin-left: auto;  /*margin-left: 25px */
  margin-top: 0; /*margin-top: 152.1px */

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;

  border-top-left-radius: 50px;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent overflow */
  gap: 10px;
}

.image-wrapper {
  width: 420px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.display-image {
  width: 325px;
  max-width: 100%; /* Prevent overflow */
  max-height: 100%;
  object-fit: contain; /* Ensures images do not exceed container */
}


.nav-button img {
  width: 59px;
  height: 118px;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
}

.hobbies-container, .hobbies-content, .right-panel {
  outline: 2px solid red; /* Helps identify layout issues */
}

</style>
