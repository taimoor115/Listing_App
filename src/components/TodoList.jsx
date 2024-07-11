import { useDispatch, useSelector } from "react-redux";
import { remove, toggleChecked } from "../store/features/todoSlice";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import TotalPrice from "./TotalPrice";
import Modal from "./Modal";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleRemove = (id) => {
    dispatch(remove(id));
    toast.success("Todo deleted Successfully....");
  };

  const handleChecked = (id) => {
    dispatch(toggleChecked(id));
  };

  return (
    <div>
      {todos.length !== 0 ? (
        <div className="text-white font-bold text-center">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-primary">Todo</th>
                <th className="bg-primary">Price</th>
                <th className="bg-primary">Completed</th>
                <th className="bg-primary">Remove</th>
                <th className="bg-primary">Update</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.checked ? "line-through" : "none",
                    }}
                  >
                    {todo.name}
                  </td>
                  <td
                    style={{
                      textDecoration: todo.checked ? "line-through" : "none",
                    }}
                  >
                    {todo.price}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleChecked(todo.id)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleRemove(todo.id)}>
                      <CgClose className="text-xl text-red-600 font-extrabold" />
                    </button>
                  </td>
                  <td>
                    <Modal todo={todo} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-white font-bold">No Todos Found ...</div>
      )}

      <TotalPrice />
    </div>
  );
};

export default TodoList;
