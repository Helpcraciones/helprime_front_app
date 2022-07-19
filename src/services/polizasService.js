import axios from 'axios';

const service = {
    get(id){
       return axios.get(`https://62180d391a1ba20cba979662.mockapi.io/api/vital-seguros-user/user/${id}/polizas`)
    },
    
}

export default service

