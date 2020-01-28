import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddApartment from './componentsInUse/apartment/AddApartment';
import Form from './componentsNotInUse/form/form'
import GalleryPage from "./componentsInUse/pages/gallery-page"
import HomePage from "./componentsInUse/pages/home-page";
import Login from './componentsInUse/login/loginForm';
import MyApartments from './componentsInUse/userPages/myapartments/MyApartments'
import Signup from './componentsInUse/login/signup';
import SingleApartment from './componentsInUse/singleApartment/singleApartment';
import User from './componentsInUse/adminPages/users'
import Apartments from './componentsInUse/adminPages/apartments'

class App extends React.Component {
    render(){
        return (
            <Router>
                <div id={"app"}>
                    <div>
                        <Switch>
                            <Route path={"/addapartment"} component={AddApartment}/>
                            <Route path={"/gallery"} component={GalleryPage}/>
                            <Route path={"/apartment/:id"} component={SingleApartment} />
                            <Route path={"/apartments"} component={Apartments} />
                            <Route path={"/form"} component={Form}/>
                            <Route path={"/login"} component={Login}/>  
                            <Route path={"/myapartments/:id"} component={MyApartments}/>
                            <Route path={"/signup"} component={Signup}/>
                            <Route path={"/users"} component={User} />
                            <Route path={"/"} component={HomePage}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;