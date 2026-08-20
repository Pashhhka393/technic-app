import { useState } from "react";
import { useStore } from "../../store/productStore";
import "./createproduct.css";

const CreateProduct = () => {
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const addProduct = useStore((state) => state.addProduct);
  const products = useStore((state) => state.products);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !category.trim() ||
      !title.trim() ||
      !desc.trim() ||
      !price.trim() ||
      !imageUrl.trim()
    ) {
      alert("Заполните все поля");
      return;
    }

    if (Number(price) <= 0) {
      alert("Цена должна быть больше 0");
      return;
    }

    addProduct({
      category: category.trim(),
      title: title.trim(),
      description: desc.trim(),
      price: Number(price),
      image: imageUrl.trim(),
    });

    setCategory("");
    setTitle("");
    setDesc("");
    setPrice("");
    setImageUrl("");
  };

  console.log(products)

  return (
    <section className="form-section">
      <div className="container">
        <form className="form">
          <h1 className="text-2xl font-bold">Создание товара</h1>

          <input
            type="text"
            className="category focus:border-black"
            placeholder="Введите категорию товара..."
            required
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="text"
            className="title focus:border-black"
            placeholder="Введите название товара..."
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="description focus:border-black"
            placeholder="Введите описание товара..."
            onChange={(e) => setDesc(e.target.value)}
            required
          />

          <input
            type="number"
            className="price focus:border-black"
            placeholder="Введите цену товара..."
            min="0"
            step="1"
            required
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            className="focus:border-black"
            placeholder="Введите URL изображения..."
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-black text-white transition hover:bg-gray-800"
            onClick={handleSubmit}
          >
            Создать товар
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateProduct;
