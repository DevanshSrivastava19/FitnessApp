import React from "react";
import styled from "styled-components";
import Kate from './components/trainer1.webp';
import Clark from './components/trainer2.webp';
import Jimmy from './components/trainer3.webp';
function AssistedServices(){
return (
    <Container>
        <TeamHeading>Workout Experts</TeamHeading>
        <TeamProfileContainer>
            <TeamDetailCard>
                <ProfileImage src={Kate}/>
            </TeamDetailCard>
            <TeamDetailCard>
                <ProfileImage src={Clark}/>
            </TeamDetailCard>
            <TeamDetailCard>
                <ProfileImage src={Jimmy}/>
            </TeamDetailCard>
        </TeamProfileContainer>
        <ButtonContainer><Button href="#AssitedWorkout">Take me there</Button></ButtonContainer>
    </Container>
)
}
const Container=styled.div`
padding:8em;
border-color:#cccccc ;
`;
const TeamHeading=styled.p`
font-size:3em;
color:#FF4A38;
font-weight: bold ;
`;

const TeamProfileContainer=styled.div`
    display: flex ;
    justify-content: space-between ;
`;
const TeamDetailCard=styled.div`
padding:1em;

`;
const ProfileImage=styled.img`
height: 35.0625em;
`;
const ButtonContainer=styled.span`
background-color:#FF4A38;
padding:1em ;
margin:1em;
border-radius:10px ;
`;
const Button=styled.a`
text-decoration: none ;
padding:1em;
color:white;
font-weight: bold ;
`;


export default AssistedServices;