import React from "react"
import styled from "styled-components"

import AnimatedShare from "../components/animated-share"

const ExperienceBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Experience = ({ title, linkTo, body }) => {
  return (
    <ExperienceBlock>
      <a href={linkTo}>
        <h3 style={{ display: "flex", flexDirection: "row" }}>
          {title}
          <div style={{ marginTop: "-15px" }}>
            <AnimatedShare />
          </div>
        </h3>
      </a>
      <p>{body}</p>
    </ExperienceBlock>
  )
}

const WorkExperience = () => {
  return (
    <>
      <Experience
        title="Envizzo Furniture Marketplace"
        linkTo="https://www.envizzo.com/"
        body="Built features for platform that offered design solutions for office and residential spaces."
        imageAlt="envizzo-marketplace"
        imageUrl="https://i.imgur.com/ie8ckl1.png"
        left
      />
      <Experience
        title="Adelaide attention tracker"
        linkTo="https://adelaidelift.com/"
        cardBackground="rgba(209,25,29,1)"
        body="Enhanced advertising tools that evaluate the quality of media by tracking user attention."
        imageAlt="adelaide-tracker-portal"
        imageUrl="https://i.imgur.com/Lrc5BaL.png"
        left
      />
      <Experience
        title="PanAm Post"
        linkTo="http://panampost.com/"
        cardBackground="rgb(45, 84, 215)"
        body="Managed the engineering at this multilingual news outlet that covers life, politics, and economics in the Americas."
        imageAlt="PanAm-post-mobile"
        imageUrl="https://i.imgur.com/s6mleSF.jpg"
        left
      />
    </>
  )
}

export default WorkExperience
