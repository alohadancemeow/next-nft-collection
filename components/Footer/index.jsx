import React from 'react'
import Link from 'next/link'

import { FacebookFilled, TwitterSquareFilled, LinkedinFilled, BehanceSquareFilled } from '@ant-design/icons'

import Banner from './Banner'
import { Logo } from '../Nav/styles'
import {
    Section,
    Container,
    Left,
    SocialIcons,
    MenuItems,
    Item,
    Bottom,
} from './styles'

const Footer = () => {
    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                    <Link href="/">
                        <a>
                            <Logo>A.</Logo>
                        </a>
                    </Link>

                    <SocialIcons>
                        <Link href="/">
                            <a><FacebookFilled style={{ fontSize: '25px' }} /></a>
                        </Link>
                        <Link href="/">
                            <a><TwitterSquareFilled style={{ fontSize: '25px' }} /></a>
                        </Link>
                        <Link href="/">
                            <a><LinkedinFilled style={{ fontSize: '25px' }} /></a>
                        </Link>
                        <Link href="/">
                            <a><BehanceSquareFilled style={{ fontSize: '25px' }} /></a>
                        </Link>
                    </SocialIcons>
                </Left>

                <MenuItems>
                    <Item>home</Item>
                    <Item>about</Item>
                    <Item>roadmap</Item>
                    <Item>showcase</Item>
                    <Item>team</Item>
                    <Item>faq</Item>
                </MenuItems>
            </Container>

            <Bottom>
                <span>&copy; {new Date().getFullYear()}</span>
                <span> ✌️ made by <a>@alohadancemeow</a></span>
            </Bottom>
        </Section>
    )
}

export default Footer