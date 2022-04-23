import styled, { keyframes } from "styled-components";
import { Image } from 'antd'


export const Section = styled.section`
    min-height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
    width: 100vw;
    position: relative;
    background-color: ${({ theme }) => theme.textColors.body};
`

export const Container = styled.div`
    width: 75%;
    min-height: 80vh;
    margin: 0 auto;
    /* background-color: lightblue; */

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.textColors.text};
`

// animation
const rotate = keyframes`
    100% {
        transform: rotate(1turn);
    }
`

export const ImageBox = styled(Image)`
    &.ant-image-img {
        width: 100%;
        height: auto;
        animation: ${rotate} 6s linear infinite reverse;
    }
`

export const Circle = styled.span`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.textColors.text};
    color: ${({ theme }) => theme.textColors.body};
    font-size: ${({ theme }) => theme.fonts.xl};

    position: absolute;
    /* top: 50%; */
    top: 25%;
    left: 50%;
    transform: translate(-50%);
`

