<template>
    <Draggable>
        <div class="rectangle" :style="`background-color: ${bgColor}`" ></div>
    </Draggable>
</template>
<script setup lang="ts">
import Draggable from "../Draggable.vue";

defineProps(['bgColor'])



</script>
<style scoped>
.rectangle{
    width: 80px;
    height: 40px;
    border: 1px solid yellow;
    background-color: yellow;
    margin-top: 10px;
}
</style>