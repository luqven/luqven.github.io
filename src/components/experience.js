import React from 'react'
import styled from "styled-components"

import Card from "../components/card"

const CardText = styled.p`
    max-width: 200px;
    padding-top: 50px;
`;

const ExperienceBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Experience = ({ title, body, imageAlt, imageUrl, cardBackground, left=false}) => {
    return (
        <ExperienceBlock>
            <h3>{title}</h3>
            <CardContainer>
                {left ? <Card color={cardBackground}><img alt={imageAlt} src={imageUrl} /></Card> : null}
                <CardText>{body}</CardText>
                {!left ? <Card color={cardBackground}><img alt={imageAlt} src={imageUrl} /></Card> : null}
            </CardContainer>
        </ExperienceBlock>
    )
}

const WorkExperience  = () => {
    return (
        <>
            <Experience
                title={"Envizzo Furniture Marketplace"}
                body={"Built features for platform that offered design solutions for office and residential spaces."}
                imageAlt={"envizzo-marketplace"}
                imageUrl={"https://i.imgur.com/ie8ckl1.png"}
                left
            />
            <Experience
                title="Adelaide attention tracker"
                cardBackground="rgba(209,25,29,1)"
                body="Enhanced advertising tools that evaluate the quality of media by tracking user attention."
                imageAlt="adelaide-tracker-portal"
                imageUrl="https://i.imgur.com/Lrc5BaL.png"
            />
            <Experience
                title={"PanAm Post"}
                cardBackground="rgb(45, 84, 215)"
                body={"Designed and managed multilingual news outlet that covers life, politics, and economics in the Americas."}
                imageAlt={"PanAm-post-mobile"}
                imageUrl={"https://i.imgur.com/s6mleSF.jpg"}
                left
            />
        </>
    )
}

export default WorkExperience;
