import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-items">
          <Link to="/">
            <span className="text-2xl font-bold">Product Store</span>
          </Link>
          <nav className="header-nav flex gap-5">
            <ul className="flex  gap-5">
              <Link to="/products">
                <li>
                  <button>Товары </button>
                </li>
              </Link>
              <Link to="/create-product">
                <li>
                  <button> + Создать </button>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
