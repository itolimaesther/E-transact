import React from "react";

function GenderFilter({ setGender }) {
  return (
    <div className="form-row">
      <div className="form-group">
        <select
          className="form-control"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">filter by gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Prefer to skip">Undisclosed</option>
        </select>
      </div>
    </div>
  );
}

export default GenderFilter;
