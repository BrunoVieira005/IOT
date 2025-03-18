<script setup lang="ts">
import type { Type } from 'typescript';
import { ref, computed } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter();

const buttonRouteLabel = computed(()=> 
 router.currentRoute.value.name === 'devices'? 
 'Gerenciamento' : 'Dispositivos');


const changePage = ()=> {
  router.currentRoute.value.name === 'devices'? 
    router.push('/management') : 
    router.push('/');
}

</script>

<template>  
  <button @click="changePage">Página {{ buttonRouteLabel }}</button>
  <!-- <RouterLink to="/management"> Gerenciamento  </RouterLink> -->
  <RouterView />
</template>

<style scoped>

</style>
