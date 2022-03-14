import axios from "axios";

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