import React from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';

import { Layout } from "./components/layout/layout/layout";

import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import { Checkout } from "./pages/checkout/Checkout";
import { CheckoutSuccess } from "./pages/checkoutSuccess/CheckoutSuccess";
import { Contact } from "./pages/contact/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
    <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App
