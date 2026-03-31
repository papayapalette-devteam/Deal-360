import Header from "@/components/Layout/Header";
import HeroSection from "@/components/LandingPage/HeroSection";
import LaunchingSection from "@/components/LandingPage/ConnectionVerification";
import WhatIsComing from "@/components/LandingPage/what's_coming";
import Image from "next/image";
import Protal from "@/components/LandingPage/startwith_requirments";
import Requirment from "@/components/LandingPage/requirments";
import Verification from "@/components/LandingPage/realstatework";
import ForAgents from "@/components/LandingPage/for_agents";
import ForBrockerage from "@/components/LandingPage/for_brokerage";
import SmartFilter from "@/components/LandingPage/smart_filter";
import BuySellControll from "@/components/LandingPage/buy_sell_controll";
import PropertyManager from "@/components/LandingPage/property_manager";
import NotaPortal from "@/components/LandingPage/not_portal";
import EarlyAccessProgram from "@/components/LandingPage/early_access_program";
import Pricing from "@/components/LandingPage/pricing";
import AgentPricingSection from "@/components/LandingPage/agent_pricingcard";
import BrokeragePricingSection from "@/components/LandingPage/brokerage_pricingcard";
import PricingGlowWrapper from "@/components/LandingPage/price";
import Rewards from "@/components/LandingPage/rewards";
import RewardsCard from "@/components/LandingPage/rewards_card";
import Footer from "@/components/Layout/Footer";
import ConnectionVerification from "@/components/LandingPage/ConnectionVerification";
import RealstateWork from "@/components/LandingPage/realstatework";
import StartWithRequirements from "@/components/LandingPage/startwith_requirments";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-theme text-theme">
       <main className="w-full min-h-screen bg-theme">
      <Header/>
      <HeroSection/>
      <WhatIsComing/>
      <StartWithRequirements/>
      <ConnectionVerification/>
      
      {/* <Protal/> */}
      {/* <Requirment/> */}
      <ForAgents/>
      <ForBrockerage/>
      {/* <SmartFilter/> */}
      {/* <BuySellControll/> */}
      {/* <PropertyManager/> */}
      {/* <NotaPortal/> */}
        <RealstateWork/>
      <EarlyAccessProgram/>
      <Pricing/>
      <PricingGlowWrapper/>
      <Rewards/>
      <RewardsCard/>
      <Footer/>
    </main>
    </div>
  );
}
