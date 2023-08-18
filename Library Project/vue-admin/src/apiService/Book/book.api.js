import axios from "axios"

const baseUri = '/api/admin/book'

const option = (method, body) => {
    if(body){
        const option = {
            method: method,
            credentials: "include",
            headers: {"Content-type": "application/json"},
            body: body
        }
        return option
    }else{
        const option = {
            method: method,
            credentials: "include",
            headers: {"Content-type": "application/json"}
        }
        return option
    }
}

var bookApi = {
    async getAll() {
        const uri = baseUri + "/details"
        const result = await fetch(uri, option("GET"))
        const data = await result.json()
        return {
            status: result.status,
            data: data
        }
    },
    async create(body) {
        const uri = baseUri + "/"
        const result = await axios.post(uri, body)
        return {
            status: result.status,
            data: result.data
        }
    },
    async remove(id) {
        const uri = baseUri + `/${id}`
        const result = await axios.delete(uri)
        return {
            status: result.status,
            data: result.data
        }
    },
    async update(id, body) {
        const uri = baseUri + `/${id}`
        const result = await axios.patch(uri, body)
        return {
            status: result.status,
            data: result.data
        }
    }
}

export default bookApi