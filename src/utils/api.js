import axios from "axios";

const API_KEY = "?api_key=e19b596e-2655-4a4f-9242-e96ab392744b";
const API_URL = "https://project-2-api.herokuapp.com";
const videoLink = `${API_URL}/videos${API_KEY}`;

export default {
    getVideo: () => axios.get(`${API_URL}/videos${API_KEY}`)       
}