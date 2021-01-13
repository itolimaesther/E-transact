import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileLists from "./components/lists/ProfileLists";
import Search from "./components/search/Search";
import Pagination from "./components/pagination/Pagination";
import Genderfilter from "./components/filter/GenderFilter"
import Paymentfilter from "./components/filter/PaymentFilter"


function App() {

  const [lists, setLists] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [appFilters, setAppFilters] = useState({
    gender:'',
    payment:''
  });

  const ITEMS_PER_PAGE = 20;

  const fetchData = async () => {
    const url = "http://api.enye.tech/v1/challenge/records";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLists(data.records.profiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listsData = useMemo(() => {

    const computedList = lists.filter(list => {

      return search ?  list.FirstName.toLowerCase().includes(search.toLowerCase()) ||
      list.Email.toLowerCase().includes(search.toLowerCase()) : true
  
    } ).filter(list => {
      appFilters.gender ?  list.gender.includes(appFilters.gender) : true 
    }).filter(list => appFilters.payment ? list.payment.includes(appFilters.payment):true)

  
      

    setTotalItems(computedLists.length);
    //Current Page slice
    return computedLists.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    

  }, [lists, currentPage, search]);

  return (
    <div className="App">
      <header className="App-header">{/* <Search /> */}</header>

      <div className="row w-100">
      <div className="col mb-3 col-12 text-center">
        <div className="row">
        <div className="col-md-3 d-flex">
            <Genderfilter  />
          </div>
          <div className="col-md-3 d-flex">
            <Paymentfilter  />
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

          <ProfileLists />
        
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
