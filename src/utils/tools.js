import axios from "axios";

// const API_KEY = "?api_key=e19b596e-2655-4a4f-9242-e96ab392744b";
// const API_URL = "https://project-2-api.herokuapp.com";
// const videoLink = `${API_URL}/videos${API_KEY}`;

const tools = {
    
    getVideo: () => axios.get(`/videos`),
    getVideoId: (id) => axios.get(`/videos/${id}`),
    
    formattedDate: (timestamp) => {
        let date = new Date(Number(timestamp))
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        date = date.toLocaleDateString("en-US", options);
        return date;}
    }
    
export default tools;