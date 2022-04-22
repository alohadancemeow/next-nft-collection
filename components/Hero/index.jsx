import React from 'react'

import TypeWriterText from './TypeWriterText'
import CoverVideo from './CoverVideo'

import {
  Section,
  Container,
  Box,
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
      </Container>
    </Section>
  )
}

export default HomeSection