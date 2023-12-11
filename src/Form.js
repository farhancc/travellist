import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDesc] = useState("");
  const [quantity, setQuant] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);
    setDesc("");
    setQuant(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {" "}
      <h3>What do you want to carry with you</h3>
      <select
        value={quantity}
        onChange={(e) => setQuant(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((s) => (
          <option value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item...."
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button>add</button>
    </form>
  );
}
