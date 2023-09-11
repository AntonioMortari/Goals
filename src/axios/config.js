import axios from 'axios'

const users = axios.create({
    baseURL:' http://localhost:3000',
})

export default users