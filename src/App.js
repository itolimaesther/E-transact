import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileLists from "./components/lists/ProfileLists";
import Search from "./components/search/Search";
import Pagination from "./components/pagination/Pagination";
import Genderfilter from "./components/filter/GenderFilter";
import Paymentfilter from "./components/filter/PaymentFilter";

function App() {
  const [lists, setLists] = useState([]);
  const [filteredList, setfilteredList] = useState([...lists]);
  const [currentPageList, setcurrentPageList] = useState([...lists]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const ITEMS_PER_PAGE = 20;

  const fetchData = async () => {
    const url = "http://api.enye.tech/v1/challenge/records";
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.records.profiles);
      setLists(data.records.profiles);
      setfilteredList(data.records.profiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useMemo(() => {
    setTotalItems(filteredList.length);
    console.log(filteredList.length);
    //Current Page slice
    const paginatedList = filteredList.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
    setcurrentPageList(paginatedList);
  }, [filteredList]);

  const filterAll = () => {
    let filteredBySearch;
    let filteredByPayment;
    let filteredByGender;
    if (search === "") {
      filteredBySearch = lists;
    } else {
      filteredBySearch = lists.filter(
        (list) =>
          list.FirstName.toLowerCase().includes(search.toLowerCase()) ||
          list.LastName.toLowerCase().includes(search.toLowerCase()) ||
          list.Email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (paymentMethod === "") {
      filteredByPayment = filteredBySearch;
    } else {
      filteredByPayment = filteredBySearch.filter(
        (item) => item.PaymentMethod === paymentMethod
      );
    }

    if (gender === "") {
      filteredByGender = filteredByPayment;
    } else {
      filteredByGender = filteredByPayment.filter(
        (item) => item.Gender === gender
      );
    }

    setfilteredList(filteredByGender);
  };

  useMemo(() => filterAll(), [search, paymentMethod, gender]);

  return (
    <div className="App">
      <header className="App-header">
        <Search
          onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />
      </header>

      <div className="row w-100 mx-0">
        <div className="mb-3 col-12">
          <div className="filter-wrapper">
            <div className="gender">
              <Genderfilter setGender={setGender} />
            </div>
            <div className="payment">
              <Paymentfilter setPaymentMethod={setPaymentMethod} />
            </div>
          </div>

          <ProfileLists listsData={currentPageList} />

          <div className="float-right">
            <Pagination
              total={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
