import React from "react";

function PaymentFilter({ setPaymentMethod }) {
  return (
    <div className="form-row">
      <div className="form-group">
        <select
          className="form-control"
          name="paymentMethod"
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">filter by payment method</option>
          <option value="money order">money order</option>
          <option value="cc">cc</option>
          <option value="check">check</option>
          <option value="paypal">paypal</option>
        </select>
      </div>
    </div>
  );
}

export default PaymentFilter;
