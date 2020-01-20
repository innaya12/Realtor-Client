import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentsInUse/gallery/mystyle.css';
import './componentsInUse/home/style/home-page.css';
import './componentsInUse/gallery/singleApratment.css';
import Form from './componentsNotInUse/form/form'
import Login from './componentsInUse/login/loginForm';
import PageHome from "./componentsInUse/pages/page-home";
import PageGallery from "./componentsInUse/pages/page-gallery"
import Signup from './componentsInUse/login/signup'
import SingleApartment from './componentsInUse/gallery/singleApartment'
import AddApartment from './componentsInUse/apartment/AddApartment'
import {getApartment} from "./data/apartments"; //

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: [],
            loading: true
        };
    }
    async componentDidMount() {
        try{
            const apartments = await getApartment();
            this.setState({
                apartmentArray: apartments
            });
        }catch(error){
            alert(error.message);
        }
    };

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
                            <Route path="/apartments">
                                <PageGallery apartmentArray={this.state.apartmentArray}/>
                            </Route>
                            <Route path="/">
                                <PageHome apartmentArray={this.state.apartmentArray}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;