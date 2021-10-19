import React from "react";
import "../styles/Login.scss";
import "../styles/global.css";
import Header from "../components/Header";

const Layout = ({children}) => {
    return(
        <div className="Layout">
            <Header/>
            {children}
        </div>
    )
} 

export default Layout;