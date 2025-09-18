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
import About from "./pages/about/about";
import Contact from "./pages/contactPieces/contact";
import Services from "./pages/services/services";
import Home from "./pages/home";
import Landscaping from "./pages/portfolio/landscaping"; 

import ResponsiveAppBar from "./components/mNav/mNav";
import Footer from "./components/footer";
//Home
//Contact
//Services and Pricing
//Portfolio
//About

//if want to add stuff to navbar, start here
const routes = [
  ["/", Home],
  ["/home", Home],
  ["/about", About],
  ["/contact", Contact],
  ["/services", Services],
  ["/landscaping", Landscaping],
];

function genRoutes(array) {
  return array.map(([path, Component], i) => (
    <Route key={i} path={path} element={<Component />} />
  ));
}


function App() {
  return (
    <div>
      
      <Router>
        <ResponsiveAppBar />

        <Routes>{genRoutes(routes)}</Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;