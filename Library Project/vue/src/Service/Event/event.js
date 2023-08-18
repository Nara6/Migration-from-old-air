import axios from "axios";
const url = '/api/public/event'

export default class Event_API{

        //Get all event
        static async getAllEvent(){
            const res = await axios.get(url)
            return res.data;
        }
        static async getEventById(id){
            const res = await axios.get(`${url}/${id}`)
            return res.data;
        }
    
}