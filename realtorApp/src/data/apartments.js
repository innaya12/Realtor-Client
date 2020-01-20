import fetcher from './fetcher';
const axios = require('axios');

const addApartmentToDB = (handleSuccess,address, price, number_of_room, number_of_bath, sqft, description, main_image) => {
    console.log("here")
    axios.post(`http://localhost:8000/addapartment`, {address, price, number_of_room, number_of_bath, sqft, description, main_image})
    .then(success => {
        handleSuccess(success.data)
    }).catch(error => console.log(error))
}

const getApartment = async () => {
    try{
        const {data} = await fetcher.get("/apartments");
        return data;
    }catch(error){
        throw new Error(`Cant get apartments`);
    }
}

const getFilterApartments = async (query) => {
    try{
        const {data} = await fetcher.get(`/apartments/${query}`);
        // console.log("hereeee", data[0])
        return data[0];
    }catch(error){
        throw new Error(`Cant get apartments`);
    }
}

export {getApartment, getFilterApartments, addApartmentToDB};








// fake data for future test - to active remove '1' from name
// const getApartment1 = (handleSuccess) => {
//     fetch("https://storage.googleapis.com/realtour/apartments-rt.json", {
//             method: 'GET',
//         }
//     ).then(response => response.json()
//     ).then(success => handleSuccess(success)
//     ).catch(error => console.log(error))
// };