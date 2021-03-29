<template>
  <div v-if="gif" class='mt-8 grid justify-items-center space-y-4 text-gray-400'>
      <h1 class="text-3xl">Details of {{gif.title}}</h1>
        <img :src="gif.images.original.webp" :alt="gif.title" />
          <p>Rating: </p>
  </div>
  <div v-else>
      <Spinner/>
  </div>
</template>

<script setup>
import { gif } from '../helpers/useGifs'
import Spinner from '../components/Spinner'
</script>

<style>

</style>