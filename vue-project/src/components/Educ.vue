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
            @click="flipCard(index)"
          >
            <div class="card-inner" :class="{ flipped: flippedCards.includes(index) }">
              <!-- front -->
              <div class="card-face front">
                <div class="image-placeholder"></div>
                <p class="school-name">{{ school.name }}</p>
                <p class="school-years">{{ school.years }}</p>
              </div>

              <!-- back -->
              <div class="card-face back">
                <p class="back-text">extra details here</p>
              </div>
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
        { name: "school name", years: "years" },
        { name: "school name", years: "years" },
        { name: "school name", years: "years" },
        { name: "school name", years: "years" },
        { name: "school name", years: "years" },
      ],
      flippedCards: [],
    };
  },
  methods: {
    flipCard(index) {
      if (this.flippedCards.includes(index)) {
        this.flippedCards = this.flippedCards.filter((i) => i !== index);
      } else {
        this.flippedCards.push(index);
      }
    },
  },
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

/* big flip cards */
.big-card {
  width: 400px;
  height: 550px;
  border-radius: 20px;
  perspective: 1000px;
  flex-shrink: 0;
  cursor: pointer;
}

/* inner wrapper for flip effect */
.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

/* flip effect */
.big-card .flipped {
  transform: rotateY(180deg);
}

/* front and back */
.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* front side */
.front {
  background: #e3dee9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* back side */
.back {
  background: #8b5fc8;
  color: white;
  transform: rotateY(180deg);
}

/* enlarged circle */
.image-placeholder {
  width: 200px;
  height: 200px;
  background: #8b5fc8;
  border-radius: 50%;
  margin-bottom: 25px;
}

/* text */
.school-name,
.school-years {
  font-weight: bold;
  font-size: 20px;
  font-family: 'press start 2p', sans-serif;
}

.back-text {
  font-size: 18px;
  text-align: center;
  font-family: 'press start 2p', sans-serif;
}
</style>
