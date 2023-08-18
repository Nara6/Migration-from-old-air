import axios from "axios"

const baseUri = '/api/admin/borrow'

const getAll = async () => {
    const uri = baseUri + "/details"
    const result = await axios.get(uri)
    return {
        status: result.status,
        data: result.data
    }
}

const create = async (body) => {
    const uri = baseUri + "/"
    const result = await axios.post(uri, body).catch(function (error) {
        console.log(error);
        return {
            status: error.request.status,
            data: error.response.data
        }
      });
    return {
        status: result.status,
        data: result.data
    }
}

const update = async (id, body) => {
    const uri = baseUri + "/" + id
    const result = await axios.patch(uri, body).catch(function (error) {
        return {
            status: error.request.status,
            data: error.response.data
        }
    });
    return {
        status: result.status,
        data: result.data
    } 
}

const remove = async (id) => {
    const uri = baseUri + "/" + id
    const result = await axios.delete(uri).catch(function (error) {
        return {
            status: error.request.status,
            data: error.response.data
        }
    });
    return {
        status: result.status,
        data: result.data
    } 
}

export default {
    getAll,
    create,
    update,
    remove
}