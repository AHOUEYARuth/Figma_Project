<template>
  <nav style="display: flex; gap: 20px">
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/about/1">About</RouterLink>
    <RouterLink active-class="active" to="/about/2">About</RouterLink>
    <RouterLink active-class="active" to="/about/3">About</RouterLink>


    <button @click="$router.replace('/about')">

    </button>
  </nav>
   <RouterView/>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
 const router = useRouter()

 
</script>

<style scoped>

.active {
  color: red;
}
</style>