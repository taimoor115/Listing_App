import { useDispatch, useSelector } from "react-redux";
import { filter, remove, toggleChecked } from "../store/features/todoSlice";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import TotalPrice from "./TotalPrice";
import Modal from "./Modal";
import Search from "./Search";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const search = useSelector((state) => state.todo.search);
  console.log(todos);

  const filterItems = search
    ? todos?.filter((todo) =>
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
      {todos?.length !== 0 ? (
        <>
          <div className="flex justify-end">
            <Search />
          </div>
          <div className="text-white font-bold text-center p-4">
            {filterItems?.length !== 0 ? (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-primary">Completed</th>
                    <th className="bg-primary">Todo</th>
                    <th className="bg-primary">Price</th>
                    <th className="bg-primary">Action</th>
                    <th className="bg-primary">Order</th>
                  </tr>
                </thead>
                <tbody>
                  {filterItems?.map((todo) => (
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
                          textDecoration: todo.checked
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.name}
                      </td>
                      <td
                        style={{
                          textDecoration: todo.checked
                            ? "line-through"
                            : "none",
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
                      <td>
                        <span className="flex justify-center gap-3 ">
                          <FaArrowUp onClick={() => dispatch(filter("des"))} />
                          <FaArrowDown
                            onClick={() => dispatch(filter("asc"))}
                          />
                          <GrPowerReset
                            onClick={() => dispatch(filter("reset"))}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>No search results found...</div>
            )}
          </div>
        </>
      ) : (
        <div className="text-white font-bold p-3">No Todos Found ...</div>
      )}

      {!search && <TotalPrice />}
    </div>
  );
};

export default TodoList;
