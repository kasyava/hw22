import React, { Component } from 'react';

import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Pages from "./Containers/Pages/Pages";
import Admin from "./Containers/Admin/Admin";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>

              <Route path='/' exact component={Pages} />
              <Route path='/home' exact component={Pages} />
              <Route path='/about'  exact component={Pages} />
              <Route path='/faq'  exact component={Pages} />
              <Route path='/contact'  exact component={Pages} />

              <Route path='/admin'  exact component={Admin} />

            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
