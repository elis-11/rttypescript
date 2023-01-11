import { useAppDispatch } from "../hook";
import { removeItem, toggleCompleted } from "../store/todoSlice";

interface ItemProps {
  id: string;
  title: string;
  completed: boolean;
}

export const Item: React.FC<ItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <div key={id} className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleted(id))}
      />
      <span className="title">{title}</span>
      <span
        onClick={() => dispatch(removeItem(id))}
        style={{ color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </div>
  );
};
