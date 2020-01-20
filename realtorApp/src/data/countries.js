import fetcher from './fetcher';

const getCountries = async () => {
    try {
        const countries = await fetcher.get('/countries');
        console.log("heree",  countries.data)
        return countries.data;
    }catch(error){
        console.log(error)
    }
} 

export {getCountries};