import React from "react";
import { useSelector } from "react-redux";

const Invoices = () => {
  const invoices = useSelector((state) => state.data.invoices);

  return (
    <div className="container">
      <h1>Invoices</h1>
      <table>
        <thead>
          <tr>
            <th>Details</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>Multiple Invoices</td>
                <td>{invoice.multipleInvoices}</td>
              </tr>
              <tr>
                <td>Taxes</td>
                <td>{invoice.taxes}</td>
              </tr>
              <tr>
                <td>Total Quantity</td>
                <td>{invoice.totalQuantity}</td>
              </tr>
              <tr>
                <td>Net Amount</td>
                <td>{invoice.netAmount}</td>
              </tr>
              <tr>
                <td>Total Amount</td>
                <td>{invoice.totalAmount}</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>{invoice.cgst}</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>{invoice.sgst}</td>
              </tr>
              <tr>
                <td>IGST</td>
                <td>{invoice.igst}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>{invoice.discount}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
