import Form from "react-bootstrap/Form";

const Search = ({ search, setFilter }) => {
  return (
    <Form.Control
      type="text"
      name="search-form"
      id="search-form"
      className="search-input p d-flex py-2"
      placeholder="Search for a country..."
      value={search}
      onChange={(e) =>
        setFilter((prev) => ({ ...prev, search: e.target.value }))
      }
    />
  );
};

export default Search;
