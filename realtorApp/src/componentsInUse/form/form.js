import React from 'react';
import './form.css';

class Form extends React.Component {
    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"row "}>
                    <div className={"login col-6"}>
                        <form>
                            <div className={"text"}>
                                <h5><b>Student Details</b></h5>
                                <p>Hello Student! Please fill in your details</p>
                                </div>
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                <label for="validationServer01">User name</label>
                                <input type="text"  class="form-control is-valid" id="validationServer01" placeholder="Enter Username" required/>
                                <div class="invalid-feedback">
                                    username required
                                    username should be no less than 2 xharacters
                                    </div>
                                {/* <div class="valid-feedback">
                                    Looks good!
                                </div> */}
                                </div>
                                <div class="col-md-4 mb-3">
                                <label for="validationServer02">Email</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Enter Email" required/>
                                <div class="invalid-feedback">
                                    email required
                                    invalid Email
                                    </div>
                                {/* <div class="valid-feedback">
                                    Looks good!
                                </div> */}
                                </div>
                                <div class="col-md-4 mb-3">
                                <label for="validationServerUsername">Address</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                                    </div>
                                    <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Street, Number, City, Zip" aria-describedby="inputGroupPrepend3" required/>
                                    <div class="invalid-feedback">
                                    Address required
                                    Address should be no less than 10 characters
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="form-row">
                                {/* <div class="col-md-6 mb-3">
                                <label for="validationServer03">Course</label>
                                <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required/>
                                <div class="invalid-feedback">
                                Course required
                                </div>
                                </div> */}
                                {/* <div class="form-row"> */}
                                <div class="col-md-6 mb-3 course">
                                    <label for="validationServer03" >Course</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Select Course</option>
                                        <option>English</option>
                                        <option>Spanish</option>
                                    <div class="invalid-feedback">
                                        Course required
                                    </div>
                                    </select>
                                </div>



                                {/* <div class="col-md-3 mb-3"> */}
                                {/* <label for="validationServer04">Gender</label>
                                <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required/>
                                <div class="invalid-feedback">
                                    gender required
                                </div> */}
                                {/* </div> */}

                                <div class="col-md-6 mb-3" data-toggle="buttons">
                                    <div>
                                        <label for="validationServer04">Gender</label>
                                    </div>
                                    <label class="btn btn-secondary active">
                                        <input type="radio" name="options" id="option1" autocomplete="off"/> Female
                                    </label>
                                    <label class="btn btn-secondary">
                                        <input type="radio" name="options" id="option2" autocomplete="off"/> Male
                                    </label>
                                    <label class="btn btn-secondary">
                                        <input type="radio" name="options" id="option3" autocomplete="off"/> Other
                                    </label>
                                    <div class="invalid-feedback">
                                    gender required
                                    </div>
                                </div>
                                

                                

                                {/* <div class="col-md-3 mb-3">
                                <label for="validationServer05">Zip</label>
                                <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required/>
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                                </div> */}
                            </div>
                            <div class="form-group">
                                {/* <div class="form-check">
                                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                                <label class="form-check-label" for="invalidCheck3">
                                    Agree to terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                                </div> */}
                            </div>
                            <button class="btn btn-primary" type="submit">Submit form</button>
                            </form>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default Form;