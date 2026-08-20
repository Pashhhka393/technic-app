export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  //Для отдельной страницы
  description: string;
  rating: { rate: number; count: number };
  category: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке товаров");
  }
  return response.json();
};

export const fetchProductItem = async (id: number): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Ошибка при загрузке товара");
  }

  return response.json();
};
