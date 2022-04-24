import React, { useRef, useLayoutEffect } from 'react'
import DrawSvg from './DrawSvg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import {
  Section,
  Title,
  Container,
  SvgContainer,
  Items,
  Item,
  ItemContainer,
  Box,
  Subtitle,
  Text
} from './styles'

// item's card
const RoadmapItems = ({ title, subtext, addToRef }) => (
  <Item ref={addToRef}>
    <ItemContainer>
      <Box>
        <Subtitle>{title}</Subtitle>
        <Text>{subtext}</Text>
      </Box>
    </ItemContainer>
  </Item>
)

const RoadmapSection = () => {

  // gsap
  gsap.registerPlugin(ScrollTrigger)

  // useRef
  const revealRef = useRef([])
  revealRef.current = []

  const addToRef = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el)
    }
  }

  // llayout effect
  useLayoutEffect(() => {
    // console.log(revealRef);

    let timeline = gsap.timeline()

    revealRef.current.forEach((el, index) => {
      timeline.fromTo(el.childNodes[0],
        { y: '0' },
        {
          y: '-30%',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers: true
          }
        }
      )
    })

    return () => {
      if (timeline) timeline.kill()
    };
  }, [])

  return (
    <Section>
      <Title>Roadmap</Title>

      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadmapItems addToRef={addToRef} title='this is title1' subtext='this is subtle' />
          <RoadmapItems addToRef={addToRef} title='this is title2' subtext='this is subtle' />
          <RoadmapItems addToRef={addToRef} title='this is title3' subtext='this is subtle' />
          <RoadmapItems addToRef={addToRef} title='this is title4' subtext='this is subtle' />
          <RoadmapItems addToRef={addToRef} title='this is title5' subtext='this is subtle' />
        </Items>
      </Container>
    </Section>
  )
}

export default RoadmapSection