import "./index.css";
import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import Packing from "./packing";
import Status from "./status";

export default function App() {
  const [item, setItem] = useState([]);

  function handleItem(item) {
    setItem((s) => [...s, item]);
  }

  function handleDelete(id) {
    console.log(id);
    setItem((item) => {
      return item.filter((m) => m.id !== id);
    });
  }

  function handleToggle(id) {
    setItem((s) =>
      s.map((k) => (k.id === id ? { ...k, packed: !k.packed } : k))
    );
  }

  function handleClear() {
    const confirm = window.confirm("Are you sure on clearing all your list");
    if (confirm) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItem} />
      <Packing
        items={item}
        onDeleteitem={handleDelete}
        onPack={handleToggle}
        onClear={handleClear}
      />
      <Status item={item} />
    </div>
  );
}
