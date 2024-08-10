import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const Header = lazy(() => import('./components/Shared/Header'));
const Footer = lazy(() => import('./components/Shared/Footer'));
const ProductList = lazy(() => import('./components/Product/ProductList'));
const AddProduct = lazy(() => import('./components/AddProduct/AddProduct'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const CheckoutForm = lazy(() => import('./components/Checkout/CheckoutForm'));
const OrderHistory = lazy(() => import('./components/OrderHistory/OrderHistory'));

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/orders" element={<OrderHistory />} />
              <Route path="/dashboard" element={<AddProduct />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
            <Footer />
          </Suspense>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
};

export default App;
