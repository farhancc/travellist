export default function Status({ item }) {
  if (!item.length) return <p className="stats">add some items to your list</p>;
  const numberOfItem = item.length;
  const numberOfPacked = item.filter((s) => s.packed === true).length;
  const percent = Math.round((numberOfPacked / numberOfItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "you are ready to go✈️"
          : `you have ${numberOfItem} item on and you already packed ${numberOfPacked}(
        ${percent}%)`}
      </em>
    </footer>
  );
}
