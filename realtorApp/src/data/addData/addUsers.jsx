const axios = require('axios');

const addUserToDB = (handleSuccess, firstName, lastName,email, password, phone) => {
    axios.post(`http://localhost:8000/signup`, {firstName, lastName,email, password, phone})
    .then(success => {
        handleSuccess(success.data)
    }).catch(error => console.log(error))
}

export {addUserToDB};

