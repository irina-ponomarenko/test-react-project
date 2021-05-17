import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Admin from "../components/Admin/Admin";

const Routes = () => {
    let BrowserHistory = createBrowserHistory();
    return(
        <Router history={BrowserHistory}>
            <div>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/admin" component={Admin}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                </Switch>
            </div>

        </Router>
    );
};

export default Routes;