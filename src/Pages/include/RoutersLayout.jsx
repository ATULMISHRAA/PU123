import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "../Page"
import Page1 from "../Page1";

const RoutersLayout=()=>{
    return(
        <Router>
            <Routes>
          <Route
            path="/"
            exact
            element={<Page1/>}
          />
          <Route
            path="/page1"
            exact
            element={<Page1/>}
          />
          </Routes>
          </Router>
        
    )
}
export default RoutersLayout;