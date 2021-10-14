import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import "../styles/Login.scss";
import "../styles/global.css";
import "../styles/NotFound.scss";
import "../styles/Header.scss"
import RecoveryPassword from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import Home from "../pages/Home";
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import Orders from '../pages/Orders';
import SendEmail from '../pages/SendEmail';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={ Home }/>
					<Route exact path="/login" component={ Login }/>
					<Route exact path="/recovery-password" component={ RecoveryPassword }/>
					<Route exact path="/checkout" component={ Checkout }/>
					<Route exact path="/create-account" component={ CreateAccount }/>
					<Route exact path="/my-account" component={ MyAccount }/>
					<Route exact path="/new-password" component={ NewPassword }/>
					<Route exact path="/orders" component={ Orders }/>
					<Route exact path="/send-mail" component={ SendEmail }/>

					<Route component={ NotFound }/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;