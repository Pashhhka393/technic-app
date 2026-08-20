import { Heart, Trash2 } from "lucide-react";
import type { Product } from "../../../api/productService";

interface ProductItemProps {
  product: Product;
  liked: boolean;
  setLiked: () => void;
  deleteCard: (id: number) => void;
}

const ProductItem = ({
  product,
  liked,
  setLiked,
  deleteCard,
}: ProductItemProps) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <p className="font-bold text-[#333] text-center">{product.title}</p>

      <div className="card-bottom flex">
        <p className="font-bold">${product.price.toFixed()}</p>

        <div className="delete-and-favourite">
          <Heart
            onClick={(e) => {
              e.preventDefault();
              setLiked();
            }}
            fill={liked ? "red" : "none"}
          />
          <Trash2
            onClick={(e) => {
              deleteCard(product.id);
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
