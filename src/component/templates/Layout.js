import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout({ language }) {
    return (
        <div className={styles.container}>
            <Header language={language} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;