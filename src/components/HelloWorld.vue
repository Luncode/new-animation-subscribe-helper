<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const mass = ref('')

const notify = (msg:string = '默认值') => {
  let notifcation = new Notification('test',{
    body:msg
  })
  notifcation.onshow
  notifcation.onclick = () => {
    console.log('我被点击了');
    mass.value = 'notifcation onclick'
  }
  // new Notification({ title: 'ces', body: msg }).show()
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <input type="text" v-model="mass" />
  <button @click="notify(mass)">测试通知</button>
  <p>{{mass}}</p>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
