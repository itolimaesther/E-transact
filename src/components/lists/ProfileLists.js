import React from "react";
import TableHeader from "./TableHeader";

function ProfileLists({ listsData }) {
  const headers = [
    { name: "First Name", field: "firstname" },
    { name: "Last Name", field: "lastname" },
    { name: "Gender", field: "gender" },
    { name: "Latitude", field: "latitude" },
    { name: "Credit Card Number", field: "ccnumber" },
    { name: "Credit Card Type", field: "cctype" },
    { name: "Email", field: "email" },
    { name: "Domian Name", field: "domname" },
    { name: "Phone Number", field: "phone" },
    { name: "Mac Address", field: "macaddr" },
    { name: "URL", field: "url" },
    { name: "User Name", field: "uname" },
    { name: "Last Login", field: "lastlogin" },
    { name: "Payment Method", field: "paymethod" },
  ];

  return (
    <div className="row w-100">
      <div className="col mb-3 col-12 text-center">
        <div className="table-container">
          <table className="table table-striped table-wrapper border rounded">
            <TableHeader headers={headers} />
            <tbody>
              {listsData.map((list, i) => (
                <tr key={i}>
                  <td>{list.FirstName}</td>
                  <td>{list.LastName}</td>
                  <td>{list.Gender}</td>
                  <td>{list.Latitude}</td>
                  <td>{list.CreditCardNumber}</td>
                  <td>{list.CreditCardType}</td>
                  <td>{list.Email}</td>
                  <td>{list.DomainName}</td>
                  <td>{list.PhoneNumber}</td>
                  <td>{list.MacAddress}</td>
                  <td>{list.URL}</td>
                  <td>{list.UserName}</td>
                  <td>{list.LastLogin}</td>
                  <td>{list.PaymentMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileLists;
