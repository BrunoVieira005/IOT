<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
const contar = ()=> {
    counter.value += 1;
    console.log(counter);
}
</script>

<template>
    <h1>Hello Devices!</h1>
    <h1> Contagem {{ counter }} </h1>
    <button @click="contar">Somar</button>
</template>

<style scoped lang="scss">

</style>