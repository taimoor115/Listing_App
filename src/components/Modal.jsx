import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/features/todoSlice";

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
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-xs"
                  value={updatedFormData.name}
                  onChange={(e) =>
                    setUpdatedFormData({
                      ...updatedFormData,
                      name: e.target.value,
                    })
                  }
                  required
                  placeholder="Name"
                />
                <input
                  type="number"
                  value={updatedFormData.price}
                  className="input input-bordered input-primary w-full max-w-xs"
                  onChange={(e) =>
                    setUpdatedFormData({
                      ...updatedFormData,
                      price: parseInt(e.target.value),
                    })
                  }
                  required
                  placeholder="Price"
                />
                <div className="flex justify-evenly">
                  <button className="btn btn-primary">Submit</button>
                  <button
                    className="btn btn-neutral"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
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
