<template>
  <div class="about-container">
    <!-- Background Overlays -->
    <div class="background">
      <img src="/images/stars.png" class="stars" alt="Stars Background" />
      <img src="/images/check-overlay.png" class="overlay" alt="Checkered Overlay" />
    </div>

    <div class="content">
      <!-- Left Image -->
      <img src="/images/me.png" class="profile-image" alt="Iyah's Photo" />

      <!-- Right Side -->
      <div class="text-section">
        <!-- Title -->
        <h1 class="halo">Halo >_<</h1>

        <!-- Typing Effect Subtitle -->
        <h2 class="subtitle">
          <span class="static-text">I'm</span>
          <span class="typing">{{ displayedText }}</span><span class="cursor">|</span>
        </h2>

        <!-- Paragraph container -->
        <div class="text-container">
          <p class="description">
            You can just call me "Iyah" tho. I am from Kawit, Cavite. A student who chose to take a course that earns
            more money instead of my dream course. I am the eldest among the three children of Mon and Vangie Chavez.
            I like challenging myself and making creative things, that's why I decided to make my webpage look like
            this (hopefully you'll like it hehe). I also like to play games in my free time. Consider subscribing and
            following me on my socials, I promise when I get more "fans" I'll upload more often.
          </p>
        </div>

        <!-- Social Icons -->
        <div class="social-icons">
          <a href="https://www.youtube.com/@serendipitiyah" target="_blank" class="icon-container">
            <img src="/icons/youtube.png" alt="YouTube" class="icon" />
          </a>
          <a href="https://www.linkedin.com/in/mariyah-chavez-4b309b285/" target="_blank" class="icon-container">
            <img src="/icons/linkedin.png" alt="LinkedIn" class="icon" />
          </a>
          <a href="https://github.com/apcmcchavez" target="_blank" class="icon-container">
            <img src="/icons/github.png" alt="GitHub" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const words = [" iyahtot... ", " Mariyah... ", " seren... ", " dreary... "];
const displayedText = ref("");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    displayedText.value = currentWord.substring(0, charIndex--);
  } else {
    displayedText.value = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 75 : 150;
  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 700;
  }

  setTimeout(typeEffect, speed);
};

onMounted(() => {
  typeEffect();
});
</script>

<style scoped>
/* Main Container */
.about-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background */
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.stars,
.overlay {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

/* Content Layout */
.content {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 80%;
  z-index: 2;
  height: 100%;
}

/* Left Image */
.profile-image {
  width: 596.25px;
  height: 806px;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 10%;
}

/* Right Side (Text & Icons) */
.text-section {
  position: absolute;
  left: calc(10% + 680px);
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Halo Title */
.halo {
  font-family: "Jersey 10", sans-serif;
  font-size: 75px;
  color: #340B3C;
  margin-bottom: 0px;
}

/* Subtitle with Typing Effect */
.subtitle {
  font-family: "Jersey 10", sans-serif;
  font-size: 75px;
  color: #6B2855;
  margin-top: -5px;
  margin-bottom: 15px;
}

.static-text {
  color: #6B2855;
}

.typing {
  color: #9D427F;
}

/* Blinking Cursor */
.cursor {
  color: #9D427F;
  display: inline-block;
  width: 10px;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Text Container */
.text-container {
  background-color: rgba(217, 217, 217, 0.65);
  padding: 30px;
  border-radius: 9px;
  max-width: 700px;
  max-height: 270px;
  text-align: left;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Description Text */
.description {
  font-family: "Jersey 10", sans-serif;
  font-size: 28px;
  color: black;
  margin-top: -4px;
  line-height: 35px;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

/* Icon Container */
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background-color: #D9D9D9;
  border-radius: 8px;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
}

/* Icons */
.icon {
  width: 61.8px;
  height: 60px;
  transition: filter 0.3s ease-in-out, transform 0.2s ease-in-out;
}

/* Hover Effects */
.icon-container:hover {
  background-color: #6B2855;
}

.icon-container:hover .icon {
  filter: brightness(0) invert(1);
  transform: scale(0.9);
}

/* RESPONSIVE STYLES */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    max-width: 755px;
  }

  .profile-image {
    width: 60%;
    height: auto;
    position: relative;
    left: auto;
    margin-top: 35px;
  }

  .text-section {
    position: relative;
    left: auto;
    bottom: auto;
    align-items: center;
    text-align: center;
    width: 90%;
  }

  .halo {
    font-size: clamp(20px, 8vw, 40px);
  }

  .subtitle {
    font-size: clamp(24px, 6vw, 30px);
  }

  /* Prevents text from exceeding the box */
.description {
  max-width: 100%;
  overflow-wrap: break-word;
  font-size: clamp(14px, 2vw, 20px);
  line-height: 1.5;
}

  .text-container {
  width: 100%; /* Adjust width as needed */
  max-width: 1500px; /* Ensures it doesn't stretch too wide */
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;
  background: rgba(217, 217, 217, 0.65);
  border-radius: 9px;
  overflow: hidden;
  word-wrap: break-word;
  text-align: justify;
}

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }

  .icon-container {
    width: clamp(40px, 10vw, 45px);
    height: clamp(40px, 10vw, 45px);
  }

  .icon {
    width: 80%;
    height: 80%;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 80%;
    margin-bottom: 10px;
  }

  .halo {
    font-size: clamp(24px, 10vw, 40px);
  }

  .subtitle {
    font-size: clamp(20px, 8vw, 35px);
  }

  .description {
    font-size: clamp(15px, 5vw, 15px);
    line-height: clamp(15px, 6vw, 25px);
  }

  .text-container {
    padding: 15px;
  }

  .icon-container {
    width: clamp(40px, 12vw, 40px);
    height: clamp(40px, 12vw, 40px);
  }

  .icon {
    width: 75%;
    height: 75%;
  }
}


</style>
