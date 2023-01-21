import React from "react";
import styled from "styled-components";
import Photo from './components/gymClass.jpg'
function Card2(){
    return(
        <Container>
            <Image src={Photo} />

            <Message>
                <MessageHeading>
                    WHY FITT?
                </MessageHeading>
                <MessageText>
                     Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.
                     </MessageText>
                <MessageText>
                    Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits. Only a few lifestyle choices have as large an impact on your health as physical activity.
                </MessageText>
                <MessageText>
                    Everyone can experience the health benefits of physical activity - age, abilities, ethnicity, shape, or size do not matter.
                </MessageText>
            </Message>
        </Container>
    )
}


const Container= styled.div`
display:flex;
margin : 8em;
margin-top:0.5em ;
margin-bottom: 1em ;
`;
const Message=styled.div`
padding:2em;
width:45em ;
background-color:white ;
color: #2D2D2D;
text-align: left ;
line-height: 1.8em ;
`;
const Image=styled.img`
width:39em ;
`;
const MessageHeading=styled.p`
font-size:2em;
font-weight: bold ;
color:#FF4A38 ;
`;
const MessageText=styled.p`
font-size:1em;

padding-bottom:2em ;
`;
export default Card2;