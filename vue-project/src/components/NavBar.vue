<template>
  <nav class="bg-purple-900 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold pixel-font">lyah</h1>
    <div class="flex space-x-3">
      <div v-for="item in navItems" :key="item.name" class="folder">
        <span class="text-xs">{{ item.name }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "ME" },
        { name: "EDUC" },
        { name: "SKILLS" },
        { name: "LIKES" }
      ]
    };
  }
};
</script>

<style scoped>
.pixel-font {
  font-family: "Press Start 2P", sans-serif; /* Use a pixel-style font */
}

.folder {
  background-color: #6a3d89;
  padding: 6px 12px;
  border-radius: 3px;
  font-weight: bold;
  position: relative;
  text-align: center;
  color: white;
  min-width: 50px;
}

.folder::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 4px;
  width: 12px;
  height: 6px;
  background-color: #7e52a0;
  border-radius: 2px 2px 0 0;
}
</style>
