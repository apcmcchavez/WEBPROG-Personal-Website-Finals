<template>
  <div class="education-page">
    <!-- Background Image -->
    <div class="background"></div>

    <!-- Header Section -->
    <div class="header-section">
      <h1 class="main-title">My Education Journey</h1>
      <p class="sub-title">Here are the schools I attended all throughout the years.</p>
    </div>

    <!-- Education Cards Container -->
    <div class="education-container">
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
          name: "Emiliano Tria Tirona Memorial\nNational Integrated High School",
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

/* Header Section */
.header-section {
  text-align: left;
  margin-bottom: 30px;
}

.main-title {
  font-size: 75px;
  color: #340b3c;
  font-weight: bold;
  margin: 0px;
}

.sub-title {
  font-size: 30px;
  color: #0c0c0c;
  margin: 0px;
}

/* Education Cards */
.education-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
}

.education-scroll {
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  width: max-content;
}

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
  backdrop-filter: blur(3px); /* Ensures the blur applies to the background */
}

/* Fix: Overlay should match the container's full height */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(52, 11, 60, 0.45);
  border-radius: 9px;
  top: 0;
  left: 0;
}

/* Adjusted logo spacing */
.school-logo {
  width: 160px; /* Made smaller */
  height: 160px;
  position: relative;
  z-index: 1;
  margin-top: 20px; /* Adds space above the logo */
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

/* Increased font sizes */
.awards p {
  margin: 2px 0;
  font-size: 22px;
}

.year-level {
  color: #bd94f9;
  font-weight: bold;
}

.award-text {
  color: white;
}

/* Add text shadow for better readability */
.school-name,
.school-years,
.awards p {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}


</style>
