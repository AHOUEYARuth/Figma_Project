<template>
    <Draggable>
        <div class="rectangle"></div>
    </Draggable>
</template>
<script setup lang="ts">
import Draggable from "../Draggable.vue";
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