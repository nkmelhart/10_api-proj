<template>
  <div class="form-group">
        <input class="container rounded mt-5 form-control-lg text-center" placeholder="I'm looking for..." type="text" v-model="searchItem" @change="getGifs">
    </div>
</template>

<script setup>
    import {searchItem, getGifs} from '../helpers/useGifs'
</script>

<style>

</style>