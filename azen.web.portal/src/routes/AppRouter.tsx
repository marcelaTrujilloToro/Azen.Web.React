import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';

import LoginPage from '../pages/login/LoginPage';
import HomePage from '../pages/home/HomePage';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch> 
                    <Route exact path="/login" component={ LoginPage } />
                    <Route exact path="/home" component={ HomePage } />
                    <Redirect to="/login"/>
                </Switch>
            </div>
        </Router>
    )
};

export default withRouter(AppRouter);