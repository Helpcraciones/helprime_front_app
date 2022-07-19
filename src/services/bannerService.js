import axios from 'axios';

const service = {
    get(){
       return axios.get('https://62180d591a1ba20cba9798a3.mockapi.io/api/vital-seguros-admin/banners')
    },
    
}

export default service