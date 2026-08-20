import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductItem, type Product } from "../../api/productService";
import { ArrowLeft, Star } from "lucide-react";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchProductItem(Number(id)).then((data) => setProduct(data));
  }, [id]);

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
            <p className="font-bold">{product.category}</p>
            <h1 className="title">{product.title}</h1>

            <div className="rating flex gap-0.5">
              <Star fill="yellow" className="text-yellow-400" />
              <span className="font-bold">{product.rating.rate}</span>
              <span className="text-gray-600"> ({product.rating.count})</span>
            </div>

            <p className="font-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
