import { useEffect, useState } from "react";
import { fetchProducts, type Product } from "../../api/productService";
import "./products.css";
import ProductItem from "./ProductItem/ProductItem";
import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/productStore";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [liked, setLiked] = useState<number[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  //Zustand
  const createdProducts = useStore((state) => state.products);
  const allProducts = [...products, ...createdProducts];
  const deleteProduct = useStore((state) => state.deleteProduct);

  const toggleLiked = (id: number) => {
    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((likedId) => likedId !== id)
        : [...prev, id],
    );
  };
  const filteredCards = allProducts.filter((product) =>
    liked.includes(product.id),
  );

  const cardsToShow = (showFavourites ? filteredCards : allProducts).filter(
    ({ title }) => title.toLowerCase().includes(search.toLowerCase()),
  );
  const deleteCard = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
    deleteProduct(id);
  };

  if (isLoading)
    return <div className="text-center font-bold">Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section>
      <div className="container">
        <div className="filter-and-search-cards">
          <button
            className={`font-bold ${showFavourites === false ? "active" : ""}`}
            onClick={() => setShowFavourites(false)}
          >
            Все
          </button>
          <button
            className={`font-bold ${showFavourites ? "active" : ""}`}
            onClick={() => setShowFavourites(true)}
          >
            Избранные
          </button>
          <input
            value={search}
            type="text"
            placeholder="Поиск..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="cards">
          {cardsToShow.map((product) => (
            <Link to={`/products/${product.id}`}>
              <ProductItem
                key={product.id}
                product={product}
                liked={liked.includes(product.id)}
                setLiked={() => toggleLiked(product.id)}
                deleteCard={deleteCard}
              />
            </Link>
          ))}
        </div>

        {showFavourites && cardsToShow.length === 0 && !search && (
          <div className="empty-favourite">
            <p className="font-bold text-3xl">
              Вы ничего не добавили в избранное
            </p>

            <Link to="/">
              <button className="font-bold">
                На главную <ArrowBigRight />
              </button>
            </Link>
          </div>
        )}

        {cardsToShow.length === 0 && search && (
          <p className="text-center font-bold text-2xl">Ничего не найдено</p>
        )}
      </div>
    </section>
  );
};

export default Products;
