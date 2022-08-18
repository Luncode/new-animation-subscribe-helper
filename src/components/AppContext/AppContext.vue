<script setup lang="ts">
import service from "../../api/index";
import { onMounted, ref } from "vue";
import Banner from "../Banner/Banner.vue";
import Gtitle from "../Gtitle/Gtitle.vue";
// const BrowserWindow =require('electron').remote.BrowserWindow
const ListData = ref<any>([]);
onMounted(() => {
  getList();
});
const getList = () => {
  return service.request({ url: "/calendar", method: "GET" }).then((res) => {
    console.log(res,'res');
    ListData.value = res;
  });
};
const clickLink = (url:string) => {
  console.log(url);
  // let newWin =new BrowserWindow({
  //           width:500,
  //           height:500,
  //           frame:true,//是否显示边缘框
  //           fullscreen:false //是否全屏显示
  //       })
  //       newWin.loadURL(url);
  //       newWin.on('close',()=>{
  //           newWin=null
  //       })
}
</script>
<template>
  <div class="AppContainer">
     <Banner/>
     <Gtitle msg="最新番剧"/>
    <div class="newAnimation">
      <div
        class="newAnimation-Item"
        v-for="(item, index) in ListData"
        :key="index"
      >
        <span class="weekdayTitle">{{ item.weekday.cn }}</span>
        <div
          class="newAnimation-card"
          v-for="(data, index) in item.items"
          :key="index"
          @click="clickLink(data.url)"
        >
          <img :src="data?.images?.grid" lazy="true" alt="" />
          <div>{{ data.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AppContainer{
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100vh - 40px);
    padding: 5px;
}
.AppContainer::-webkit-scrollbar{
  width: 5px;
}
.AppContainer::-webkit-scrollbar-thumb{
  background: #5f5e5e;
  border-radius: 15px;
}
.newAnimation {
  box-sizing: content-box;
  display: flex;
  justify-content:space-evenly;
}
.newAnimation-Item{
  width:120px;
}
.newAnimation-card {
  min-width: 100px;
  padding: 10px;
  margin: 5px;
  -webkit-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.52);
  -moz-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.52);
  box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.52);
  cursor: pointer;
}
.weekdayTitle{
  font-size:18px;
  margin-left: 5px;
}
</style>