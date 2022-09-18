import React from "react";
import {
  HeroSection,
    About,
    Features,
    TopNfts,
    Roadmap,
    Team,
    Contact
} from '../container/HomeContainer/index'
const Home = () => {
  return (<>
  
  <div>
    <HeroSection/>
    <About/>
    <Features/>
    <TopNfts/>
    <Roadmap/>
    <Team/>
    <Contact/>
  </div>
  </>);
};

export default Home;
