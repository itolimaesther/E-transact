import React from "react";

function PaymentFilter() {

  return (
    <div className="form-row">
      <div className="form-group">
        <select
          className="form-control"
          name=""
        >
          <option selected>filter by paymethod</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

export default PaymentFilter;