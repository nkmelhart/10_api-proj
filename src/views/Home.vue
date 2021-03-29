<template>
  <Search/>
  <div class="mt-8 container mx-auto grid gap-6 grid-cols-4 grid justify-items-center
  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <router-link v-for='gif in gifs' :key="gif.id" :to="`/${gif.id}`">
      <img :src="gif.images.downsized.url" alt="">
    </router-link>
  </div>
</template>

<script setup>
import Search from '../components/Search'
import { onMounted } from 'vue'
import { gifs, getGifs } from '../helpers/useGifs'
onMounted(() => {
      getGifs()
    })
</script>
