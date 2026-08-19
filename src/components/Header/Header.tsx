import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-items">
          <span className="text-2xl font-bold">Product Store</span>
          <nav className="header-nav flex gap-5">
            <ul className="flex  gap-5">
              <li>
                <button>Товары </button>
              </li>
              <li>
                <button> + Создать </button>
              </li>
            </ul>
            <button className="header-favourite">Избранное</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
