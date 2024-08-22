import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputSearch = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center relative w-full">
      <input
        type="search"
        className="outline-none px-3 py-2 border-2 hover:border-custom-yellow focus:border-custom-yellow w-full rounded-full"
        placeholder="cari produk"
      />
      <button
        type="submit"
        className="absolute right-0 bg-custom-yellow hover:bg-yellow-400 px-3 py-2 rounded-r-full"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default InputSearch;
