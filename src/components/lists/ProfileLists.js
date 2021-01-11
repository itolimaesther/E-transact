import React, { useState, useEffect, useMemo } from "react";
import TableHeader from "./TableHeader";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";

function ProfileLists() {
  const [lists, setLists] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 20;

  const headers = [
    { name: "NO#", field: "id" },
    { name: "First Name", field: "firstname" },
    { name: "Last Name", field: "lastname" },
    { name: "Gender", field: "gender" },
    { name: "Latitude", field: "latitude" },
    { name: "Credit Card Number", field: "ccnumber" },
    { name: "Credit Card type", field: "cctype" },
    { name: "Email", field: "email" },
    { name: "Domian Name", field: "domname" },
    { name: "Phone Number", field: "phone" },
    { name: "Mac Address", field: "macaddr" },
    { name: "URL", field: "url" },
    { name: "User Name", field: "uname" },
    { name: "Last Login", field: "lastlogin" },
    { name: "Payment Method", field: "paymethod" },
  ];

  const fetchData = async () => {
    const url = "http://api.enye.tech/v1/challenge/records";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listsData = useMemo(() => {
    let computedLists = lists;

    if (search) {
      computedLists = computedLists.filter(
        (list) =>
          list.name.toLowerCase().includes(search.toLowerCase()) ||
          list.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedLists.length);

    //Current Page slice
    return computedLists.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [lists, currentPage, search]);

  return (
    <div className="row w-100">
      <div className="col mb-3 col-12 text-center">
        <div className="row">
          <div className="col-md-6">
            <Pagination
              total={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
          <div className="col-md-6 d-flex flex-row-reverse">
            <Search
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <table className="table table-striped">
          <TableHeader
            headers={headers}
          />
          <tbody>
            {listsData.map((list) => (
              <tr>
                <th scope="row" key={list.id}>
                  {list.id}
                </th>
                <td>{list.firstname}</td>
                <td>{list.lastname}</td>
                <td>{list.gender}</td>
                <td>{list.latitude}</td>
                <td>{list.ccnumber}</td>
                <td>{list.cctype}</td>
                <td>{list.email}</td>
                <td>{list.domname}</td>
                <td>{list.phone}</td>
                <td>{list.macaddr}</td>
                <td>{list.url}</td>
                <td>{list.uname}</td>
                <td>{list.lastlogin}</td>
                <td>{list.paymethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileLists;
