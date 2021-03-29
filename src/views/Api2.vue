<template>
    <div class="text-white">
        <h1 class="text-white mt-5">URL Shortener</h1>
        <div class="form-group">
        <input class="container rounded mt-2 form-control-lg text-center text-black" placeholder="Enter URL to shorten..." type="text" v-model="searchItem" @change="getShortLink(searchItem)">
    </div>
        <div v-if="shortURL">
            <h4 class="mt-5">Here is your shortened URL:</h4>
            <p class="mt-3">{{shortURL.result_url}}</p>
        </div>
    </div>
</template>

<script setup>
    import {onUnmounted} from 'vue'
    import {getShortLink, shortURL, searchItem, clearURL} from '../helpers/useShortener'

    onUnmounted(() => {
        clearURL()
    })

</script>

<style>

</style>