<template>
  <div>
    <Gtitle msg="搜索番剧"/>
    <div class="SerachPanel">
      <div class="SearchBox">
        <img class="" src="../../assets/logo.png" alt="" />
        <input type="text" v-model="SearchText"/>
        <button @click="startSearch">开始搜索</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import Gtitle from "../../components/Gtitle/Gtitle.vue";
  const SearchText = ref('')
  const startSearch = ()=>{
    console.log(SearchText.value);
  }
</script>

<style scoped>
  .SerachPanel{
    width: calc(100vw - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .SearchBox{
    display: flex;
    position: relative;
  }
</style>