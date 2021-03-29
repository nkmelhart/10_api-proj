import { ref } from 'vue'
import axios from 'axios'

export const validatedObject = ref()
export const searchItem = ref('')
const baseURI = 'https://phonenumbervalidation.apifex.com/api/v1/validate?phonenumber='

export const getPhoneValidation = async (payload) => {
    try{
        payload = payload.replace('+', '%2B')
        payload = payload.replace(' ', '%20')
        let res = await axios.get(baseURI + payload)
        validatedObject.value = res.data
        
    }
    catch (err) {
        console.log(err.message)
    }
}

export const clearPhone = () => {
    searchItem.value = null
    validatedObject.value = null
}