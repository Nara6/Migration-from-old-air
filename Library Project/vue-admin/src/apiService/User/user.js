import axios  from 'axios'
const User_URL = '/api/admin/user'

export default class User_API{

    //create user by admin
    static async createUser(user){
      
        const res = await axios.post(User_URL, user)
        
        return res.data
    }
    //get all uer by admin
    static async getAllUser(){

        const res = await axios.get(User_URL)
        return res.data
    }

    //get user by id
    static async getUserById(id){

        const res = await axios.get(`${User_URL}/${id}`)
        return res.data
    }

    //delete user by admin 
    static async deleteUser(id){
        const res = await axios.delete(`${User_URL}/${id}`)
        return res.data
    }

    //update user by admin
    static async updateUser(id, user){
        const res = await axios.patch(`${User_URL}/${id}`, user)
        return res.data
    }

}