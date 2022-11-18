import Form from "react-bootstrap/Form";

const Select = ({ setFilter, countries, property }) => {
  const filter_items = [...new Set(countries?.map((item) => item[property]))];
  return (
    <div className="select  d-flex  justify-content-end">
      <Form.Select
        aria-label="Default select example"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, region: e.target.value }))
        }
      >
        <option value={"all"}>Filter By Region</option>
        {filter_items?.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Select;
