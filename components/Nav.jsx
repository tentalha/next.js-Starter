import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <header className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
        <li>Profiles</li>
        <li>Stories</li>
        <li>Links</li>
        <li>Projects</li>
      </ul>
    </header>
  );
};

export default Nav;
