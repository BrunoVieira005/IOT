<script setup lang="ts">

const emit = defineEmits(['newDeviceEvent']);

</script>

<template>
    <button @click="emit('newDeviceEvent')">
        <p>Add Dispositivo</p>
        <span class="icons material-icons-round">add</span>
    </button>
</template>


<style scoped lang="scss">

</style>