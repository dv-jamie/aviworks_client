import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./component/templates/Layout";
import Home from "./page/Home";
import Product from "./page/Product";
import Contact from "./page/Contact";
import Recruit from "./page/Recruit";

function App() {
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
          <Route path="/product">
            <Route path="" element={<Product />}></Route>
            <Route path="swing-tracker" element={<Product />}></Route>
            <Route path="a-scout" element={<Product />}></Route>
            <Route path="caddie-robot" element={<Product />}></Route>
          </Route>
          <Route
            path="contact"
            element={<Contact />}
          ></Route>
          <Route
            path="recruit"
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
