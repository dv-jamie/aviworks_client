import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./component/templetes/Layout";
import Home from "./page/Home";
import Product from "./page/Product";
import Contact from "./page/Contact";
import Recruit from "./page/Recruit";

function App() {
  const [language, setLanguage] = useState("한국어");

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route
              element={
                  <Layout />
              }
          >
              <Route
                  path="/"
                  element={<Home />}
              ></Route>
              <Route
                  path="/product"
                  element={<Product />}
              ></Route>
              <Route
                  path="/contact"
                  element={<Contact />}
              ></Route>
              <Route
                  path="/recruit"
                  element={<Recruit />}
              ></Route>

              <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
