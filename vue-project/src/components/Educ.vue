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
    <div ref="educationContainer" class="education-container">
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
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.educationContainer) {
        // Force scroll position to the first card on load
        this.$refs.educationContainer.scrollLeft = 0;
      }
    });
  },
};
</script>

<style scoped>
/* Background */
.education-page {
  width: 100%;
  height: 750px; /* Adjusted height */
  background-image: url('/images/stars.png'); /* Example background image */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Keeps the header at the top */
  align-items: flex-start;
  padding: 50px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative; /* For fade-overlay positioning */
}

/* Fade Overlay */
.fade-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px; /* Adjust height as needed */
  background: linear-gradient(to bottom, #402146, rgba(52, 11, 60, 0)); /* Fades out */
  pointer-events: none;
  z-index: 10;
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
  margin: 0;
}

.sub-title {
  font-size: 30px;
  color: #6B2855;
  margin: 0;
}

/* Education Cards Carousel */
.education-container {
  width: 100%;
  overflow-x: auto; /* Enables horizontal scrolling */
  overflow-y: hidden; /* Prevent vertical scrolling */
  white-space: nowrap; /* Keep cards in a single row by default */
  padding: 10px;
  display: flex;
  align-items: center;
  scroll-behavior: smooth; /* Smooth horizontal scroll */
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

/* Inner Scrollable Content */
.education-scroll {
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  flex-wrap: nowrap; /* Keep items in one row */
  width: max-content;
}

/* Education Card */
.education-card {
  width: 320px;
  height: 450px;
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
  transform: scale(1.05); /* Subtle grow on hover */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

/* Overlay on each card */
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

/* Text */
.school-name {
  font-size: 28px;
  font-weight: bold;
  color: white;
  word-wrap: break-word;
  white-space: pre-line;
  line-height: 1.2;
  margin: 0;
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

/* Responsive Breakpoints */

/* 
   1) <= 780px: reduce container height & card size,
      but keep horizontal scrolling so the first card remains leftmost
*/
@media (max-width: 780px) {
  .education-page {
    padding: 30px;
    height: auto; /* Let the page grow in height */
  }
  .main-title {
    font-size: 60px;
  }
  .sub-title {
    font-size: 24px;
  }
  .education-card {
    width: 280px;
    height: 420px;
  }
  .school-logo {
    width: 140px;
    height: 140px;
  }
  .school-name {
    font-size: 24px;
  }
  .school-years {
    font-size: 18px;
  }
  .awards p {
    font-size: 20px;
  }
}

/*
   2) <= 480px: even smaller card size, still horizontal scrolling
*/
@media (max-width: 480px) {
  .main-title {
    font-size: 50px;
  }
  .sub-title {
    font-size: 20px;
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

/*
   3) <= 360px: smallest sizes
*/
@media (max-width: 360px) {
  .main-title {
    font-size: 40px;
  }
  .sub-title {
    font-size: 18px;
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
