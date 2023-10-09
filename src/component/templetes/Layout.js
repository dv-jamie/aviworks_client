import { Outlet } from "react-router-dom";
import Header from "../molecules/Header";
import styles from './Layout.module.css'
import Footer from "../molecules/Footer";

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