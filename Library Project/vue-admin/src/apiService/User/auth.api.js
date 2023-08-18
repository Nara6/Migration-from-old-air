import axios from "axios"

const baseUri = "/api/auth"

const option = (method, body) => {
    if(body){
        const option = {
            method: method,
            credentials: "include",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(body)
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

const login = async (body) => {
    console.log(baseUri);
    const uri = baseUri + "/login"
    const result = await axios.post(uri, body)
    return {
        status: result.status,
        data: result.data
    }
}

const logout = async () => {
    const uri = baseUri + "/logout"
    const result = await axios.post(uri)
    return {
        status: result.status,
        data: result.data
    }
}

const selfInfo = async () => {
    const uri = "/api/user/user"
    const result = await axios.get(uri)
    return{
        status: result.status,
        data: result.data
    }
}

export default {
    login,
    logout,
    selfInfo
}