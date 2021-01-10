import { Link } from "react-router-dom";

import "../css/Header.css";

export default function Header() {
  return (
    // <Router>
    <header>
      <nav>
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    // </Router>
  );
}
