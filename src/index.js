/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from 'layouts/Admin/Admin.js';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import SignTransaction from 'views/SignTransactionPage';
import Login from 'views/Login.js';
import Register from 'views/Register.js';

import 'assets/scss/black-dashboard-react.scss';
import 'assets/demo/demo.css';
import 'assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.scss';

import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isWindows = navigator.platform.includes('Win');

if (!isWindows) {
  root.render(
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/home" render={() => <HomePage />} />
            <Route path="/signtransaction" render={() => <SignTransaction />} />
            <Route path="/loginpage" render={() => <LoginPage />} />
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Redirect from="*" to="/home" />
          </Switch>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
} else {
  ReactDOM.render(<div>Sorry, this application is only supported on Windows.</div>, document.getElementById('root'));
}
