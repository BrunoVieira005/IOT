<template>
  <div>
    <h1>Sensores</h1>
      <div v-for="sensor in sensores" :key="sensor.sys.id" class="sensor">
        <p><strong>Nome:</strong> {{ sensor.fields.name }}</p>
        <p><strong>Valor:</strong> {{ sensor.fields.valor }}</p>
        <p><strong>Estado:</strong> {{ sensor.fields.estado ? 'Ligado' : 'Desligado' }}</p>
        <p><strong>Pino:</strong> {{ sensor.fields.pino }}</p>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sensores = ref([])

onMounted(async () => {
  const res = await fetch('https://cdn.contentful.com/spaces/0tmn4pxpa056/environments/master/entries?content_type=sensores', {
    headers: {
      Authorization: 'Bearer NBUbAys7sK4W2CBWqzeVCiCj55etRHVdj1lFP8nXhRA'
    }
  })

  const data = await res.json()
  sensores.value = data.items
})
</script>

<style scoped>
.sensor {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>