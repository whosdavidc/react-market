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

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={ Home }/>
					<Route exact path="/login" component={ Login }/>
					<Route exact path="/recovery-password" component={ RecoveryPassword }/>
					<Route component={ NotFound }/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;