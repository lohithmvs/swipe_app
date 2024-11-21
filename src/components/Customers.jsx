import React from "react";
import { useSelector } from "react-redux";

const Customers = () => {
  const customers = useSelector((state) => state.data.customers);

  return (
    <div className="container">
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
