import fetcher from './fetcher';

const addApartmentToDB = async (user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, main_image) => {
    console.log("added apartment to db")
    console.log("main_image inside data",main_image)
    try{
        const add = await fetcher.post('/addapartment' , {user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, main_image});
        console.log("after add")
        return add;
    }catch(error){
        console.log(error)
    }
}

const getApartment = async () => {
    try{
        const {data} = await fetcher.get("/apartments");
        return data;
    }catch(error){
        throw new Error(`Cant get apartments`);
    }
}

const getApartmentByID = async (query) => {
    try{
        const {data} = await fetcher.get(`/apartments/${query}`);
        return data[0];
    }catch(error){
        console.log("Can't get apartments");
    }
}
const getFilterApartments = async (query) => {
    try{
        const {data} = await fetcher.get(`/apartments/${query}`);
        return data;
    }catch(error){
        console.log("Can't get apartments");
    }
}

export {getApartment, getFilterApartments, addApartmentToDB, getApartmentByID};


// fake data for future test - to active remove '1' from name
// const getApartment1 = (handleSuccess) => {
//     fetch("https://storage.googleapis.com/realtour/apartments-rt.json", {
//             method: 'GET',
//         }
//     ).then(response => response.json()
//     ).then(success => handleSuccess(success)
//     ).catch(error => console.log(error))
// };