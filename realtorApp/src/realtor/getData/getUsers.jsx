const axios = require('axios');



// const fetcher = axios.create({
//     baseURL: 'http://localhost:8000',
//     withCreadentials: true
// }); 

// async function getUsersById(data){
//     try {
//         const login = await fetcher.post('./login', data);
//         return login
//     }catch(error){
//         return error
//     }
// }


const getUsersById = (handleSuccess, email, password) => {
    axios.post(`http://localhost:8000/login`, {email, password})
    .then(success => {
        handleSuccess(success.data)
    }).catch(error => console.log(error))
}

export {getUsersById};

