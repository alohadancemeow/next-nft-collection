import React, { useRef, useLayoutEffect } from 'react'
import DrawSvg from './DrawSvg'

import { Card } from 'antd';

const { Meta } = Card;

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
  Text,
  ImageBox,
  CardWrapper
} from './styles'

// item's card
const RoadmapItems = ({ title, subtext, addToRef, image }) => (
  <Item ref={addToRef}>
    <CardWrapper>
      <Card
        hoverable
        // style={{ width: 500, height: 250 }}
        cover={
          <ImageBox
            preview={false}
            alt={title}
            src={image}
          />
        }
      >
        <Meta title={title} description={subtext} />
      </Card>
    </CardWrapper>
   
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
          y: '-65%',
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
          <RoadmapItems addToRef={addToRef} title='this is title 01' subtext='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum?' image='/images/image1.svg' />
          <RoadmapItems addToRef={addToRef} title='this is title 02' subtext='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum?' image='/images/image2.svg' />
          <RoadmapItems addToRef={addToRef} title='this is title 03' subtext='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum?' image='/images/image3.svg' />
          <RoadmapItems addToRef={addToRef} title='this is title 04' subtext='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum?' image='/images/image4.svg' />
          <RoadmapItems addToRef={addToRef} title='this is title 05' subtext='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum?' image='/images/image5.svg' />
        </Items>
      </Container>
    </Section>
  )
}

export default RoadmapSection