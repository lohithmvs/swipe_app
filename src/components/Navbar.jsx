import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/invoices">Invoices</Link>
    <Link to="/products">Products</Link>
    <Link to="/customers">Customers</Link>
  </nav>
);

export default Navbar;
