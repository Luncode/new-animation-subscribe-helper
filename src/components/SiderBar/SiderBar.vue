<script  setup lang="ts">
</script>

<template>
  <div class="SiderBar">
    <div class="SiderBarNav top">
      <router-link to="/" class="SiderBarNavItem">首页</router-link>
      <div class="SiderBarNavItem">收藏</div>
      <div class="SiderBarNavItem">进度</div>
      <router-link to="/Search" class="SiderBarNavItem">搜索</router-link>
    </div>
    <div class="SiderBarNav down">
      <div class="SiderBarNavItem">icon</div>
      <router-link to="/Settings" class="SiderBarNavItem">设置中心</router-link>
      <!-- <div class="SiderBarNavItem">Setting</div> -->
    </div>
  </div>
</template>

<style scoped>
.SiderBar {
  width: 4em;
  padding: 20px;
  background-color: rgb(248, 247, 248);
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
}
.SiderBarNav{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
}
.SiderBarNavItem{
    margin-bottom: 20px;
    cursor: pointer;
}
</style>