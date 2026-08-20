import { create } from "zustand";

interface NewProduct {
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}
interface ProductStore {
  products: NewProduct[];
  addProduct: (product: NewProduct) => void;
}

export const useStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },
}));
