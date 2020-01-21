import fetcher from './fetcher';

const uploadImages = async (fd) =>{
    try {
        const data = await fetcher.post('/uploadimages', fd);
        return data
    }catch(error){
        throw new Error('Cant upload images')
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

export {getImagesByApartmentId, uploadImages};