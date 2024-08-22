import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing_page';
import ProductLP from './pages/landing_page/view/product';
import DetailProductLp from './pages/landing_page/view/product/detail';
import Product from './pages/dashboard/product';
import ProductCreate from './pages/dashboard/product/create';
import Selling from './pages/dashboard/selling';
import SellingDetail from './pages/dashboard/selling/detail';
import SellingCreate from './pages/dashboard/selling/create';
import Admin from './pages/dashboard/user/admin';
import AdminCreate from './pages/dashboard/user/admin/create';
import AdminDetail from './pages/dashboard/user/admin/detail';
import Consumer from './pages/dashboard/user/consumer';
import ConsumerCreate from './pages/dashboard/user/consumer/create';
import ConsumerDetail from './pages/dashboard/user/consumer/detail';
import Setting from './pages/dashboard/setting';
import Login from './pages/authecticate/login';
import Register from './pages/authecticate/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path='/login' Component={Login} />
    <Route path='/register' Component={Register} />
    
    <Route path='/' Component={LandingPage} />
    <Route path='/product' Component={ProductLP} />
    <Route path='/product/detail/:id' Component={DetailProductLp} />
    
    {/* Dashboard */}
    <Route path='/dashboard/product' Component={Product} />
    <Route path='/dashboard/product/create' Component={ProductCreate} />
    
    <Route path='/dashboard/selling' Component={Selling} />
    <Route path='/dashboard/selling/detail/:id' Component={SellingDetail} />
    <Route path='/dashboard/selling/create' Component={SellingCreate} />
    
    <Route path='/dashboard/user/admin' Component={Admin} />
    <Route path='/dashboard/user/admin/create' Component={AdminCreate} />
    <Route path='/dashboard/user/admin/detail/:id' Component={AdminDetail} />
    <Route path='/dashboard/user/consumer' Component={Consumer} />
    <Route path='/dashboard/user/consumer/create' Component={ConsumerCreate} />
    <Route path='/dashboard/user/consumer/detail/:id' Component={ConsumerDetail} />
    
    <Route path='/dashboard/setting' Component={Setting} />
  </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
