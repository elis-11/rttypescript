import { Item } from "./Item";
import "../App.scss";
import { useAppSelector } from "../hook";

export const List: React.FC = () => {
  const items = useAppSelector((state) => state.items.list); // cut items from store, → from Slice and use it

  console.log(items);
  return (
    <div className="todos">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
