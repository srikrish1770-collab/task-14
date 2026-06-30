import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("q") || "";

  const handleSearch = (e) => {
    const value = e.target.value;

    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;