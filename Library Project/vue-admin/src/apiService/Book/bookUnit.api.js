import axios from "axios"

const baseUri = "/api/admin/book-unit"

const getAll = async () => {
    const uri = baseUri + "/"
    const result = await axios.get(uri)
    return {
        status: result.status,
        data: result.data
    }
}

export default{
    getAll
}