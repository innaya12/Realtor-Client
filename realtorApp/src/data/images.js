import fetcher from './fetcher';

const getImagesByApartmentId = async (apartmentId) => {
    try {
        const {data} = await fetcher.get(`/images/${apartmentId}`);
        return data
    } catch(error){
        throw new Error(`Cant get images`);
    }
} 

export {getImagesByApartmentId};