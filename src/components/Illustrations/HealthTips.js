import React from "react";
import styled from "styled-components";
import Plank from "../ImagePlank.jpg";
import Squats from "../ImageSquats.jpg";
function HealthTips(){
    return(
        <Container>
            <Heading>
                Some Healt tips;
            </Heading>
            <WorkoutCard>
                <WorkoutImage src={Plank} />
                <DescriptionCard><WorkoutHeading>Plank</WorkoutHeading>
                    <WorkoutDiscription>this is a para about plank</WorkoutDiscription>
                </DescriptionCard>
                
            </WorkoutCard>
            <WorkoutCard>
            <WorkoutImage src={Squats} />
                <DescriptionCard><WorkoutHeading>Squats</WorkoutHeading>
                    <WorkoutDiscription>this is a para about plank</WorkoutDiscription>
                </DescriptionCard>
            </WorkoutCard>
        </Container>
    );
};

const Container=styled.div`
    background-color:#FF4A38 ;
    padding:8.5em;
    
`;
const Heading=styled.p`
font-size: 2em ;
color:white;
font-weight:bold ;

`;
const WorkoutCard=styled.div`
padding:4em;
padding-top:1em;
display:flex ;
text-align:center ;
background-color: white ;
margin-bottom:2em ;
border-radius:1em ;
`;
const DescriptionCard=styled.div`
width:25em;`;
const WorkoutImage=styled.img`
width:25em;`
const WorkoutDiscription=styled.p`
`
const WorkoutHeading=styled.p`
color:#FF4A38;
font-size:2.5em;
font-weight:bold;
`;
export default HealthTips;