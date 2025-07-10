// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    SiteTitle,
} from "./NavbarElements";

function linkCreator(array){
    return array.map(([thing, element], i) => (
        <NavLink key={i} to={thing} activeStyle>
          {element}
        </NavLink>
      ));
}
//TODO: dump all o' the nav constants into a file for easy modifications 
const links = [
    ["/Home", "All Pro Landscaping"],
    ["/About", "About"],
    ["/Contact", "Contact"],
    ["/Portfolio","Portfolio"],
    ["/Services", "Services"]
  ];

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    {linkCreator(links)}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;