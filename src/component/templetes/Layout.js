import { Outlet } from "react-router-dom";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

function Layout({ language }) {
    return (
        <div>
            <Header language={language} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;