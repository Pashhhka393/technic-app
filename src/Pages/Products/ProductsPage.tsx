import { useEffect, useState } from "react";
import { fetchProducts, type Product } from "../../api/productService";
import "./products.css";
import { Heart, Trash2 } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        console.log("Data:", data);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section>
      <div className="cards-container">
        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt="" />
              <p className="font-bold text-[#333] text-center">
                {product.title}
              </p>

              <div className="card-bottom flex">
                <p>${product.price.toFixed()}</p>

                <div className="delete-and-favourite">
                  <Heart />
                  <Trash2 />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
