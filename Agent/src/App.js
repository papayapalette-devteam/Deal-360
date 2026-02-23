import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";



// import ProtectedRoute from "./components/other component/protected_route";
// import { AdminLayout } from "./components/Admin/AdminLayout";

import { Toaster } from "./UI/toaster";
import SignIn from "./components/Agent/Auth/auth";




function App() {
  return (

    <>
    
   <Toaster/>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<SignIn/>}></Route>
    
      {/* <Route element={<ProtectedRoute />}> */}
       {/* Admin Routes */}
        {/* <Route path="/admin" element={<AdminLayout />}> */}
          {/* <Route index element={<Admindashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="banners" element={<AdminBanners />} />
          <Route path="offers" element={<AdminOffers />} />
          <Route path="popular" element={<AdminPopular />} />
          <Route path="essentials" element={<AdminEssentials />} />
          <Route path="delivery-settings" element={<AdminDelivery />} />
          <Route path="delivery-staff" element={<AdminDeliveryStaff />} />
          <Route path="settings" element={<AdminSettings />} /> */}
        {/* </Route> */}

    {/* </Route> */}

      </Routes>
   
      
        
    </BrowserRouter>
</>
   
  );
}

export default App;
