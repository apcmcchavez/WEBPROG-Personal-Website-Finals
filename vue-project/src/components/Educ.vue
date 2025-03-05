<template>
  <div class="education-page">
     <!-- Fade Overlay -->
    <div class="fade-overlay"></div>
    <!-- Background Image -->
    <div class="background"></div>

    <!-- Header Section -->
    <div class="header-section">
      <h1 class="main-title">My Education Journey</h1>
      <p class="sub-title">Here are the schools I attended all throughout the years.</p>
    </div>

    <!-- Education Cards Carousel -->
    <div ref="carousel" class="education-container">
      <div class="education-scroll">
        <div
          v-for="(school, index) in schools"
          :key="index"
          class="education-card"
          :style="{ backgroundImage: `url(${school.background})` }"
        >
          <div class="overlay"></div>
          <img :src="school.logo" alt="School Logo" class="school-logo" />
          <div class="school-info">
            <h3 class="school-name">{{ school.name }}</h3>
            <p class="school-years">{{ school.years }}</p>
            <div class="awards">
              <p v-for="(award, i) in school.awards" :key="i">
                <span class="year-level">{{ award.level }}:</span>
                <span class="award-text"> {{ award.title }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schools: [
        {
          logo: "/images/educ-logo/daycare.png",
          background: "/images/education/daycare-school.jpg",
          name: "Tabon 3 Daycare Center",
          years: "2008-2010",
          awards: [{ level: "Senior Kinder", title: " 1st Honor" }],
        },
        {
          logo: "/images/educ-logo/brickwood.png",
          background: "/images/education/brickwood-school.jpg",
          name: "Brickwood School",
          years: "2010-2011",
          awards: [{ level: "Preparatory", title: " First in Deportment" }],
        },
        {
          logo: "/images/educ-logo/milden.png",
          background: "/images/education/milden-school.jpg",
          name: "Mil Den Academy",
          years: "2011-2014",
          awards: [
            { level: "Grade 2", title: " 2nd Honor" },
            { level: "Grade 3", title: " 3rd Honor" },
          ],
        },
        {
          logo: "/images/educ-logo/aes.png",
          background: "/images/education/aes-school.jpg",
          name: "Aguinaldo Elementary School",
          years: "2014-2017",
          awards: [
            { level: "Grade 4", title: " 7th Honor" },
            { level: "Grade 5", title: " 3rd Honor" },
          ],
        },
        {
          logo: "/images/educ-logo/tirona.png",
          background: "/images/education/tirona-school.jpg",
          name: "Emiliano Tria Tirona Memorial National Integrated High School",
          years: "2017-2021",
          awards: [
            { level: "Grade 7", title: " With Honors" },
            { level: "Grade 8", title: " With Honors" },
            { level: "Grade 9", title: " With High Honors" },
            { level: "Grade 10", title: " With High Honors" },
          ],
        },
        {
          logo: "/images/educ-logo/is.png",
          background: "/images/education/is-school.jpg",
          name: "Integrated School of Science",
          years: "2021-2023",
          awards: [
            { level: "Grade 11", title: " With High Honors" },
            { level: "Grade 12", title: " With Highest Honors" },
          ],
        },
        {
          logo: "/images/educ-logo/apc.png",
          background: "/images/education/apc-school.jpeg",
          name: "Asia Pacific College",
          years: "2024 - present",
          awards: [{ level: "1st Year", title: " With Honors" }],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Background */
.education-page {
  width: 100%;
  height: 750px; /* Adjusted height */
  background-image: url('/public/images/stars.png'); /* Background image */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Keeps the header at the top */
  align-items: flex-start;
  padding: 50px; /* Adds some space for text */
  box-sizing: border-box;
  overflow: hidden;
}

/* Fade Overlay (specific to education section) */
.education-page {
  position: relative; /* Ensures the fade overlay is positioned inside */
}

.fade-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px; /* Adjust height as needed */
  background: linear-gradient(to bottom, #340b3c85, rgba(52, 11, 60, 0)); /* Fades out */
  pointer-events: none; /* Ensures it doesn’t block interactions */
  z-index: 10; /* Keeps it above other content */
}

/* Header Section */
.header-section {
  text-align: left;
  margin-bottom: 30px;
}

.main-title {
  font-size: 75px;
  color: #340b3c;
  font-weight: bold;
  padding-top: 25px;
  margin: 0px;
}

.sub-title {
  font-size: 30px;
  color: #6B2855;
  margin: 0px;
}

/* Fade Overlay */
.fade-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px; /* Adjust height as needed */
  background: linear-gradient(to bottom, #402146, rgba(52, 11, 60, 0)); /* Fades out */
  pointer-events: none; /* Ensures it doesn't interfere with interactions */
}

/* Education Cards Carousel */
.education-container {
  width: 100%;
  overflow-x: auto; /* Enables horizontal scrolling */
  overflow-y: hidden; /* Prevent vertical scrolling */
  white-space: nowrap;
  padding: 10px;
  display: flex;
  align-items: center;
  scroll-behavior: smooth; /* Enables smooth scrolling */
}

/* Hide Scrollbar */
.education-container::-webkit-scrollbar {
  width: 0; /* Completely hides scrollbar */
  height: 5px;
}

.education-container::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.education-container::-webkit-scrollbar-track {
  background: transparent;
}

/* Scrollable Content */
.education-scroll {
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  flex-wrap: nowrap;
  width: max-content;
}

/* Hover Effect for Education Cards */
.education-card {
  width: 320px;
  height: 470px;
  border-radius: 9px;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  flex-shrink: 0;
  overflow: hidden;
  backdrop-filter: blur(3px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.education-card:hover {
  transform: scale(1.05); /* Makes the card bigger */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); /* Adds a subtle shadow */
}


/* Overlay */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(52, 11, 60, 0.45);
  border-radius: 9px;
  top: 0;
  left: 0;
}

/* School Logo */
.school-logo {
  width: 160px;
  height: 160px;
  position: relative;
  z-index: 1;
  margin-top: 20px;
}

/* School Info */
.school-info {
  position: relative;
  z-index: 1;
  padding: 10px 15px;
}

/* Increased text size */
.school-name {
  font-size: 28px;
  font-weight: bold;
  color: white;
  word-wrap: break-word;
  white-space: pre-line;
  line-height: 1.2;
  margin: 0px;
}

.school-years {
  font-size: 22px;
  color: white;
  margin-top: 5px;
  margin-bottom: 13px;
}

/* Awards */
.awards p {
  margin: 2px 0;
  font-size: 24px;
}

.year-level {
  color: #bd94f9;
  font-weight: bold;
}

.award-text {
  color: white;
}

/* Text shadow for readability */
.school-name,
.school-years,
.awards p {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

/* Make education cards adjust for smaller screens */
@media (max-width: 780px) {
  .education-page {
    padding: 30px; /* Reduce padding for smaller screens */
    height: auto; /* Allow it to expand */
  }

  .main-title {
    font-size: 60px; /* Reduce font size */
  }

  .sub-title {
    font-size: 24px; /* Smaller subtitle */
  }

  .education-container {
    flex-wrap: wrap; /* Allow cards to wrap instead of overflow */
    justify-content: center; /* Center cards */
  }

  .education-card {
    width: 280px; /* Reduce card size */
    height: 420px;
  }

  .school-logo {
    width: 140px; /* Adjust logo size */
    height: 140px;
  }

  .school-name {
    font-size: 24px; /* Reduce text size */
  }

  .school-years {
    font-size: 18px;
  }

  .awards p {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 50px;
  }

  .sub-title {
    font-size: 20px;
  }

  .education-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .education-card {
    width: 250px;
    height: 380px;
  }

  .school-logo {
    width: 120px;
    height: 120px;
  }

  .school-name {
    font-size: 20px;
  }

  .school-years {
    font-size: 16px;
  }

  .awards p {
    font-size: 18px;
  }
}

@media (max-width: 360px) {
  .main-title {
    font-size: 40px;
  }

  .sub-title {
    font-size: 18px;
  }

  .education-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .education-card {
    width: 220px;
    height: 340px;
  }

  .school-logo {
    width: 100px;
    height: 100px;
  }

  .school-name {
    font-size: 18px;
  }

  .school-years {
    font-size: 14px;
  }

  .awards p {
    font-size: 16px;
  }
}

</style>
