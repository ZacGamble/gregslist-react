import axios from "axios";

const baseURL = 'https://bcw-sandbox.herokuapp.com/api'

const api = axios.create({baseURL})

export default api;