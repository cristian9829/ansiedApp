import axios from 'axios';

//https://ansiedapp.herokuapp.com/
const clienteAxios = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export default clienteAxios;