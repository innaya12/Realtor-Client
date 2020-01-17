const axios = require('axios');

const getImagesByApartmentId = (handleSuccess, apartmentId) => {
    axios.get(`http://localhost:8000/images/${apartmentId}`)
    .then(success => {
        handleSuccess(success.data)
    }).catch(error => console.log(error))
} 

export {getImagesByApartmentId};