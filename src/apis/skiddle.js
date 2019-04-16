import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.skiddle.com/api/v1',
    // proxyHeaders: false,
    // credentials: false,
    // crossDomain: true,
    // headers: {
    //     // 'Access-Control-Allow-Credentials' : true,
    //     'Access-Control-Allow-Origin':'*',
    //     'Access-Control-Allow-Methods':'GET',
    //     'Access-Control-Allow-Headers':'application/json',
    // }
});