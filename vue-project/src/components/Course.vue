<template>
    <div class="course-container">
      <!-- Left Image -->
      <img src="/images/apc-college.png" class="course-image" alt="APC Building" />
  
      <!-- Right Text Section -->
      <div class="text-container">
        <div class="info-box">
          <h2>Course</h2>
          <p>Currently, I am under the course BSCS-SS, Bachelor of Science in Computer Science with specialization in Software Systems in Asia Pacific College.</p>
        </div>
  
        <div class="info-box">
          <h2>IT Experience</h2>
          <p>To be honest, I do not have experience with IT prior to me becoming a student of APC. The only experience I could say would be the things taught to me during my first year of college.</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Main Container */
    .course-container {
    display: flex;
    align-items: center; /* Ensures items stay properly aligned */
    width: 100vw;
    height: 100vh;
    background-image: url('/images/checkered.png'); /* Checkered background */
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
    }

    /* Left Image */
    .course-image {
    width: 1044px;
    height: 100vh; /* Ensure full height */
    object-fit: cover;
    flex-shrink: 0;
    display: block; /* Fixes bottom space issue */
    margin: 0;
    padding: 0;
    }

    /* Right Text Container */
    .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(107, 40, 85, 0.62); /* Purple with 62% opacity */
    padding: 40px;
    border-radius: 15px;
    max-width: 600px; /* Ensures it does NOT stretch */
    height: auto; /* Prevents stretching */
    margin-left: 95px; /* Increased margin to create more gap */
    }


  
  /* Text Box */
  .info-box {
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: clamp(48px, 3vw, 30px); /* Responsive heading */
    color: #6B1E6B;
    margin-bottom: 3px;
  }
  
  p {
    font-size: clamp(30px, 1.5vw, 18px);
    color: white;
    line-height: 1.4;
  }
  
  /* Responsive */
  @media (max-width: 1400px) {
    .course-image {
      width: 900px;
      height: 100vh;
    }
  }
  
  @media (max-width: 1024px) {
    .course-container {
      flex-direction: column;
      align-items: center;
    }
  
    .course-image {
      width: 100%;
      height: auto;
    }
  
    .text-container {
      max-width: 90%;
      margin-top: 20px;
    }
  }
  
  @media (max-width: 768px) {
    .course-image {
      width: 100%;
    }
  
    .text-container {
      padding: 20px;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 22px;
    }
  
    p {
      font-size: 14px;
    }
  }
  </style>
  