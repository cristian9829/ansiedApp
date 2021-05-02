import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: "https://ansiedapp.herokuapp.com/",
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export default clienteAxios;