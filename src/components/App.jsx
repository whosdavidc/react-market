import React from 'react';
import Layout from "../containers/Layout";
import Login from "../containers/Login";

import "../styles/Login.scss";
import "../styles/global.css";

const App = () => {
	return (
		<Layout>
			<Login/>
		</Layout>
	);
}

export default App;