
import axios from 'axios'
const Book_URL = '/api/public/book'
const Book_URL_By_Id = "/api/public/book"
export default class Book_API{

    //get all the book
    static async getAllBook() {
        console.log(`${Book_URL}/details`);
        const res = await axios.get(`${Book_URL}/details `)
        console.log(res);
        return res.data
    }
    static async getBookByCategory( id){
        const res = await axios.get(`${Book_URL}`, id)
        return res.data
    }
    //get book by id

    static async getBookById(id){

        const res = await axios.get(`${Book_URL_By_Id}/${id}/details`)
        return res.data
    }   
}