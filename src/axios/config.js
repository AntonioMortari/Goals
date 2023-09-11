import axios from 'axios'

const users = axios.create({
    //  use esse se estiver rodando localmente -> baseURL:' http://localhost:3000',
    baseURL:'https://goals-8h4u.onrender.com',
})

export default users