import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 16.25rem;  
    min-height: 12rem;
    height: fit-content;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 15px;
    background: ${props => props.color ? props.color : 'white'};
    margin: 2rem 1rem;
    border-radius: 1rem;
    transition: all 0.3s ease-out 0s;

    &:hover {
        box-shadow:  ${props => props.color ? props.color : '#ee9900'} 0px 5px 15px;
        cursor: ${props => props.pointer? 'pointer' : 'default'};
        transform: translateY(-10px);
  }
`

const Card = (props) => {
    return (
        <Container pointer={props.pointer} color={props.color}>
            {props.children}
        </Container>
    )
}

export default Card;