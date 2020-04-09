import axios from "axios";

export default class Services {
    constructor() {
        this.services = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://tastedive.com`,
        })
    }

    getSimilar = search => this.services.get(`/api/similar?info=1&q=${search}&k=363390-Alejandr-H8ZN1837`)
    .then(elm => elm.data.Similar.Results)
    .catch(err => console.log(err))
}

