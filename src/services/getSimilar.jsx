import axios from "axios";

export default class Services {
    constructor() {
        this.services = axios.create({
            baseURL: `https://tastedive.com/`,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    getSimilar = () => this.services.get(`api/similar?info=1&q=Harry%20Potter`)
    .then(elm => console.log(elm))
    .catch(err => console.log(err))
}

