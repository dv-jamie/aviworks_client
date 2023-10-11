import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./component/templates/Layout";
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
                  <Layout language={language} />
              }
          >
              <Route
                  path={`${process.env.PUBLIC_URL}`}
                  element={<Home />}
              ></Route>
              <Route
                  path={`${process.env.PUBLIC_URL}/product`}
                  element={<Product />}
                  ></Route>
              <Route
                  path={`${process.env.PUBLIC_URL}/contact`}
                  element={<Contact />}
                  ></Route>
              <Route
                  path={`${process.env.PUBLIC_URL}/recruit`}
                  element={<Recruit />}
              ></Route>

              <Route path="*" element={<Navigate to={`${process.env.PUBLIC_URL}`} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
