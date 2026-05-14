import React from "react";
import {  Routes, Route, BrowserRouter, Navigate } from "react-router-dom";



// import ProtectedRoute from "./components/other component/protected_route";
// import { AdminLayout } from "./components/Admin/AdminLayout";

import { Toaster } from "./UI/toaster";

import {  BrokerLayout } from "./components/layout/brokerlayout";
import Verification from "./components/Broker/Pages/Verification/verification";
import VerifyAsAgent from "./components/Broker/Pages/Verification/verify_as_agent";
import UploadUAEPassId from "./components/Broker/Pages/Verification/upload_uae_pass_id";
import EditProfile from "./components/Broker/Pages/BrokerProfile/edit_profile";
import BrokerDashboard from "./components/Broker/Pages/broker_dashboard";
import BrokerProfile from "./components/Broker/Pages/BrokerProfile/broker_profile";
import AgentManagement from "./components/Broker/Pages/AgentManagement/agent_management";
import ListingOverview from "./components/Broker/Pages/ListingOverview/listing_overview";
import LeadDistribution from "./components/Broker/Pages/LeadDistribution/lead_distributions";
import Calendar from "./components/Broker/Pages/Calendar/calendar";
import Subscription from "./components/Broker/Pages/Subscription/subscription";
import Settings from "./components/Broker/Pages/Settings/settings";
import Promotion from "./components/Broker/Pages/Promotion/promotion";
import PropertyManager from "./components/Broker/Pages/PropertyManager/property_manager";
import EditPropertyManager from "./components/Broker/Pages/PropertyManager/edit_property_manager";
import EditTenancy from "./components/Broker/Pages/PropertyManager/tenancy";
import EditListingIntent from "./components/Broker/Pages/PropertyManager/listing_intent";
import EditAlerts from "./components/Broker/Pages/PropertyManager/EditAlerts";





function App() {
  return (

    <>
    
   <Toaster/>
    <BrowserRouter>
      <Routes>
         {/* <Route path="/" element={<AgentSignIn/>}></Route>
         <Route path="/profession-login" element={<ProfessionSignIn/>}></Route>
         <Route path="/forget-password" element={<ForgetPassword/>}></Route>
         <Route path="/verify-otp" element={<VerifyOTP/>}></Route>
         <Route path="/change-password" element={<ChangePassword/>}></Route>
         <Route path="/user-signup" element={<UserSingup/>}></Route>
         <Route path="/brokerage-signup" element={<BrokerageSignup/>}></Route>
         <Route path="/agent-signup" element={<AgentSignup/>}></Route> */}
    
      {/* <Route element={<ProtectedRoute />}> */}
       {/* Admin Routes */}
       <Route path="/" element={<Navigate to="/brokerage" replace />} />
        <Route path="/brokerage" element={<BrokerLayout />}>
           <Route index element={<BrokerDashboard />} />
           <Route path="verification" element={<Verification />} />
           <Route path="verification/verify-as-agent" element={<VerifyAsAgent />} />
           <Route path="verification/verify-as-agent/upload" element={<UploadUAEPassId />} />
           <Route path="broker-profile" element={<BrokerProfile />} />
           <Route path="broker-profile/edit-profile" element={<EditProfile />} />
           <Route path="agent-management" element={<AgentManagement />} />
           <Route path="listings" element={<ListingOverview />} />
           <Route path="lead-distribution" element={<LeadDistribution />} />
           <Route path="subscription" element={<Subscription />} />
           <Route path="calendar" element={<Calendar />} />
           <Route path="promotion" element={<Promotion />} />
           <Route path="property-manager" element={<PropertyManager />} />
           <Route path="edit-property-manager" element={<EditPropertyManager />} />
           <Route path="edit-property-manager-tenancy" element={<EditTenancy />} />
           <Route path="edit-property-manager-listing-intent" element={<EditListingIntent />} />
           <Route path="edit-property-manager-alerts" element={<EditAlerts />} />
           <Route path="settings" element={<Settings />} />
         
    
    </Route>

      </Routes>
   
      
        
    </BrowserRouter>
</>
   
  );
}

export default App;
