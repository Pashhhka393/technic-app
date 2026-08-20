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
      id: Date.now(),
      category: category.trim(),
      title: title.trim(),
      description: desc.trim(),
      price: Number(price),
      image: imageUrl.trim(),
      rating: {
        rate: 0,
        count: 0,
      },
    });

    setCategory("");
    setTitle("");
    setDesc("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <section className="form-section">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">Создание товара</h1>

          <input
            value={category}
            type="text"
            className="category focus:border-black"
            placeholder="Введите категорию товара..."
            required
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            value={title}
            type="text"
            className="title focus:border-black"
            placeholder="Введите название товара..."
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={desc}
            className="description focus:border-black"
            placeholder="Введите описание товара..."
            onChange={(e) => setDesc(e.target.value)}
            required
          />

          <input
            value={price}
            type="number"
            className="price focus:border-black"
            placeholder="Введите цену товара..."
            min="0"
            step="1"
            required
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            value={imageUrl}
            type="text"
            className="focus:border-black"
            placeholder="Введите URL изображения..."
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-black text-white transition hover:bg-gray-800"
          >
            Создать товар
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateProduct;
