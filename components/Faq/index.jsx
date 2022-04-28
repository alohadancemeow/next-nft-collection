import React from 'react'
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
    return (
        <Section>
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