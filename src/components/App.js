import './../styles/App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Category from "./Category";
import Item from "./Item";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="women" element={<Category />}>
            <Route path=":item" element={<Item />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
