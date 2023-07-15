import React from "react";
import { Routes as ReactRoutes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import CarListAdmin from "./pages/CarListAdmin";

const Routes = () => {
  return(
    <Router>
      <ReactRoutes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="login" element={<Login/>} />
        <Route exact path="my-account" element={<Account/>} >
          <Route path='cars' element={<CarListAdmin />} />
        </Route>
      </ReactRoutes>
    </Router>
  )
 }
 
 export default Routes;