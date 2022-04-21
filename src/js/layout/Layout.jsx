import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "./Navbar/navbar.jsx"
import { Footer } from "./Footer/footer.jsx"

export const Layout = (props) => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <div>
                {props.children}
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}


Layout.propTypes = {
    children: PropTypes.func
}