const baseUri = '/api/admin/category'

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

const getAll = async () => {
    const result = await fetch(baseUri, option("GET"))
    const data = await result.json()
    return {
        status: result.status,
        data: data
    }
}


export default {
    getAll
}