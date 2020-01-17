const axios = require('axios');

const addApartmentToDB = (handleSuccess,address, price, number_of_room, number_of_bath, sqft, description, main_image) => {
    console.log("here")
    axios.post(`http://localhost:8000/addapartment`, {address, price, number_of_room, number_of_bath, sqft, description, main_image})
    .then(success => {
        handleSuccess(success.data)
    }).catch(error => console.log(error))
}

export {addApartmentToDB};

