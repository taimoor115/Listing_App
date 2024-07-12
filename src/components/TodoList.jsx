import { useDispatch, useSelector } from "react-redux";
import { remove, toggleChecked } from "../store/features/todoSlice";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import TotalPrice from "./TotalPrice";
import Modal from "./Modal";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, search } = useSelector((state) => state.todo);
  console.log("Hello search", search);

  const filterItems = search
    ? todos.filter((todo) =>
        todo.name.toLowerCase().includes(search.toLowerCase())
      )
    : todos;

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
        <div className="text-white font-bold text-center p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-primary">Completed</th>
                <th className="bg-primary">Todo</th>
                <th className="bg-primary">Price</th>
                <th className="bg-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterItems.map((todo) => (
                <tr key={todo.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleChecked(todo.id)}
                    />
                  </td>
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

                  <td className="flex justify-center gap-6">
                    <button onClick={() => handleRemove(todo.id)}>
                      <CgClose className="text-xl text-red-600 font-extrabold" />
                    </button>
                    <Modal todo={todo} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-white font-bold p-3">No Todos Found ...</div>
      )}

      <TotalPrice />
    </div>
  );
};

export default TodoList;
