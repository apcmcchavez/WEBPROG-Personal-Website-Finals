<template>
  <div class="hobbies-container">
    <!-- Title & Subtitle -->
    <div class="text-container">
      <h1>Hobbies and Interests</h1>
      <p>My hobbies and interests, such as gaming, art, and binge-watching, are shared here.</p>
    </div>

    <div class="content">
      <!-- Hobby Buttons -->
      <div class="hobby-buttons">
        <button 
          v-for="(hobby, index) in hobbies" 
          :key="index" 
          @click="togglePanel(hobby.name)"
          :class="{ active: activeHobby === hobby.name }"
        >
          <span>{{ hobby.label }}</span>
          <img :src="hobby.icon" alt="Hobby Icon" />
        </button>
      </div>

      <!-- Right Panel (Inside Hobbies Section) -->
      <div v-if="activeHobby" class="right-panel">
        <div class="carousel">
          <img 
            v-if="showArrows"
            class="arrow left-arrow" 
            src="/icons/arrow-left.png" 
            @click="prevImage"
            alt="Left Arrow"
          />
          
          <!-- Show three images dynamically -->
          <div class="image-container">
            <img 
              v-for="(image, index) in displayedImages" 
              :key="index" 
              :src="image" 
              class="hobby-image" 
              alt="Hobby Image"
            />
          </div>

          <img 
            v-if="showArrows"
            class="arrow right-arrow" 
            src="/icons/arrow-right.png" 
            @click="nextImage"
            alt="Right Arrow"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeHobby: null,
      currentImage: 0,
      hobbies: [
        { name: "games", label: "GAMES", icon: "/icons/games.png" },
        { name: "arts", label: "ARTS N' CRAFTS", icon: "/icons/arts.png" },
        { name: "binge", label: "BINGE WATCHING", icon: "/icons/binge.png" }
      ],
      images: {
        games: [
          "/images/games/games-1.png",
          "/images/games/games-2.png",
          "/images/games/games-3.png",
          "/images/games/games-4.png",
          "/images/games/games-5.png",
          "/images/games/games-6.png",
          "/images/games/games-7.png"
        ],
        arts: [
          "/images/arts/art-1.png",
          "/images/arts/art-2.png",
          "/images/arts/art-3.png"
        ],
        binge: [
          "/images/binge/binge-1.png",
          "/images/binge/binge-2.png",
          "/images/binge/binge-3.png",
          "/images/binge/binge-4.png",
          "/images/binge/binge-5.png",
          "/images/binge/binge-6.png"
        ]
      }
    };
  },
  computed: {
    hobbyImages() {
      return this.activeHobby ? this.images[this.activeHobby] || [] : [];
    },
    displayedImages() {
      if (!this.hobbyImages.length) return [];

      let startIndex = this.currentImage;
      let endIndex = (startIndex + 3) % this.hobbyImages.length;

      if (endIndex > startIndex) {
        return this.hobbyImages.slice(startIndex, endIndex);
      } else {
        return [
          ...this.hobbyImages.slice(startIndex), 
          ...this.hobbyImages.slice(0, endIndex)
        ];
      }
    },
    showArrows() {
      return this.hobbyImages.length > 3;
    }
  },
  methods: {
  togglePanel(hobby) {
    this.currentImage = 0; // Reset image index when switching
    this.activeHobby = this.activeHobby === hobby ? null : hobby;
  },
  prevImage() {
    const imageElements = document.querySelectorAll(".hobby-image");
    
    imageElements.forEach(img => {
      img.classList.add("fade-right"); // All images fade & move right
    });

    setTimeout(() => {
      this.currentImage = this.currentImage === 0 ? this.hobbyImages.length - 1 : this.currentImage - 1;
      
      setTimeout(() => {
        imageElements.forEach(img => {
          img.classList.remove("fade-right"); // Remove effect after change
        });
      }, 50);
    }, 300);
  },
  nextImage() {
    const imageElements = document.querySelectorAll(".hobby-image");

    imageElements.forEach(img => {
      img.classList.add("fade-left"); // All images fade & move left
    });

    setTimeout(() => {
      this.currentImage = this.currentImage === this.hobbyImages.length - 1 ? 0 : this.currentImage + 1;

      setTimeout(() => {
        imageElements.forEach(img => {
          img.classList.remove("fade-left"); // Remove effect after change
        });
      }, 50);
    }, 300);
  }
}
};
</script>

<style scoped>
.hobbies-container {
  background: url("/images/stars.png") no-repeat center center fixed;
  background-size: cover;
  padding: 50px;
  position: relative; /* Keeps panel inside the section */
}

/* Title & Subtitle */
.text-container h1 {
  color: #340B3C;
  font-size: 75px;
  font-weight: bold;
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.text-container p {
  color: #6B2855;
  font-size: 45px;
  margin-top: 0px;
  margin-bottom: 45px;
}

/* Content Layout */
.content {
  display: flex;
  align-items: flex-start;
  position: relative; /* Keeps the right panel inside */
}

/* Hobby Buttons */
.hobby-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Hobby Buttons */
/* Hobby Buttons */
.hobby-buttons button {
  width: 617px;
  height: 201px;
  background-color: #FFFFFF;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: none;
  cursor: pointer;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  text-align: left;
  padding-left: 40px;
  border: #ffffff;
}

/* Button outline appears on hover */
.hobby-buttons button:hover {
  border: 12px solid #6B2855;
  background-color: #ffffff; 
}

/* Outline remains when active */
.hobby-buttons button.active {
  border: 12px solid #6B2855;
}

.hobby-buttons span {
  color: #6B2855;
  font-family: 'Jersey 10', serif;
  font-size: 125px;
  line-height: 80px;
}

.hobby-buttons img {
  width: 130px;
  height: 130px;
}

/* Right Panel */
.right-panel {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 750px;
  top: 50px;
  background-color: black;
  width: 1305px;
  height: 65vh;
  border-left: 12px solid white;
  border-top: 12px solid white;
  border-top-left-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* This prevents scrolling */
  white-space: nowrap; /* Keeps images in a single row */
}

.right-panel img {
  height: 45vh; /* Adjust so images fit */
  object-fit: contain;
  display: inline-block; /* Ensures images stay in a row */
  padding-top: 0;
}

/* Carousel */
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
}

.hobby-image {
  width: auto;
  margin: 20px;
  max-width: 70%;
  max-height: 70vh;
  object-fit: contain;
  align-items: center;
  position: relative;
  top: -20px;
  opacity: 1;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hobby-image.fade-left {
  transform: translateX(-50px); /* Slight left shift */
  opacity: 0.3; /* Fades slightly */
}

.hobby-image.fade-right {
  transform: translateX(50px); /* Slight right shift */
  opacity: 0.3; /* Fades slightly */
}

.hobby-image:hover {
  filter: drop-shadow(0px 0px 15px white);
}

/* Arrow Buttons */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px; /* Adjust size */
  height: 50px;
  cursor: pointer;
  z-index: 10; /* Ensure they stay above images */
}

.left-arrow {
  left: -75px;
}

.right-arrow {
  right: -75px;
}



</style>
