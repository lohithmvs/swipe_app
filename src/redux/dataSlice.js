import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
  products: [],
  customers: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setInvoices(state, action) {
      const data = action.payload;
      state.invoices = [
        {
          multipleInvoices: data["Multiple Invoices"],
          taxes: data["Taxes"],
          totalQuantity: data["Total Quantity"],
          netAmount: data["Item Net Amount"],
          totalAmount: data["Item Total Amount"],
          cgst: data["CGST"],
          sgst: data["SGST"],
          igst: data["IGST"],
          discount: data["Extra Discount"],
        },
      ];
    },
    setProducts(state, action) {
      const data = action.payload;
      state.products = [
        { name: "Monster Energy", description: data["Varied Products"] },
        { name: "Gemini Tea and Sweet Box", description: data["Gemini Tea and Sweet Box"] },
        { name: "Matrix and Pillows", description: data["Matrix and Pillows"] },
      ];
    },
    setCustomers(state, action) {
      const data = action.payload;
      state.customers = [
        { name: "General Customers", notes: data["Shipping and Charges"] },
      ];
    },
  },
});

export const { setInvoices, setProducts, setCustomers } = dataSlice.actions;
export default dataSlice.reducer;
