<script setup lang="ts">
import DeviceComponent from '@/components/DeviceComponent.vue';
import EnvironmentComponent from '@/components/EnvironmentComponent.vue';
import { Device, Environment } from '@/models/devices';
import { ref, reactive } from 'vue';

const ar: Device = reactive(new Device());
ar.name = 'Ar condicionado Samsung';
ar.state = false;
ar.icon = 'heat_pump';

const tv: Device = reactive(new Device());
tv.name = 'Smart TV LG';
tv.icon = 'tv';

const iluminacao: Device = reactive(new Device());
iluminacao.name = 'Lâmpada Led';
iluminacao.state = true;
iluminacao.icon = 'light';

const sala: Environment = reactive(new Environment());
sala.name = 'Sala de Estar';
sala.devices = [ ar, tv, iluminacao ];


const tomada: Device = reactive(new Device());
tomada.name = 'Tomada inteligente';
tomada.state = false;
tomada.icon = 'power';

const quarto: Environment = reactive(new Environment());
quarto.name = 'Quarto de Hóspedes';
quarto.devices = [ tomada ];

const environments: Array<Environment> = reactive([]);
environments.push(sala);
environments.push(quarto);


</script>

<template>
    <main class="flex flex-column justify-content-center align-items-center">
        <h1>Seus Dispositivos: 🚥</h1>    
       <section class="environments border-round-sm">
            <div v-for="(currentEnvironment, envId) in environments" :key="envId">
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
