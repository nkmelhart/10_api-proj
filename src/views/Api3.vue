<template>
  <div class="text-white">
      <h1 class="text-white mt-5">Phone Number Validator</h1>
        <div class="form-group">
        <input class="container rounded mt-2 form-control-lg text-center text-black" placeholder="Enter phone number to search (Format ex: +1 123-456-7898)" type="text" v-model="searchItem" @change="getPhoneValidation(searchItem)">
        </div>
        <div v-if="validatedObject" class=" mt-5 justify-items-center flex grid">
            <h3>Detals for {{searchItem}}</h3>
            <table class="text-left mt-4">
                <thead />
                <tr>
                    <td class="pr-20">Is number valid: </td>
                    <td>{{validatedObject.is_valid_number}}</td>
                </tr>
                <tr>
                    <td class="pr-20">International Format: </td>
                    <td>{{validatedObject.format_number_international}}</td>
                </tr>
                <tr>
                    <td class="pr-20">Description: </td>
                    <td>{{validatedObject.description_for_number}}</td>
                </tr>
                <tr>
                    <td class="pr-20">Country Name: </td>
                    <td>{{validatedObject.country_name_for_number}}</td>
                </tr>
                <tr>
                    <td class="pr-20">Region Code: </td>
                    <td>{{validatedObject.region_code_for_number}}</td>
                </tr>
                <tr>
                    <td class="pr-20">Timezone: </td>
                    <td>{{validatedObject.time_zones_for_number}}</td>
                </tr>
                <tr>
                    <td class="pr-20">Number type: </td>
                    <td>{{validatedObject.number_type}}</td>
                </tr>

            </table>
        </div>
  </div>
</template>

<script setup>
    import {onUnmounted} from 'vue'
    import {getPhoneValidation, searchItem, validatedObject, clearPhone} from "../helpers/usePhoneValidator"

    onUnmounted(() => {
        clearPhone()
    })

</script>

<style>

</style>