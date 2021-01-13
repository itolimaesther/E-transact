import React from "react";

function GenderFilter() {
//   const [genderFilter, setGenderFilter] = useState("");


const selectedOptions = (value) => {

}

  return (
    <div className="form-row">
      <div className="form-group">
        <select
          className="form-control"
          name=""
        >
          <option defaultValue>filter by gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
    </div>
  );
}

export default GenderFilter;
