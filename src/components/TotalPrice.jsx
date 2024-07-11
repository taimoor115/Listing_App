import { useSelector } from "react-redux";

const TotalPrice = () => {
  const { todos } = useSelector((state) => state.todo);

  const priceArr = todos.map((todo) => todo.price);
  const totalPrice = priceArr.reduce((acc, cur) => acc + cur, 0);
  return (
    <div>
      {totalPrice !== 0 && (
        <p className="font-bold text-white flex justify-center mt-2">
          Total Price: {totalPrice}
        </p>
      )}
    </div>
  );
};

export default TotalPrice;
