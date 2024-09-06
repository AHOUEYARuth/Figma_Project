<template>
    About
    {{ post }}
</template>


<script lang="ts" setup>
import { useRoute } from 'vue-router'
import {ref, watch, computed} from 'vue'
const blogPosts = [
    {id: 1, title: 'My first post', body: 'This is my first post'},
    {id: 2, title: 'My second post', body: 'This is my second post'},
    {id: 3, title: 'My third post', body: 'This is my third post'},
]

const route = useRoute()
const post = ref()
watch(
    () =>route.params.id,
  (newId, oldId) => {
    // react to route changes...
      post.value = blogPosts.find(post => post.id == newId)
  }
)


</script>