import axios from 'axios'

const url = '/api/admin/event'

export default class Event_API{
     
    //Get all the event
    static async getAllEvent(){
        const res = await axios.get(url)
        return res.data;
    }
    //to get the single post by id 
    static async getEventByID(id){
        const res =await axios.get(`${url}/${id}`)
        return res.data;
    }

    //to insert post into database 
    static async createEvent(event){
        const res = await axios.post(url, event)
        console.log(res);
        return res.data
      
    }
    static async deleteEvent(id){
        const res =await axios.delete(`${url}/${id}`)
        return res.data;
    }
    //update the event
    static async updateEvent(id,event){
        const res = await axios.put(`${url}/${id}`, event)
        return res.data
        
    }

    


}