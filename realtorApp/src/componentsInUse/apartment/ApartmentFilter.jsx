import React from 'react';
import {getCountries} from '../../data/countries'

class ApartmentFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: '', 
        };
    } 


    async componentDidMount() {
        try{
            const countries = await getCountries();
            this.setState({ 
                countries
            });
        }catch(error){
            console.log(error.message)
        }
    };




    render() {

        const {handleChange, cities} = this.props;
        const {countries} = this.state;
        const inputWrapper = { paddingTop: "20px" };
        const inputStyle = {borderRadius: "5px", width: "90%", fontSize: "15px"};
        return (
            <div>
                <div className={"col-4 col-md-6"} style={inputWrapper} id="address">
                    <select style={inputStyle} id="inputState" className="form-control" name={"country"} onChange={handleChange}>
                            <option defaultValue>Country</option>
                                {countries.length !== 0 &&
                                countries.map((country, i) => 
                                    <option value={country.id} key={i}>{country.name}</option>
                                )}
                    </select>
                </div>
                <div className={"col-4 col-md-6"} style={inputWrapper} id="address">
                    <select style={inputStyle}  id="inputState" className="form-control" name={"city_id"} onChange={handleChange}>
                        <option defaultValue>City</option>
                            {cities.length !== 0 &&
                            cities.map((city, i) => 
                                <option value={city.id} key={i}>{city.name}</option>
                            )}
                    </select>
                </div>
            </div>
        );
    }
}

export default ApartmentFilter;