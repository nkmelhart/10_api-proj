import { ref } from 'vue'
import axios from 'axios'

export const searchItem = ref('')
export const drinks = ref([])
export const drink = ref()
export const randomDrink = ref(null)
const baseURIRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

export const getRandomDrink = async () => {
    try{
        let res = await axios.get(baseURIRandom)
        randomDrink.value = res.data;
        //console.log("in use drinks: " + randomDrink.value)
    }
    catch (err) {
        console.log(err)
    }
}