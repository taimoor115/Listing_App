import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../store/features/todoSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.todo.search);
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(search(e.target.value));
  };
  return (
    <form className="lg:w-96 md:w-96 ">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow text-white"
          placeholder="Search todos..."
          value={searchData}
          onChange={handleChange}
        />
        <button type="submit">
          <BiSearch />
        </button>
      </label>
    </form>
  );
};

export default Search;
