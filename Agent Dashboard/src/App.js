import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";



// import ProtectedRoute from "./components/other component/protected_route";
// import { AdminLayout } from "./components/Admin/AdminLayout";

import { Toaster } from "./UI/toaster";
import AgentSignIn from "./components/Agent/Auth/agentauth";
import ProfessionSignIn from "./components/Agent/Auth/profession_auth";
import ForgetPassword from "./components/Agent/Auth/forget_password";
import VerifyOTP from "./components/Agent/Auth/verify_otp";
import ChangePassword from "./components/Agent/Auth/change_passowrd";
import UserSingup from "./components/Agent/Auth/user_signup";
import BrokerageSignup from "./components/Agent/Auth/brokerage_signup";
import AgentSignup from "./components/Agent/Auth/agent_signup";
import { AgentLayout } from "./components/layout/AgentLayout";
import AdminDashboard from "./components/Agent/Pages/agent_dashboard";
import PropertyListingForm from "./components/Agent/Pages/AddNewListing/add_new_listing";
import Verification from "./components/Agent/Pages/Verification/verification";
import VerifyAsAgent from "./components/Agent/Pages/Verification/verify_as_agent";
import UploadUAEPassId from "./components/Agent/Pages/Verification/upload_uae_pass_id";
import Calendar from "./components/Agent/Pages/Calender/calender";
import AgentProfilePage from "./components/Agent/Pages/AgentProfile/agent_profile";
import EditProfile from "./components/Agent/Pages/AgentProfile/edit_profile";
import VerifyAgent from "./components/Agent/Pages/AgentProfile/verify_as_agent";
import UploadIdentification from "./components/Agent/Pages/AgentProfile/upload_identity";
import Listings from "./components/Agent/Pages/Listings/listings";
import BuyerRequirements from "./components/Agent/Pages/Requirments/requirments";
import ContactBuyer from "./components/Agent/Pages/Requirments/contact_buyer";
import Leads from "./components/Agent/Pages/Leads/leads";
import Message from "./components/Agent/Pages/Message/message";
import NotificationsPage from "./components/Agent/Pages/Notification/notification";
import Settings from "./components/Agent/Pages/Settings/settings";
import Subscription from "./components/Agent/Pages/Subscription/subscription";




function App() {
  return (

    <>
    
   <Toaster/>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<AgentSignIn/>}></Route>
         <Route path="/profession-login" element={<ProfessionSignIn/>}></Route>
         <Route path="/forget-password" element={<ForgetPassword/>}></Route>
         <Route path="/verify-otp" element={<VerifyOTP/>}></Route>
         <Route path="/change-password" element={<ChangePassword/>}></Route>
         <Route path="/user-signup" element={<UserSingup/>}></Route>
         <Route path="/brokerage-signup" element={<BrokerageSignup/>}></Route>
         <Route path="/agent-signup" element={<AgentSignup/>}></Route>
    
      {/* <Route element={<ProtectedRoute />}> */}
       {/* Admin Routes */}
        <Route path="/admin" element={<AgentLayout />}>
           <Route index element={<AdminDashboard />} />
            <Route path="add-new-listing" element={<PropertyListingForm />} />
           <Route path="verification" element={<Verification />} />
           <Route path="verification/verify-as-agent" element={<VerifyAsAgent />} />
           <Route path="verification/verify-as-agent/upload" element={<UploadUAEPassId />} />
           <Route path="agent-profile" element={<AgentProfilePage />} />
           <Route path="agent-profile/edit-profile" element={<EditProfile />} />
           <Route path="agent-profile/verify-agent" element={<VerifyAgent />} />
           <Route path="agent-profile/verify-agent/upload-identity" element={<UploadIdentification />} />
           <Route path="listings" element={<Listings />} />
           <Route path="requirments" element={<BuyerRequirements />} />
           <Route path="requirments/contact-buyer" element={<ContactBuyer />} />
           <Route path="leads" element={<Leads />} />
           <Route path="messages" element={<Message/>} />
           <Route path="subscription" element={<Subscription />} />
           <Route path="calender" element={<Calendar />} />
           <Route path="notification" element={<NotificationsPage/>} />
           <Route path="settings" element={<Settings />} />
    
    </Route>

      </Routes>
   
      
        
    </BrowserRouter>
</>
   
  );
}

export default App;
