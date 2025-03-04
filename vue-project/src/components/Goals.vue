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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url('/images/checkered.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Heart Container */
.heart-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: min(45vw, 899px); /* Default size */
  max-width: 899px;
  transition: width 0.4s ease-in-out;
}

/* Heart Image */
.heart {
  width: 100%;
  height: auto;
  transition: transform 0.4s ease-in-out;
}

/* Text Positioning */
.text-content {
  position: absolute;
  width: 50%; /* Adjusted to prevent overlap */
  max-width: 380px; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease-in-out, font-size 0.4s ease-in-out;
}

/* Header */
h1 {
  font-size: clamp(40px, 3vw, 50px); /* Balanced scaling */
  color: #9374C0;
  margin-bottom: 10px;
  transition: font-size 0.4s ease-in-out;
}

/* Paragraph */
p {
  font-size: clamp(16px, 1.2vw, 25px); /* Prevents overlap */
  color: white;
  line-height: 1.4;
  transition: font-size 0.4s ease-in-out;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .heart-container {
    width: 50vw; /* Slightly bigger heart */
  }

  .text-content {
    width: 60%;
  }
}

@media (max-width: 924px) {
  .heart-container {
    width: 55vw; /* Increase heart size slightly */
  }

  h1 {
    font-size: clamp(38px, 4vw, 45px);
  }

  p {
    font-size: clamp(14px, 2vw, 22px);
  }
}

@media (max-width: 768px) {
  .heart-container {
    width: 60vw;
  }

  .text-content {
    width: 65%;
  }

  h1 {
    font-size: clamp(34px, 4vw, 40px);
  }

  p {
    font-size: clamp(14px, 2vw, 20px);
  }
}

@media (max-width: 480px) {
  .heart-container {
    width: 70vw;
  }

  .text-content {
    width: 75%;
  }

  h1 {
    font-size: clamp(30px, 5vw, 35px);
  }

  p {
    font-size: clamp(12px, 3vw, 18px);
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
