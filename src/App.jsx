import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { add } from "./store/features/todoSlice";
import toast from "react-hot-toast";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import Input from "./components/Input";
import Search from "./components/Search";

const App = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", price: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = { ...formData, id: uuidv4(), checked: false };
    dispatch(add(newTodo));
    toast.success("Todo Added Successfully....");
    setFormData({ name: "", price: "" });
  };

  return (
    <div className="flex flex-col lg:justify-center lg:items-center">
      <div className="h-screen lg:w-3/4">
        <div className="sticky top-0 z-50">
          <h1 className="text-4xl text-white text-center mt-3 font-bold ">
            Todo List App
          </h1>

          <form
            onSubmit={handleAdd}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 justify-center"
          >
            <div className="justify-center flex">
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="justify-center flex">
              <Input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: parseInt(e.target.value) })
                }
                min={1}
              />
            </div>
            <div className="flex justify-center">
              <Button name="Add" className="btn btn-wide btn-primary" />
            </div>
          </form>

          <div className="flex justify-end">
            <Search />
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
