import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './componentsNotInUse/form/form'
import Login from './componentsInUse/login/loginForm';
import PageHome from "./componentsInUse/pages/home-page";
import PageGallery from "./componentsInUse/pages/gallery-page"
import Signup from './componentsInUse/login/signup'
import SingleApartment from './componentsInUse/singleApartment/singleApartment'
import AddApartment from './componentsInUse/apartment/AddApartment'

class App extends React.Component {
    render(){
        return (
            <Router>
                <div id={"app"}>
                    <div>
                        <Switch>
                            <Route path={"/apartment/:id"} component={SingleApartment} />
                            <Route path={"/form"} component={Form}/>
                            <Route path={"/addapartment"} component={AddApartment}/>
                            <Route path={"/login"} component={Login}/>  
                            <Route path={"/signup"} component={Signup}/>
                            <Route path={"/apartments"} component={PageGallery}/>
                            <Route path={"/"} component={PageHome}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;