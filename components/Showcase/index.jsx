import React, { useRef } from 'react'
import { Image, Card } from 'antd'

const { Meta } = Card

import {
    Section,
    Row,
    ImgContainer
} from './styles'

import { ImageData } from '../Data'

// Item component
const NftItems = ({ img, name, price, passRef }) => {

    const play = () => passRef.current.style.animationPlayState = 'running'
    const paused = () => passRef.current.style.animationPlayState = 'paused'

    return (
        <ImgContainer
            onMouseOver={paused}
            onMouseOut={play}
        >
            <Card
                hoverable
                style={{ borderRadius: '20px', textAlign: 'center' }}
                cover={
                    <Image
                        preview={false}
                        src={img}
                        alt={name}
                    />
                }
            >
                <Meta title={name} description={`$ ${price}`} />
            </Card>

        </ImgContainer>
    )
}

const ShowcaseSection = () => {

    const rowRef1 = useRef(null)
    const rowRef2 = useRef(null)

    return (
        <Section>
            <Row direction='none' ref={rowRef1}>
                {ImageData.map(item => (
                    <NftItems key={item.id} img={item.src} name={item.name} price={item.price} passRef={rowRef1} />
                ))}
            </Row>
            <Row direction='reverse' ref={rowRef2}>
                {ImageData.map(item => (
                    <NftItems key={item.id} img={item.src} name={item.name} price={item.price} passRef={rowRef2} />
                ))}
            </Row>
        </Section>
    )
}

export default ShowcaseSection