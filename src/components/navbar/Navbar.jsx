import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.brand}>
          Rablo.
          <span className={styles.domain}>in</span>
        </div>
        <div className={styles.account}>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Navbar;
