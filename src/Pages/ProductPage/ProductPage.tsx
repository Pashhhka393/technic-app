import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductItem, type Product } from "../../api/productService";
import { ArrowLeft, Star } from "lucide-react";
import { useStore } from "../../store/productStore";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const products = useStore((state) => state.products);

  const newProduct = products.find((product) => product.id === Number(id));

  useEffect(() => {
    if (newProduct) {
      setProduct(newProduct);
      return;
    }
    fetchProductItem(Number(id)).then((data) => setProduct(data));
  }, [id, newProduct]);

  if (product === null) {
    return <h1 className="text-center font-bold">Загрузка...</h1>;
  }

  return (
    <section className="card-product">
      <div className="container">
        <Link to="/">
          <button>
            <ArrowLeft />
            На главную
          </button>
        </Link>
        <div className="card-items">
          <img src={product.image} alt={product.title} />

          <div className="card-desc">
            <span className="category">{product.category}</span>

            <h1 className="title">{product.title}</h1>

            <div className="rating">
              <Star size={20} fill="gold" className="text-yellow-400" />

              <span className="font-bold">{product.rating.rate}</span>

              <span className="text-gray-600">
                ({product.rating.count} оценок)
              </span>
            </div>

            <p className="price">${product.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
