<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://www.luncode.com/res/K-ON.JPG" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://www.luncode.com/res/K-ON2.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://www.luncode.com/res/bg.jpg" alt="">
                </div>
            </div>
            <div class="swiper-pagination">
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>

<script lang="js">
    import 'swiper/css/swiper.css'  //引入swiper样式
    import Swiper from 'swiper';	//引入swiper
    export default {
        name: "Swiper",
        data(){
            return{
                imgs:[
                    1,2,3
                ]
            }
        },
        mounted() {
            var mySwiper=new Swiper('#swiperIndex',{
                //配置分页器内容

                loop: true, // 循环模式选项
                pagination:{
                    el:".swiper-pagination",//换页器与哪个标签关联
                    clickable:true//分页器是否可以点击
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })
        }
    }
</script>

<style scoped>
#swipercom {
  width: calc(100vw - 150px);
}
#swipercom #swiperIndex.swiper-container {
  width: calc(100vw - 150px);
  height: 300px;
  border-radius: 5px;
}
#swipercom #swiperIndex.swiper-container .swiper-slide img {
  width: 100%;
}
#swipercom #swiperIndex.swiper-container .swiper-pagination-bullet-active {
  background-color: orangered;
}

</style>