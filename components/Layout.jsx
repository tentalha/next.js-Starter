import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
