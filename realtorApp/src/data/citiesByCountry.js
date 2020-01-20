import fetcher from './fetcher';


const getCountriesByCountry = async (countryId) => {
    try {
        const cities = await fetcher.get(`cities/${countryId}`);
        console.log(" here cities", cities)
        return cities
    }catch(error){
        console.log(error)
    }
} 

export {getCountriesByCountry};