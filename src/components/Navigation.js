import React from "react";
import styled from "styled-components";

function Navigation(){
    return(
        <div>
            <List>
                <ListItem><Tag class="active" href="#home">Assisted Workout</Tag></ListItem>
                <ListItem><Tag href="#news">Home Workout</Tag></ListItem>
                <ListItem><Tag href="#contact">Health tips</Tag></ListItem>
                <ListItem><Tag href="#about">Diet Plan</Tag></ListItem>
            </List>
        </div>
    )
}

const List= styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em;
  padding-right:0em ;
  overflow: hidden;
  background-color: #FFFFFF;

`;
const ListItem= styled.li`
    float: left;
`;
const Tag=styled.a`
  display: block;
  color: black;
  text-align: center;
  padding: 0.5em 0.6em;
  text-decoration: none;
`;  

export default Navigation;