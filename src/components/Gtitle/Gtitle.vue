<script setup lang="ts">
import { Ref } from 'vue'
defineProps<{ msg: string }>()
</script>
<template>
    <div class="title">{{msg}}</div>
</template>

<style scoped>
    .title{
        font-size:20px;
        padding: 5px 0;
        font-weight:bold;
    }
</style>