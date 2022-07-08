import axios from 'axios';

axios.defaults.headers['apikey'] = process.env.APP_VUE_APIKEY;

const service = {
    get(){
        return axios.get('https://bnqczzjfrurdacpcogbb.supabase.co/rest/v1/users?select=*')
    },
}

export default service