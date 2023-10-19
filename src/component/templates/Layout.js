import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.container}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;