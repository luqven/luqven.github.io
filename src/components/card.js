import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 16.25rem;  
    height: 12rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 15px;
    padding: 1rem;
    margin: 2rem 1rem;
    border-radius: 1rem;
    transition: box-shadow 0.3s ease-out 0s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.30) 0px 5px 15px;
        cursor: ${props => props.pointer? 'pointer' : 'default'};
  }
`

const Card = (props) => {
    return (
        <Container pointer={props.pointer}>
            {props.children}
        </Container>
    )
}

export default Card;