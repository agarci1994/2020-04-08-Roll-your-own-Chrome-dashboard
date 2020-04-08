import axios from "axios";

export default class Services {
    constructor() {
        this.services = axios.create({
            baseURL: `https://tastedive.com/`,
            withCredentials: true,
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
    }

    getSimilar = () => this.services.get(`api/similar?info=1&q=Harry%20Potter&k=363390-Alejandr-H8ZN1837`)
    .then(elm => console.log(elm))
    .catch(err => console.log(err))
}

