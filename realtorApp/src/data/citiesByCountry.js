import fetcher from './fetcher';


const getCitiesByCountry = async (countryId) => {
    try {
        const cities = await fetcher.get(`cities/${countryId}`);
        return cities.data;
    }catch(error){
        console.log(error)
    }
} 

export {getCitiesByCountry};