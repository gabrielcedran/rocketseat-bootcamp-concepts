import axios from 'axios';

const projectsApi = axios.create({
    baseURL: 'http://localhost:3333/'
});

export default projectsApi;