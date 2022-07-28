<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from "@vue/runtime-core";
import SiderBar from "./components/SiderBar/SiderBar.vue";
</script>

<template>
  <div class="AppContext">
    <SiderBar />
    <div class="AppRouter">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.AppContext{
  display: flex;
}
.AppRouter{
  padding:10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
