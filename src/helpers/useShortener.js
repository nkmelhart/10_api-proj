import { ref } from 'vue'
import axios from 'axios'

export const shortURL = ref('')
export const searchItem = ref('')
const baseURI = 'https://goolnk.com/api/v1/shorten'

export const getShortLink = async (payload) => {
    try {
        payload = 'url=' + payload
        payload = payload.replace(':', '%3A')
        payload = payload.replaceAll('/', '%2F')
        let res = await axios.post(baseURI, payload)
        shortURL.value = res.data
        console.log(shortURL.value)
    }
    catch (err) {
        console.log(err.message)
    }
}

export const clearURL = () => {
    shortURL.value = null
    searchItem.value = null
}