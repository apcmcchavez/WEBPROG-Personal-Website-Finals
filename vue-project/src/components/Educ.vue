<template>
  <div class="background">
    <div class="content">
      <h1 class="title">lorem ipsum odor amet</h1>
      <p class="subtitle">
        lorem ipsum odor amet, consectetur adipiscing elit. integer felis hac lacus egestas placerat.
      </p>

      <div class="card-scroll-container">
        <div class="card-container">
          <div
            v-for="(school, index) in schools"
            :key="index"
            class="big-card"
            :style="{ backgroundImage: 'url(' + school.bgImage + ')' }"
          >
            <div class="card-content">
              <img :src="school.logo" class="image-placeholder" alt="school logo" />
              <p class="school-name">{{ school.name }}</p>
              <p class="school-years">{{ school.years }}</p>
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
        { name: "School 1", years: "2010-2014", logo: "/images/educ-logo/aes.png", bgImage: "/images/education/aes school.jpg" },
        { name: "School 2", years: "2014-2018", logo: "/images/educ-logo/apc.png", bgImage: "/images/education/apc school.jpeg" },
        { name: "School 3", years: "2018-2022", logo: "/images/educ-logo/brickwood.png", bgImage: "/images/education/aes school.jpg" },
        { name: "School 4", years: "2022-2026", logo: "/images/educ-logo/daycare.png", bgImage: "/images/education/aes school.jpg" },
        { name: "School 5", years: "2026-2030", logo: "/images/educ-logo/is.png", bgImage: "/images/education/aes school.jpg" },
        { name: "School 6", years: "2030-2034", logo: "/images/educ-logo/milden.png", bgImage: "/images/education/aes school.jpg" },
        { name: "School 7", years: "2034-2038", logo: "/images/educ-logo/tirona.png", bgImage: "/images/education/aes school.jpg" }
      ]
    };
  }
};
</script>

<style scoped>
/* background */
.background {
  background: url('/images/stars.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  overflow: hidden;
}

/* content layout */
.content {
  text-align: center;
  width: 100%;
}

/* title */
.title {
  font-size: 48px;
  font-weight: bold;
  color: black;
  font-family: 'press start 2p', sans-serif;
}

.subtitle {
  font-size: 18px;
  color: black;
  max-width: 800px;
  margin: 20px auto 40px;
}

/* scrollable row */
.card-scroll-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 20px;
}

.card-container {
  display: flex;
  gap: 20px;
  white-space: nowrap;
  padding: 10px;
}

/* big cards */
.big-card {
  width: 400px;
  height: 550px;
  border-radius: 20px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* card content */
.card-content {
  text-align: center;
}

/* image placeholder */
.image-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 25px;
  object-fit: cover;
}

/* text */
.school-name,
.school-years {
  font-weight: bold;
  font-size: 20px;
  font-family: 'press start 2p', sans-serif;
}
</style>
