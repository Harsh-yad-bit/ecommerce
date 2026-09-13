import React from "react";
import "@fontsource-variable/inter";


import Home from "./pages/Home"
import Pdt from "./pages/Pdt";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Modelview from "./pages/Modelview";

import ProductList from "./pages/List";
import Preorder from "./pages/preorder";



function App() {
  return (
    <>
<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Pdt />} />
                    <Route path="/list" element={<Preorder/>} />
                      <Route path="/view" element={<Modelview/>} />
                        <Route path="/preorder" element={<ProductList/>} />
      </Routes>

    </>
  );
}

export default App;