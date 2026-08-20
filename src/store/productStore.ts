import { create } from "zustand";

interface NewProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface ProductStore {
  products: NewProduct[];
  addProduct: (product: NewProduct) => void;
  deleteProduct: (id: number) => void;
}

export const useStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },
  deleteProduct: (id) => {
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    }));
  },
}));
