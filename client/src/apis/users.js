import axios from 'axios'

const baseUrl = 'http://localhost:5000/users'

const getAllUsers = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const getUser = (id) => {
    const req = axios.get(`${baseUrl}/${id}`)
    return req.then(res => res.data)
}

const createUser = (newUser) => {
    const req = axios.post(baseUrl, newUser)
    return req.then(res => res.data)
}

const userApis = {
    getAllUsers,
    getUser,
    createUser
}

export default userApis 