import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";



// import ProtectedRoute from "./components/other component/protected_route";
// import { AdminLayout } from "./components/Admin/AdminLayout";

import { Toaster } from "./UI/toaster";
import ForgetPassword from "./components/Agent/Auth/forget_password";
import VerifyOTP from "./components/Agent/Auth/verify_otp";
import ChangePassword from "./components/Agent/Auth/change_passowrd";
import { AgentLayout } from "./components/layout/AgentLayout";
import AdminDashboard from "./components/Agent/Pages/admin_dashboard";
import AdminSignIn from "./components/Agent/Auth/adminauth";
import Usermanagement from "./components/Agent/Pages/Usermanagement/user_management";
import Agentmanagement from "./components/Agent/Pages/Agentmanagement/agent_management";
import Brokeragemanagement from "./components/Agent/Pages/Brokeragemanagement/borkerage_management";
import ListingModeration from "./components/Agent/Pages/ListingsModeration/listings";
import BuyerRequirment from "./components/Agent/Pages/Buyerrequirment/buyerrequirment";
import SubscriptionPayment from "./components/Agent/Pages/SubscriptionPayment/subcription_payment";
import CreditManagement from "./components/Agent/Pages/Creditmanagement/credit_management";
import PlateformSettings from "./components/Agent/Pages/PlateformSettings/plateform_settings";
import ActivityLog from "./components/Agent/Pages/ActivityLog/activity_log";
import Compliance from "./components/Agent/Pages/Compliance/compliance";
import SettingsPage from "./components/Agent/Pages/Settings/settings";
import Advertisement from "./components/Agent/Pages/Advertisement/advertisement";




function App() {
  return (

    <>
    
   <Toaster/>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<AdminSignIn/>}></Route>
         <Route path="/forget-password" element={<ForgetPassword/>}></Route>
         <Route path="/verify-otp" element={<VerifyOTP/>}></Route>
         <Route path="/change-password" element={<ChangePassword/>}></Route>
    
      {/* <Route element={<ProtectedRoute />}> */}
       {/* Admin Routes */}
        <Route path="/admin" element={<AgentLayout />}>
           <Route index element={<AdminDashboard />} />
            <Route path="user-management" element={<Usermanagement />} />
            <Route path="agent-management" element={<Agentmanagement />} />
            <Route path="brokerage-management" element={<Brokeragemanagement />} />
            <Route path="listing-moderation" element={<ListingModeration />} />
            <Route path="advertisement" element={<Advertisement />} />
            <Route path="buyer-requirment" element={<BuyerRequirment />} />
            <Route path="subscription-payment" element={<SubscriptionPayment />} />
            <Route path="credit-management" element={<CreditManagement />} />
            <Route path="plateform-settings" element={<PlateformSettings />} />
            <Route path="activity-log" element={<ActivityLog />} />
            <Route path="compliance" element={<Compliance />} />
            <Route path="settings" element={<SettingsPage />} />
    </Route>

      </Routes>
   
      
        
    </BrowserRouter>
</>
   
  );
}

export default App;
