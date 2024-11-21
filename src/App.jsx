import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInvoices, setProducts, setCustomers } from "./redux/dataSlice";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();

      // Dispatch data to Redux slices
      dispatch(setInvoices(data));
      dispatch(setProducts(data));
      dispatch(setCustomers(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
