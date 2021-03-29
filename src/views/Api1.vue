<template>
    <div class="container text-white">
        <div v-if="false" class="form-group">
        <input class="container rounded mt-3 form-control-lg text-center" placeholder="I'm looking for..." type="text" v-model="searchItem" @change="getDrinks">
    </div>
    <div v-if="rDrink" class="text-white container justify-items-center grid">
        <h1 class="mt-5">Random Drink: {{rDrink.strDrink}}</h1>
        <img :src="rDrink.strDrinkThumb" alt="" class="mt-3">
        <div>
        </div>
    </div>
    <div v-if="rDrink" class="flex-col justify-start p-10 text-left">
        <table class="table-auto text-xl">
            <thead />
            <tbody>
                <tr>
                    <td class="pr-20">Category:</td>
                    <td>{{rDrink.strCategory}}</td>
                </tr>
                <tr>
                    <td class="pr-20">Glass:</td>
                    <td>{{rDrink.strGlass}}</td>
                </tr>
                <tr>
                    <td class="pr-20">Instructions: </td>
                    <td>{{rDrink.strInstructions}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <Spinner/>
    </div>
    </div>
</template>

<script setup>

import {onMounted, ref} from 'vue'
import {getRandomDrink, randomDrink, getSearchDrink, drinks, drink} from '../helpers/useDrinks'

const rDrink = ref(null)


onMounted( async () => {
    await getRandomDrink()
    rDrink.value = randomDrink.value.drinks[0]
})

</script>

<style>

img{
    width: 30%;
    height: 30%;
}

</style>