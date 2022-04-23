import React from 'react'
import { ThemeProvider } from 'styled-components'

import Carousel from './Carousel'
import Button from '../Button'
import { darkMode } from '../../pages/_app'

import {
  Section,
  Container,
  Box,
  Title,
  Subtitle,
  Paragraph,
  ButtonWrapper
} from './styles'

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <Box><Carousel /></Box>
        <Box>
          <Title>Lorem, ipsum.</Title>
          <Subtitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum?</Subtitle>
          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit fugiat alias accusantium, laboriosam labore eaque.</Paragraph>

          <ButtonWrapper>
            <ThemeProvider theme={darkMode}>
              <Button text='Join us' link='#' />
            </ThemeProvider>
          </ButtonWrapper>
          
        </Box>
      </Container>
    </Section>
  )
}

export default AboutSection