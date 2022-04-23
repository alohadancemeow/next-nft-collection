import React from 'react'

import TypeWriterText from './TypeWriterText'
import CoverVideo from './CoverVideo'

import {
  Section,
  Container,
  Box,
  Round,
  ImageBox,
  Circle
} from './styles'

const HomeSection = () => {
  return (
    <Section>
      <Container>
        <Box>
          <TypeWriterText />
        </Box>

        <Box>
          <CoverVideo />
        </Box>

        <Round>
          <Circle>&#x2193;</Circle>
          <ImageBox
            src='/Rounded-Text-Black.png'
            alt='image'
            preview={false}
          />
        </Round>

      </Container>
    </Section>
  )
}

export default HomeSection