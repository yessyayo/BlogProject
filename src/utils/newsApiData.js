import axios from "axios";


const baseUrl = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-10-25&' +
          'sortBy=popularity&' +
          'apiKey=3076ce6acaff4d328bb6ce14863d7107';

const getAllBlog = ()=>{
    return axios.get(baseUrl)
}





export{
    getAllBlog
}