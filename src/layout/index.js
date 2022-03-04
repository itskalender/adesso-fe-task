import { Link } from 'react-router-dom';

import './index.scss';

function Layout({ children, pageTitle }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="header__title">{pageTitle}</h1>
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
