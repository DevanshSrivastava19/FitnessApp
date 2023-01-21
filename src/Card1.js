import React from "react";
import styled from "styled-components";
import Photo from './components/RunningMan.jpg'
function Card1(){
    return(
        <Container>
            <Message>
                <MessageText>
                    GET STARTED ON YOUR FITNESS JOURNEY
                </MessageText>
            </Message>
            <Image src={Photo} />
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
width:44em ;
background-color:#FF4A38 ;
color:white;
text-align: centre ;
`;
const Image=styled.img`
width:40em ;
`;
const MessageText=styled.p`
font-size:5em;
font-weight: bold ;
`;
export default Card1;