<script setup>
import { ref, onMounted, nextTick } from 'vue';

const showGallery = ref(false);
const imageLoaded = ref([]);
const flipped = ref([]);

const revealGallery = async () => {
    showGallery.value = true;
    await nextTick();
    imageLoaded.value = new Array(images.length).fill(false);
    flipped.value = new Array(images.length).fill(false);

    images.forEach((_, index) => {
        setTimeout(() => {
            imageLoaded.value[index] = true;
        }, Math.random() * 1000);
    });
};

const scrollToFeedback = () => {
    document.getElementById('feedback-form').scrollIntoView({ behavior: 'smooth' });
};

const toggleFlip = (index) => {
    flipped.value[index] = !flipped.value[index];
};

const images = [
    { src: '/images/gallery/Me Painting.png', width: 312.30, height: 324, text: 'Me Painting' },
    { src: '/images/gallery/With my Girl Besties.png', width: 497.80, height: 324, text: 'With my Girlie Besties' },
    { src: '/images/gallery/Me and my Siblings.png', width: 225.45, height: 324, text: 'Baguio with my Siblings' },
    { src: '/images/gallery/art exhibit.png', width: 496.38, height: 324, text: 'Organized my first event in College' },
    { src: '/images/gallery/bestiedate.png', width: 218.38, height: 324, text: 'Date with the Girls' },

    { src: '/images/gallery/choco.jpg', width: 279.31, height: 397.68, text: 'Choco Doggo' },
    { src: '/images/gallery/lloyd1.jpg', width: 279.31, height: 397.68, text: 'Masked Lloydie' },
    { src: '/images/gallery/ashy.jpg', width: 435.76, height: 397.68, text: 'Ashy Catto' },
    { src: '/images/gallery/parents.png', width: 305.81, height: 397.68, text: 'Mah Parents' },
    { src: '/images/gallery/frosty.jpg', width: 450.12, height: 397.68, text: 'Frosty Catto' },

    { src: '/images/gallery/First time baking a cake.jpg', width: 328.30, height: 224.4, text: 'Baked a Cake' },
    { src: '/images/gallery/first year honor list.png', width: 430.62, height: 224.4, text: 'Part of Honor Roll S.Y. 2023-2024' },
    { src: '/images/gallery/devcon.jpg', width: 303.26, height: 224.4, text: 'Attended DEVCON' },
    { src: '/images/gallery/ny2025.jpg', width: 314.11, height: 224.4, text: 'New Year 2025' },
    { src: '/images/gallery/crams.JPG', width: 374.02, height: 224.4, text: 'Crams Intramuros Trip 2024' }
];
</script>

<template>
    <div class="question-section">
        <h2>Want to see a glimpse of my life?</h2>
        <div class="buttons">
            <button @click="revealGallery" class="yes-btn">Yes :> </button>
            <button @click="scrollToFeedback" class="no-btn">No >:[ </button>
        </div>
    </div>

    <transition name="fade">
        <div v-if="showGallery" class="gallery-section">
            <h2 class="gallery-title">The world through Iyah’s lenses <3</h2>
            <div class="gallery-grid">
                <div v-for="(image, index) in images" 
                     :key="index" 
                     class="gallery-item" 
                     :class="{ flipped: flipped[index] }"
                     :style="{
                        width: image.width + 'px',
                        height: image.height + 'px',
                        opacity: imageLoaded[index] ? 1 : 0,
                        transform: imageLoaded[index] ? 'translateY(0)' : 'translateY(20px)'
                     }"
                     @click="toggleFlip(index)">

                    <!-- Front: Image -->
                    <div class="gallery-card">
                        <div class="gallery-front">
                            <img :src="image.src" alt="Gallery Image">
                        </div>
                        <!-- Back: Text -->
                        <div class="gallery-back">
                            <p>{{ image.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

    <div id="feedback-form">
        <FeedbackForm />
    </div>
</template>

<style scoped>
/* Fade transition */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.8s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

/* Question section */
.question-section {
    text-align: center;
    margin-top: 10px;
    color: #6B2855;
    font-size: 60px;
}
.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 5px;
}
button {
    cursor: pointer;
    padding: 10px 20px;
    font-size: 30px;
    border-radius: 25px;
    color: white;
    border: none;
    transition: 0.3s;
    font-family: 'Jersey 10', serif;
    font-style: normal; 
}
.yes-btn {
    background-color: #9A699A;
}
.no-btn {
    background-color: #7C4D9E;
}
.yes-btn:hover {
    background-color: white;
    color: #9A699A;
}
.no-btn:hover {
    background-color: white;
    color: #7C4D9E;
}

/* Gallery Section */
.gallery-section {
    margin-top: 40px;
    text-align: center;
}
.gallery-title {
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: bold;
    color: #9374C0;
}

/* Grid layout */
.gallery-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

/* Flip Animation */
.gallery-item {
    position: relative;
    perspective: 1000px;
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    cursor: pointer;
}
.gallery-card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}
.gallery-item.flipped .gallery-card {
    transform: rotateY(180deg);
}
.gallery-front, .gallery-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}
.gallery-front {
    background: white;
}
.gallery-back {
    background: white;
    color: #6B2855;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    transform: rotateY(180deg);
}
.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Feedback form */
#feedback-form {
    margin-top: 50px;
}
</style>
