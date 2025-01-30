import { useParams } from "react-router-dom";

export default function Item() {
  const { item } = useParams();
  return (
    <div>
      <p>{item.charAt(0).toUpperCase() + item.slice(1, item.length)}</p>
    </div>
  );
}
