import axios from 'axios'
const UserURL = '/auth/register'
const forgetURL= '/auth/forget-password'
export default class User_API{

    //user register
    static async createUser(user_register){

        const res = await axios.post(UserURL, user_register)
        return res.data;
        
    }


}