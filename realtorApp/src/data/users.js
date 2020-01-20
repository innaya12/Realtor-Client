import fetcher from './fetcher';
const axios = require('axios');

const addUserToDB = (handleSuccess, firstName, lastName,email, password, phone) => {
    axios.post(`http://localhost:8000/signup`, {firstName, lastName,email, password, phone})
    .then(success => {
        handleSuccess(success.data)
    }).catch(error => console.log(error))
}

const getUsersById = async (email, password) => {
    try{
        const {data} = await fetcher.post('/login', {email, password});
        return data;
    }catch(error){
        console.log(error);
    }
}

export {getUsersById, addUserToDB};

