import axios from 'axios'
import {backend_service_api_key,backend_service_baseurl} from '../util/constants'
 
const fetchCity = function () {
    return axios({
        // Endpoint to send files
        url: "http://localhost:3003/data/city",
        method: "GET",
        headers: {
            apiKey : backend_service_api_key,
        },
    });
}

const fetchCuisineType = function (cityName) {
    return axios({
        // Endpoint to send files
        url: "http://localhost:3003/data/cuisineType/"+cityName,
        method: "GET",
        headers: {
            apiKey : backend_service_api_key,
        },
    });
}

export {fetchCity, fetchCuisineType}

