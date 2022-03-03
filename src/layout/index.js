import { Link } from 'react-router-dom';

import './index.scss';

function Layout({ children, page }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header__content">{page}</div>
        <nav className="header__nav">
          <ul className="nav">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/units">Units</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
