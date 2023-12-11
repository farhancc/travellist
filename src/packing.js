import { useState } from "react";

export default function Packing({ items, onDeleteitem, onPack, onClear }) {
  const [sortBy, setSortby] = useState("input");
  let sortitem;
  if (sortBy === "input") sortitem = items;
  else if (sortBy === "description")
    sortitem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortitem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortitem.map((s) => (
          <Item
            item={s}
            onDeleteitems={onDeleteitem}
            onPack={onPack}
            key={s.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button className="actions" onClick={() => onClear()}>
          clear
        </button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteitems, onPack }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onPack(item.id)}
        value={item.packed}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteitems(item.id)}>❌</button>
    </li>
  );
}
