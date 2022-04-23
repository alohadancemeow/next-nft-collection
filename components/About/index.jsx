import React from 'react'

import Carousel from './Carousel'

import {
  Section,
  Container,
  Box,
} from './styles'

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <Box><Carousel /></Box>
        <Box>Text</Box>
      </Container>
    </Section>
  )
}

export default AboutSection