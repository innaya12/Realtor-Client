const axios = require('axios');

const getApartment = (handleSuccess) => {
    axios.get("http://localhost:8000/apartments")
    .then(result => handleSuccess(result.data))
}

const getApartmentByID = (handleSuccess, apartmentId) => {
    console.log("apartmentId",apartmentId)
    axios.get(`http://localhost:8000/apartments/${apartmentId}`)
    .then(success => {
        console.log("success", success)
        handleSuccess(success.data[0])
    }).catch(error => console.log(error))
} 
const getImagesById = (handleSuccess, apartmentId) => {
    console.log("images",imagesId)
    axios.get(`http://localhost:8000/apartmentIdImages/${apartmentId}`)
    .then(success => {
        console.log("successimage", success)
        handleSuccess(success)
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
export {getApartmentByID, getApartment, getImagesById};