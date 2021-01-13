import React from "react";

function GenderFilter() {
  // const [genderFilter, setGenderFilter] = useState("");

  return (
    <div className="form-row">
      <div className="form-group">
        <select
          className="form-control"
          name=""
        >
          <option selected>filter by gender</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>
  );
}

export default GenderFilter;
