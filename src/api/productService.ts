export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке товаров");
  }
  return response.json();
};
