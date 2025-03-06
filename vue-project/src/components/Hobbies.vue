<template>
  <div class="hobbies-container">
    <!-- Title & Subtitle -->
    <div class="text-container">
      <h1>Hobbies and Interests</h1>
      <p>My hobbies and interests, such as gaming, art, and binge-watching, are shared here.</p>
      
      <!-- Hobby Buttons for Mobile View -->
      <div class="hobby-buttons-mobile">
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
    </div>

    <div class="content">
      <!-- Hobby Buttons for Desktop View -->
      <div class="hobby-buttons-desktop">
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
          
          <!-- Show images dynamically based on screen size -->
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
      screenWidth: window.innerWidth,
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
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    hobbyImages() {
      return this.activeHobby ? this.images[this.activeHobby] || [] : [];
    },
    displayedImages() {
      if (!this.hobbyImages.length) return [];

      let startIndex = this.currentImage;
      let imagesToShow = 3; // Default for large screens

      // Adjust number of images based on screen width
      if (this.screenWidth <= 480) {
        imagesToShow = 1;
      } else if (this.screenWidth <= 780) {
        imagesToShow = 2;
      }

      let endIndex = (startIndex + imagesToShow) % this.hobbyImages.length;

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
      return this.hobbyImages.length > (this.screenWidth <= 780 ? 2 : 3);
    }
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
      
      // Reset current image when screen size changes to avoid potential out-of-bounds issues
      if (this.activeHobby) {
        this.currentImage = 0;
      }
    },
    togglePanel(hobby) {
    this.currentImage = 0; // Reset image index when switching
    this.activeHobby = this.activeHobby === hobby ? null : hobby; // Toggle state
  },
    prevImage() {
      const imageElements = document.querySelectorAll(".hobby-image");
      
      imageElements.forEach(img => {
        img.classList.add("fade-right");
      });

      setTimeout(() => {
        this.currentImage = this.currentImage === 0 ? this.hobbyImages.length - 1 : this.currentImage - 1;
        
        setTimeout(() => {
          imageElements.forEach(img => {
            img.classList.remove("fade-right");
          });
        }, 50);
      }, 300);
    },
    nextImage() {
      const imageElements = document.querySelectorAll(".hobby-image");

      imageElements.forEach(img => {
        img.classList.add("fade-left");
      });

      setTimeout(() => {
        this.currentImage = this.currentImage === this.hobbyImages.length - 1 ? 0 : this.currentImage + 1;

        setTimeout(() => {
          imageElements.forEach(img => {
            img.classList.remove("fade-left");
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
  position: relative;
}

/* Title & Subtitle */
.text-container h1 {
  color: #340B3C;
  font-size: 75px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}
.text-container p {
  color: #6B2855;
  font-size: 45px;
  margin-top: 0;
  margin-bottom: 45px;
}

/* Content Layout */
.content {
  display: flex;
  align-items: flex-start;
  position: relative;
}

/* Desktop Hobby Buttons */
.hobby-buttons-desktop {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 50px;
}

/* Mobile Hobby Buttons */
.hobby-buttons-mobile {
  display: none;
}

/* Hobby Buttons Shared Styles */
.hobby-buttons-desktop button,
.hobby-buttons-mobile button {
  width: 617px;
  height: 201px;
  background-color: #FFFFFF;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: #ffffff;
  cursor: pointer;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  text-align: left;
  padding-left: 40px;
}

.hobby-buttons-desktop button:hover,
.hobby-buttons-mobile button:hover {
  border: 12px solid #6B2855;
  background-color: #ffffff; 
}

.hobby-buttons-desktop button.active,
.hobby-buttons-mobile button.active {
  border: 12px solid #ffffff;
}

.hobby-buttons-desktop span,
.hobby-buttons-mobile span {
  color: #6B2855;
  font-family: 'Jersey 10', serif;
  font-size: 125px;
  line-height: 80px;
}

.hobby-buttons-desktop img,
.hobby-buttons-mobile img {
  width: 130px;
  height: 130px;
}

/* Right Panel */
.right-panel {
  position: absolute;
  right: 0;
  left: 732px;
  top: 90px; 
  background-color: black;
  width: 1142px;
  height: 65vh;
  border-left: 12px solid white;
  border-top: 12px solid white;
  border-top-left-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}

.right-panel img {
  height: 45vh;
  object-fit: contain;
  display: inline-block;
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
  transform: translateX(-50px);
  opacity: 0.3;
}

.hobby-image.fade-right {
  transform: translateX(50px);
  opacity: 0.3;
}

.hobby-image:hover {
  filter: drop-shadow(0px 0px 15px white);
}

/* Arrow Buttons */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
}

.left-arrow {
  left: -50px;
}

.right-arrow {
  right: -50px;
}


@media screen and (max-width: 780px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  
  .text-container h1 {
    color: #340B3C;
    font-size: 60px;
    font-weight: bold;
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .text-container p {
    color: #6B2855;
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 35px;
  }

  .right-panel {
    position: relative;
    right: auto;
    left: auto;
    width: 95%;
    height: 55vh;
    top: 75px;
    max-width: 700px;
    margin: 0 auto;
    border-top-right-radius: 50px;
    border-right: 12px solid white;
  }
  
  .right-panel img {
    height: 40vh; /* Adjust so images fit */
    object-fit: contain;
    display: inline-block; /* Ensures images stay in a row */
    padding-top: 0;
  }

  /* Hide desktop buttons */
  .hobby-buttons-desktop {
    display: none;
    margin-right: 0;
  }

  /* Mobile Hobby Buttons */
  .hobby-buttons-mobile {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    border: none; /* Ensure no unwanted border */
  }

  .hobby-buttons-mobile button {
    width: auto;
    height: 100px;
    padding: 10px 20px;
    border: none;
    background-color: #ffffff;
    transition: border 0.3s ease-in-out;
  }

  /* Add outline on hover */
  .hobby-buttons-mobile button:hover {
    border: 6px solid #6B2855;
  }

  /* Active button (with border) */
  .hobby-buttons-mobile button.active {
    border: 6px solid #6B2855;
  }

  /* Remove border when clicked again (inactive state) */
  .hobby-buttons-mobile button:not(.active) {
    border: none;
  }

  .hobby-buttons-mobile span {
    font-size: 30px;
    line-height: normal;
  }

  .hobby-buttons-mobile img {
    width: 60px;
    height: 60px;
  }
}


@media screen and (max-width: 480px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  
  .text-container h1 {
    color: #340B3C;
    font-size: 50px;
    font-weight: bold;
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .text-container p {
    color: #6B2855;
    font-size: 22px;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  /* Right Panel Adjustments */
  .right-panel {
    position: relative;
    right: auto;
    left: auto;
    width: 90%;
    height: 45vh;
    top: 70px;
    max-width: 400px;
    margin: 0 auto;
    border-top-right-radius: 50px;
    border-right: 12px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .right-panel .carousel {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right-panel img.hobby-image {
    height: 50vh; /* Adjust image size */
    object-fit: contain;
    display: block;
    margin: auto; /* Center the image */
    transition: transform 0.3s ease-in-out;
  }

  /* Smaller Arrow Buttons */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 35px; /* Smaller size */
    height: 35px;
    cursor: pointer;
    z-index: 10;
  }

  .left-arrow {
    left: 15px;
  }

  .right-arrow {
    right: 15px;
  }

  /* Hide desktop buttons */
  .hobby-buttons-desktop {
    display: none;
    margin-right: 0;
  }

  /* Mobile Hobby Buttons (Stacked) */
  .hobby-buttons-mobile {
    display: flex;
    flex-direction: column; /* Stack buttons vertically */
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    border: none;
  }

  .hobby-buttons-mobile button {
    width: 90%;
    height: 90px;
    padding: 10px 15px;
    border: none;
    background-color: #ffffff;
    transition: border 0.3s ease-in-out;
  }

  /* Add outline on hover */
  .hobby-buttons-mobile button:hover {
    border: 8px solid #6B2855;
  }

  /* Active button (with border) */
  .hobby-buttons-mobile button.active {
    border: 8px solid #6B2855;
  }

  /* Remove border when clicked again */
  .hobby-buttons-mobile button:not(.active) {
    border: none;
  }

  .hobby-buttons-mobile span {
    font-size: 35px;
    line-height: normal;
  }

  .hobby-buttons-mobile img {
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-width: 360px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  
  .text-container h1 {
    color: #340B3C;
    font-size: 40px; /* Slightly smaller */
    font-weight: bold;
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }

  .text-container p {
    color: #6B2855;
    font-size: 18px; /* Smaller text */
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: center;
  }

  /* Right Panel Adjustments */
  .right-panel {
    position: relative;
    right: auto;
    left: auto;
    width: 95%; /* Slightly smaller */
    height: 40vh; /* Adjusted height */
    top: 75px;
    max-width: 320px; /* Smaller max-width */
    margin: 0 auto;
    border-top-right-radius: 40px; /* Softer radius */
    border-right: 10px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .right-panel .carousel {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right-panel img.hobby-image {
    height: 40vh; /* Adjust image size */
    object-fit: contain;
    display: block;
    margin: auto; /* Center the image */
    transition: transform 0.3s ease-in-out;
  }

  /* Smaller Arrow Buttons */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 25px; /* Even smaller size */
    height: 25px;
    cursor: pointer;
    z-index: 10;
  }

  .left-arrow {
    left: 10px;
  }

  .right-arrow {
    right: 10px;
  }

  /* Hide desktop buttons */
  .hobby-buttons-desktop {
    display: none;
    margin-right: 0;
  }

  /* Mobile Hobby Buttons (Stacked) */
  .hobby-buttons-mobile {
    display: flex;
    flex-direction: column; /* Stack buttons vertically */
    align-items: center;
    gap: 10px; /* Smaller gap */
    margin-bottom: 10px;
    border: none;
  }

  .hobby-buttons-mobile button {
    width: 95%;
    height: 80px; /* Smaller height */
    padding: 8px 12px;
    border: none;
    background-color: #ffffff;
    transition: border 0.3s ease-in-out;
  }

  /* Add outline on hover */
  .hobby-buttons-mobile button:hover {
    border: 6px solid #6B2855;
  }

  /* Active button (with border) */
  .hobby-buttons-mobile button.active {
    border: 6px solid #6B2855;
  }

  /* Remove border when clicked again */
  .hobby-buttons-mobile button:not(.active) {
    border: none;
  }

  .hobby-buttons-mobile span {
    font-size: 28px;
    line-height: normal;
  }

  .hobby-buttons-mobile img {
    width: 55px;
    height: 55px;
  }
}


</style>