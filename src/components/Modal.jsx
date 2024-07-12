import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/features/todoSlice";
import Button from "./Button";
import Input from "./Input";

const Modal = ({ todo }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedFormData, setUpdatedFormData] = useState({
    id: null,
    name: "",
    price: "",
  });
  const handleModalOpen = (id, name, price) => {
    setUpdatedFormData({ id, name, price });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: updatedFormData.id,
        name: updatedFormData.name,
        price: updatedFormData.price,
      })
    );
    setUpdatedFormData({ id: null, name: "", price: "" });
    setModalOpen(false);
  };
  return (
    <div>
      <button
        className="btn btn-success btn-sm"
        onClick={() => handleModalOpen(todo.id, todo.name, todo.price)}
      >
        Update
      </button>
      {modalOpen && updatedFormData.id === todo.id && (
        <dialog open className="modal">
          <div className="modal-box flex justify-center flex-col items-center">
            <h3 className="font-extrabold text-2xl text-center">Update Todo</h3>
            <div className="modal-action">
              <form className="space-y-4" onSubmit={handleModalSubmit}>
                <Input
                  type="text"
                  placeholder="Name"
                  value={updatedFormData.name}
                  onChange={(e) =>
                    setUpdatedFormData({
                      ...updatedFormData,
                      name: e.target.value,
                    })
                  }
                />

                <Input
                  type="number"
                  min={1}
                  placeholder="Price"
                  value={updatedFormData.price}
                  onChange={(e) =>
                    setUpdatedFormData({
                      ...updatedFormData,
                      price: parseInt(e.target.value),
                    })
                  }
                />
                <div className="flex justify-evenly">
                  <Button name="Submit" className="btn btn-primary" />
                  <Button
                    className="btn btn-neutral"
                    name="Cancel"
                    onClick={handleModalClose}
                  />
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Modal;
