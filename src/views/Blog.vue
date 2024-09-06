<template>

    Blog

    <div  style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <div v-for="post in posts" style="border: 1px solid gray; width: fit-content; padding: 20px;">
        <h2>{{post.title}}</h2>
       
        <p>{{ post.body }}</p>

        <RouterLink :to="`/blog/${post.id}`">Read more</RouterLink>
    </div>
    </div>

</template>


<script setup lang="ts">
import {$http} from "../libs/axios";
import { onMounted, ref } from "vue";

const posts = ref([])

async function fetchPosts() {
    const result = await  $http.get('/posts')
    posts.value = result.data
    console.log(result.data)
}
onMounted( async() => {
    
    await fetchPosts()
    //console.log(result.data)
})
</script>