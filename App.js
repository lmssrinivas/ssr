import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '/pages/Homepage';
import LoginPage from '/pages/Loginpage';
import RegisterPage from '/pages/Registerpage';
import Errorpage from "/pages/Errorpage";

export class App extends Component {
    render() {

        return (
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/signup" component={RegisterPage}/>
                    <Route path="/error" component={Errorpage}/>
                </Switch>
        );
    }
}

App.propTypes = {};

export default App;
