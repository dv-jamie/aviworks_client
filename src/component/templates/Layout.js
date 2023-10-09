import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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