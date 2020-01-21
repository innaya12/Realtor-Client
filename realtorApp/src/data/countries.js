import fetcher from './fetcher';

const getCountries = async () => {
    try {
        const countries = await fetcher.get('/countries');
        return countries.data;
    }catch(error){
        console.log(error)
    }
} 

export {getCountries};