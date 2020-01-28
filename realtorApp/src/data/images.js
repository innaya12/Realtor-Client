import fetcher from './fetcher';

const uploadImage = async (fd) =>{
    try {
        const data = await fetcher.post('/uploadimages/single', fd);
        return data
    }catch(error){
        throw new Error("Can't upload image")
    }
}

const getImagesByApartmentId = async (apartmentId) => {
    try {
        const {data} = await fetcher.get(`/images/${apartmentId}`);
        return data
    } catch(error){
        throw new Error('Cant get images');
    }
} 

export {getImagesByApartmentId, uploadImage};