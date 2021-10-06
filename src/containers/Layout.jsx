import React from "react";
import "../styles/Login.scss";
import "../styles/global.css";

const Layout = ({children}) => {
    return(
        <div className="Layout">
            {children}
        </div>
    )
} 

export default Layout;