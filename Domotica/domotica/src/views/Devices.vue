<script setup lang="ts">
import DeviceComponent from '@/components/DeviceComponent.vue';
import EnvironmentComponent from '@/components/EnvironmentComponent.vue';
import { ApiResponse, Device, Environment, mapApiResponseToEnvironments } from '@/models/devices';
import { getDevices, getEnvironments } from '@/services/cdnService';
import { ref, reactive, onMounted, type Ref } from 'vue';

const allEnvironments: Array<Environment> = reactive([]);
onMounted(()=>{

  getEnvironments()
    .then(response =>{
        mapApiResponseToEnvironments(response).forEach(item=> 
             allEnvironments.push(item)
        );         
    })
    .catch(error =>{
        console.error("Error when getting environments", error);
    });
});
</script>

<template>
    <main class="flex flex-column justify-content-center align-items-center">
        <h1>Seus Dispositivos: 🚥</h1>    
       <section class="environments border-round-sm">
            <div v-for="(currentEnvironment, envId) in allEnvironments" :key="envId">
                <EnvironmentComponent :environment="currentEnvironment" />
            </div>
       </section>
    </main>
</template>

<style scoped lang="scss">
    main{
        width: 100vw;
        min-height: 100vh;
        .environments{
            width: 90vw;
            min-height: 95vh;
            background-color: var(--background-envs-color);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }
</style>
