import React from "react";
import styled from "styled-components";
import Card1 from "../Card1";
import Card2 from "../Card2";
import HealthTips from "../components/Illustrations/HealthTips";
import HomeWorkout from "../components/Illustrations/HomeWorkout";
import Services from "../Services";
function HomePage(){
    return(<HomePageContainer>
        <Card1/>
      <Card2 />
      <Services />
      <HomeWorkout/>
      <HealthTips/>
    </HomePageContainer>

    );
};

const HomePageContainer=styled.div`
    text-align: center;
  background-color: #FFFFFF;`;


export default HomePage;