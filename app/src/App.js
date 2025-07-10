// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
//import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Home from "./pages/home";



//Home
//Contact
//Services and Pricing
//Portfolio
//About

//if want to add stuff to navbar, start here
const routes = [
  //["/", Home],
  ["/about", About],
  ["/contact", Contact],
  ["/portfolio", Portfolio],
  ["/services", Services],
];

function genRoutes(array){
  return array.map(([path, Component], i) => (
    <Route key={i} path={path} element={<Component />} />
  ));
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>{genRoutes(routes)}</Routes>
        </Router>
    );
}

export default App;