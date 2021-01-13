import React from "react";

function PaymentFilter() {

  return (
    <div className="form-row">
      <div className="form-group">
        <select
          className="form-control"
          name=""
        >
          <option defaultValue>filter by paymethod</option>
          <option value="1">money order</option>
          <option value="2">cc</option>
          <option value="3">check</option>
          <option value="4">paypal</option>
        </select>
      </div>
    </div>
  );
}

export default PaymentFilter;