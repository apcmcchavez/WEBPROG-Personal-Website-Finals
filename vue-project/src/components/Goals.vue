<template>
  <div class="goals-container">
    <div class="heart-container">
      <img src="/images/heart.png" class="heart" alt="Heart Shape" />
      <div class="text-content">
        <h1>My Goals</h1>
        <p>
          I want to be rich to the point where I wouldn't have to worry about indulging in my wants while also providing for my family.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Global Fixes */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  overflow-x: hidden;
  width: 100%;
}

/* Main Container */
.goals-container {
  position: relative;
  width: 100%; /* Fixed from 100vw */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url('/images/checkered.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Prevents tiling */
}

/* Heart Container */
.heart-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: min(50vw, 899px); /* Matches heart natural size */
  max-width: 899px;
}

/* Heart Image */
.heart {
  width: 100%;
  height: auto;
}

/* Text Positioning */
.text-content {
  position: absolute;
  width: 55%; 
  max-width: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Header */
h1 {
  font-size: clamp(20px, 3vw, 30px);
  color: #9374C0;
  margin-bottom: 12px;
}

/* Paragraph */
p {
  font-size: clamp(14px, 1.5vw, 18px);
  color: white;
  line-height: 1.4;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .heart-container {
    width: 60vw;
  }

  .text-content {
    width: 70%;
  }
}

@media (max-width: 480px) {
  .heart-container {
    width: 75vw;
  }

  .text-content {
    width: 80%;
  }

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
}
</style>
