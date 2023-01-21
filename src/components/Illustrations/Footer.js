import React from "react";
import styled from "styled-components";
function Footer(){
    return(<Container>
            <Container1>
                <Heading>Contact</Heading>
                <Address></Address>
            </Container1>
            <Container2>
                <Heading>BlogPosts</Heading>
                <List>
                    <ListItem><a href="#abc">Daily Tips</a></ListItem>
                    <ListItem><a href="#abc">Daily Tips</a></ListItem>
                    <ListItem><a href="#abc">Daily Tips</a></ListItem>
                </List>
            </Container2>
            <Container3><Heading>NewsLetter</Heading><input type="email" value="type email here"/><input type="button" value="Sign up"/></Container3>
    </Container>)
}
const Container=styled.div`
    display:flex;
    justify-content: space-evenly ;
`;
const Container1=styled.div`

`;
const Container2=styled.div`

`;
const Container3=styled.div`

`;
const Heading=styled.p`
 font-size:1.2em ;
 color:#FF4A38;
 font-weight: bold ;
`;
const List=styled.ul`
text-decoration:none;
`;
const ListItem=styled.li`
    text-decoration:none ;
`;
const Address=styled.p`
`;

export default Footer;