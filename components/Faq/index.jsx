import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { Collapse } from 'antd';
const { Panel } = Collapse;

import {
    Section,
    Title,
    Container,
    Box,
    StyledCollapse,
} from './styles'

const FaqSection = () => {

    const ref = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let element = ref.current
        // console.log(element);

        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
            // markers: true
        })

        return () => ScrollTrigger.clearScrollMemory()
    }, [])

    return (
        <Section ref={ref}>
            <Title>FAQ</Title>
            <Container>
                <Box>
                    <StyledCollapse defaultActiveKey={['1']} ghost>
                        <Panel header="This is panel header 1" key="1" >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsam?</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsam?</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsam?</p>
                        </Panel>
                    </StyledCollapse>
                </Box>
                <Box>
                    <StyledCollapse ghost>
                        <Panel header="This is panel header 1" key="1">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsam?</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsam?</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsam?</p>
                        </Panel>
                    </StyledCollapse>
                </Box>
            </Container>
        </Section>
    )
}

export default FaqSection