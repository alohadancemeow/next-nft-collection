import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd'
import { ThemeProvider } from 'styled-components'
import { darkMode } from '../../pages/_app'

import { ImageData } from '../Data'
import Button from '../Button'

const Banner = () => {
    return (
        <Section>
            <ImgContainer>
                {ImageData.slice(0, 5).map(item => (
                    <Image
                        src={item.src}
                        alt={item.name}
                        preview={false}
                    />
                ))}
            </ImgContainer>
            <Title>Join our Discord</Title>

            <ThemeProvider theme={darkMode}>
                <Button text='Join now' link='#' size='big' />
            </ThemeProvider>
        </Section>
    )
}

export default Banner


// styles here.
const Section = styled.section`
    width: 100vw;
    height: 35rem;
    position: relative;
    /* border-top: 2px solid ${({ theme }) => theme.textColors.text};
    border-bottom: 2px solid ${({ theme }) => theme.textColors.text}; */
    background-color: ${({ theme }) => `rgba(${theme.textColors.textRgba}, 0.9)`};
    overflow: hidden;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ImgContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;

    display: flex;
    justify-content: center;
    align-items: center;

    &.ant-image-img {
        width: 100%;
        height: auto;
    }
`

const Title = styled.h1`
    font-size: ${({ theme }) => theme.fonts.xxxl};
    color: ${({ theme }) => theme.textColors.body};
    padding: 1rem 2rem;
    line-height: 60px;
    font-weight: bold;
    z-index: 10;
    width: 35%;
`