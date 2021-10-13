import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import "../styles/Login.scss";
import "../styles/global.css";
import "../styles/NotFound.css";
import RecoveryPassword from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import Home from "../pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={ Home }/>
					<Route exact path="/login" component={ Login }/>
					<Route exact path="/recovery-password" component={ RecoveryPassword }/>
					<Route path="*" component={ NotFound }/>
				</Layout>
			</Switch>
		</BrowserRouter>
	);
}

export default App;