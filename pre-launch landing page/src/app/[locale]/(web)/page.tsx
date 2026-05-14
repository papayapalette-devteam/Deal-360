
"use client"

import dynamic from "next/dynamic";


import SmarterFilters from '@/components/web/SmarterFilters'

// const SmarterFilters = dynamic(() => import("@/components/web/SmarterFilters"), {
//   ssr: false,
// });


import WhatsComing from '@/components/web/WhatsComing'
import HeroSection from '@/components/web/HeroSection'

// const HeroSection = dynamic(() => import("@/components/web/HeroSection"), {
//   ssr: false,
// });
import StartWithRequirements from '@/components/web/startwith_requirments'

// const StartWithRequirements = dynamic(() => import("@/components/web/startwith_requirments"), {
//   ssr: false,
// });
import ForAgents from '@/components/web/for_agents'
import ForBrockerage from '@/components/web/for_brokerage'
import RealstateWork from '@/components/web/realstatework'
import EarlyAccessProgram from '@/components/web/early_access_program'
import Pricing from '@/components/web/pricing'
import PricingGlowWrapper from '@/components/web/price'
import ConnectionVerification from '@/components/web/ConnectionVerification'
import Rewards from '@/components/web/rewards'
import RewardsCard from '@/components/web/rewards_card'

export default function Home() {
  return (
    <div className="bg-[#EDEEF0] overflow-x-hidden dark:bg-black font-[Poppins]">

      {/* Requirements / Hero */}
      <section id="hero">
        {/* <HeroSection /> */}
        <HeroSection />
      </section>

      <WhatsComing />

      <StartWithRequirements />

      <ConnectionVerification />

      <section id="agent">
        <ForAgents />
      </section>

      <section id="brokerage">
        <ForBrockerage />
      </section>

      <SmarterFilters />

      <RealstateWork />

      <EarlyAccessProgram />

      <section id="plan">
      <Pricing />
      </section>

      <PricingGlowWrapper />

      <Rewards />

      <RewardsCard />


  
    </div>
  )
}
