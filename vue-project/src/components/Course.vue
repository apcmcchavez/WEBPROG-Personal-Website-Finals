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
/* 🔧 Global Fixes */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Prevents unwanted horizontal scroll */
}

/* 📌 Main Container */
.course-container {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('/images/checkered.png');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  position: relative;
}

/* 📸 Left Image */
.course-image {
  width: 1044px;
  height: 100vh; /* Full viewport height */
  object-fit: cover;
  flex-shrink: 0;
  display: block;
  margin: 0;
  padding: 0;
  position: absolute; /* Force flush to the left */
  left: 0;
  top: 0;
  
}

/* 📝 Right Text Container */
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(107, 40, 85, 0.62); /* Transparent purple */
  padding: 40px;
  border-radius: 15px;
  width: 600px;
  height: auto;
  margin-left: 1140px; /* Matches image width */
}

/* 🎨 Typography & Spacing */
h2 {
  font-size: clamp(30px, 3vw, 48px); /* Responsive heading */
  color: #6B1E6B;
  margin-bottom: 5px;
}

p {
  font-size: clamp(18px, 1.5vw, 30px);
  color: white;
  line-height: 1.4;
  text-align: justify; /* Makes text look cleaner */
}

/* 📱 Responsive Design */
@media (max-width: 1400px) {
  .course-image {
    width: 900px;
  }
  .text-container {
    margin-left: 920px;
    width: 500px;
  }
}

@media (max-width: 1024px) {
  .course-container {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 20px 0;
  }

  .course-image {
    width: 100%;
    height: auto;
    position: relative; /* Reverts absolute positioning */
  }

  .text-container {
    width: 90%;
    max-width: 100%;
    margin-left: 0;
    margin-top: 20px;
    padding: 30px;
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
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }

  .text-container {
    padding: 15px;
  }
}

  </style>
  