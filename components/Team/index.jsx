import React from 'react'
import { Image, Card } from 'antd'

const { Meta } = Card

import {
  Section,
  Title,
  Container,
  ImgContainer,
  Item
} from './styles'

import { ImageData } from '../Data'

// member component
const Member = ({ img, name, position }) => (
  <Item>
    <ImgContainer>
      <Card
        hoverable
        style={{ textAlign: 'center', borderRadius: '10px' }}
        cover={
          <div style={{ backgroundColor: '#25616b', borderRadius: '10px' }}>
            <Image
              preview={false}
              src={img}
              alt={name}
              style={{ transition: 'all .3s ease' }}
            />
          </div>
        }
      >
        <Meta title={name} description={position} />
      </Card>
    </ImgContainer>
  </Item>
)

const TeamSection = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Container>
        {ImageData.map(item => (
          <Member key={item.id} img={item.src} name={item.name} position={`Emplayee ${item.id}`} />
        ))}
      </Container>
    </Section>
  )
}

export default TeamSection