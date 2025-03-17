<script setup lang="ts">
import { Device, Environment } from '@/models/devices';
import { ref, reactive } from 'vue';

// Criando os dispositivos 
const ar: Device = reactive(new Device());
ar.name = 'Ar Condicionado Samsung';
ar.state = true;
ar.icon = 'heat_pump';

const tv: Device = reactive(new Device());
tv.name = 'Smart TV LG';
tv.state = true;
tv.icon = 'tv';

const iluminacao: Device = reactive(new Device());
iluminacao.name = 'Lâmpada Led';
iluminacao.state = true;
iluminacao.icon = 'light';

const tomada: Device = reactive(new Device());
tomada.name = 'Tomada Inteligente';
tomada.state = true;
tomada.icon = 'power';

// Criando os ambientes

const sala: Environment = reactive(new Environment());
sala.name = 'Sala de Estar';
sala.devices = [ar, tv, iluminacao];

const quarto: Environment = reactive(new Environment());
quarto.name = 'Quarto de Hóspedes';
quarto.devices = [tomada];

// Criando um array de ambientes

const environments: Array<Environment> = reactive([]);

// Adiciona "sala" e "quarto" ao array
environments.push(sala)
environments.push(quarto)

</script>

<template>
    <h1>Seus Dispositivos: </h1>
    
    <!-- For que passa pela lista de ambientes e exibe o nome de cada um -->
    <div v-for="(currentEnvironment, envId) in environments" :key="envId">
        
        <!-- Exibe o nome do ambiente atual  -->
        <h3> {{ currentEnvironment.name }}</h3> 
        
        <!-- For que passa pela lista de dispositivos em cada ambiente, e exibe as informações de cada um, separada pelo ambiente onde se encontra -->
        <div v-for="(currentDevice, id) in currentEnvironment.devices" :key="id">   
            <h5> {{ currentDevice.name }} </h5>
            <span class="icons material-icons-round"> {{ currentDevice.icon }} </span>
                <div :class="`button-${currentDevice.state}`">
                    <button class="on">ON</button>
                    <button class="off">OFF</button>
                </div>  
        </div>      
    </div>
    
</template>

<!-- CSS Específico "Scoped" -->
<style scoped lang="scss">

// Quando o botão se encontra no estado "true"
    .button-true {
        .on{
            background-color: green;
        }
        .off {
            background-color: white;
        }
    }

// Quando o botão se encontra no estado "false"
    .button-false {
        .on{
            background-color: white;
        }
        .off {
            background-color: red
        }
    }

    h1 {
        padding: 10px;
    }

    div {
        padding: 10px;
    }
</style>