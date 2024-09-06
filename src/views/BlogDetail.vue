<template>

    <div>

        <h1>{{ post?.title }}</h1>
        <p>{{ post?.body }}</p>
    </div>
</template>


<script setup lang="ts">

import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { $http } from '../libs/axios'

const route = useRoute()
const post = ref()
onMounted(async () => {
   const result = await $http.get(`/posts/${route.params.id}`)

   console.log(result.data)
   post.value = result.data
})
</script>

