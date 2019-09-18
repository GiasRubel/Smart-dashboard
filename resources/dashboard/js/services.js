import axios from 'axios';

const services = {
    postData: (url, data) => axios.post(url, data),
    getData: url => axios.get(url)

};

export default services;