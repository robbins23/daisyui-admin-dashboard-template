import axios from "axios"

const initializeApp = () => {
// Setting base URL for all API request via axios
    axios.defaults.baseURL = 'https://api.instantwebtools.net/v1'

}

export default initializeApp