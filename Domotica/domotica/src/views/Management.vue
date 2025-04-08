<script setup lang="ts">
import DeviceComponent from '@/components/DeviceComponent.vue';
import EnvironmentComponent from '@/components/EnvironmentComponent.vue';
import { Device, Environment } from '@/models/devices';
import { ref, reactive, onMounted } from 'vue';
import { useDeviceRepository } from '@/stores/deviceRepository';

const selectedEnvironment = ref(new Environment());
const newEnv = reactive(new Environment());
const showNewEnvForm = ref(false);

const saveNewEnv = ()=> {
    useDeviceRepository().addEnvironment(newEnv);
    showNewEnvForm.value = false;
}

onMounted(() => {
    selectedEnvironment.value =  useDeviceRepository().environments[0] ?? new Environment();
})
</script>

<template>
    <main class="flex flex-column text-center justify-content-center align-items-center">
        <h1>Gerencie seus Dispositivos! ⚡</h1>
        <section class="environments flex flex-column border-round-sm">
            <div class="flex flex-row m-3">
                <label for="selectedEnv" class="mr-3">Ambiente:</label>
                <select id="selectedEnv" v-model="selectedEnvironment">
                    <option v-for="(currentEnv, envId) in useDeviceRepository().environments" :key="envId" 
                      :value="currentEnv">
                        {{ currentEnv.name }}
                    </option>
                    <option value="" v-if="useDeviceRepository().environments.length == 0">
                        Sem Ambientes!
                    </option>                      
                </select>
                <button @click="()=> showNewEnvForm = true">
                    <span class="icons material-icons-round">add</span>
                </button>
                <div v-if="showNewEnvForm">
                    <label for="">Nome:</label>
                    <input type="text" v-model="newEnv.name">
                </div>
                <button @click="saveNewEnv" v-if="showNewEnvForm">
                    <span class="icons material-icons-round">save</span>
                </button>
            </div>
            <div>
                <EnvironmentComponent :showDeviceButtons="false" :environment="selectedEnvironment" />
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