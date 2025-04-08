<script setup lang="ts">
   import { Device, Environment } from '@/models/devices';
   import DeviceComponent from './DeviceComponent.vue';
   import AddNewDeviceComponent from './AddNewDeviceComponent.vue';
   import { reactive, ref } from 'vue';
import { useDeviceRepository } from '@/stores/deviceRepository';
    
    const props = defineProps({
        environment: { type: Environment, required: true },
        showDeviceButtons: { type: Boolean, default: true }
    });

    const showNewDeviceForm = ref(false);
    const newDevice = reactive(new Device());

    const saveNewDevice = ()=>{
        useDeviceRepository().addDevice(props.environment, newDevice);
        newDevice.name = '';
        newDevice.icon = 'devices';
        showNewDeviceForm.value = false;
    }

    const removeDevice = (index:number)=> {        
        useDeviceRepository().removeDevice(props.environment, index);
    }
</script>

<template>
    <section class="flex flex-column">
        <h3 class="m-3">{{ props.environment.name }}</h3>
        <div class="flex flex-row">
            <div v-for="(currentDevice, id) in props.environment.devices" :key="id">        
                <DeviceComponent :showButtons="showDeviceButtons" :device="currentDevice" 
                    :index="id" @deviceDeleteEvent="removeDevice"/>
            </div>
            <AddNewDeviceComponent @newDeviceEvent="showNewDeviceForm = !showNewDeviceForm" />                 
            <div v-if="showNewDeviceForm">
                <div>
                    <label for="">Nome:</label>
                    <input type="text" v-model="newDevice.name">
                </div>
                <div>
                    <label for="">Ícone:</label>
                    <input type="text" v-model="newDevice.icon">
                </div>
                <button @click="saveNewDevice">
                    <span class="icons material-icons-round">save</span>
                </button>
            </div>
        </div>
        <hr>    
    </section>
</template>

<style scoped lang="scss">

</style>