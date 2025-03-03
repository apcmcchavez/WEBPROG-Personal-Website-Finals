<template>
    <div class="goals-page">
      <div class="heart-container">
        <img src="/images/heart.png" alt="Heart Shape" class="heart" />
        <div class="text">
          <h1>My Goals</h1>
          <p>
            I want to be rich to the point where I wouldn't have to worry about indulging in my wants
            while also providing for my family.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Prevents overflow issues */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  
  /* Full-page background */
  .goals-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/images/checkered.png') center/cover no-repeat;
  }
  
  /* Heart and text container */
  .heart-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    max-width: 900px;
  }
  
  /* Heart Image */
  .heart {
    width: 100%;
    height: auto;
  }
  
  /* Text inside the heart */
  .text {
    position: absolute;
    text-align: center;
    color: white;
    font-family: 'Jersey 10', sans-serif;
    width: 70%;
    max-width: 450px;
  }
  
  /* Text scaling */
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 10px;
    color: #9374C0;
  }
  
  p {
    font-size: clamp(1rem, 2vw, 1.8rem);
    line-height: 1.3;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .heart-container {
      width: 70%;
    }
  }
  
  @media (max-width: 768px) {
    .heart-container {
      width: 90%;
    }
  }
  
  @media (max-width: 480px) {
    .text {
      width: 80%;
      max-width: 250px;
    }
  }
  </style>
  