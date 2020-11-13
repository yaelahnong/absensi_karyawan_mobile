import Axios from 'axios';

export const userLogin = (data) => ({
    type: 'USER_LOGIN',
    payload: Axios.post("http://localhost:8000/login", data)
});