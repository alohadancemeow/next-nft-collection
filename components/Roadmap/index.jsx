import React from 'react'
import DrawSvg from './DrawSvg'

import {
  Section,
  Title,
  Container,
  SvgContainer,
} from './styles'

const RoadmapSection = () => {
  return (
    <Section>
      <Title>Roadmap</Title>

      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
      </Container>
    </Section>
  )
}

export default RoadmapSection