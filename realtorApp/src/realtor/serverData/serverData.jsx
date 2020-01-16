const axios = require('axios');

const getApartment = (handleSuccess) => {
    axios.get("http://localhost:8000/apartments")
    .then(result => handleSuccess(result.data))
}

const getApartmentByID = (handleSuccess, apartmentId) => {
    axios.get(`http://localhost:8000/apartments/${apartmentId}`)
    .then(success => {
        handleSuccess(success.data[0])
    }).catch(error => console.log(error))
} 


const getImagesByApartmentId = (handleSuccess, apartmentId) => {
    axios.get(`http://localhost:8000/images/${apartmentId}`)
    .then(success => {
        handleSuccess(success.data)
    }).catch(error => console.log(error))
} 


// const getApartmentDataFromServer1= (handleSuccess) => {
//     fetch("https://storage.googleapis.com/realtour/apartments-rt.json", {
//             method: 'GET',
//         }
//     ).then(response => response.json()
//     ).then(success => handleSuccess(success)
//     ).catch(error => console.log(error))
// };

// const getAllDataFromServer = (handleSuccess) => {
//     fetch("https://storage.googleapis.com/realtour/data-rt.json", {
//             method: 'GET',
//         }
//     ).then(response => response.json()
//     ).then(success => {
//             handleSuccess(success)
//         }
//     ).catch(error => console.log(error))
// };
export {getApartmentByID, getApartment, getImagesByApartmentId};