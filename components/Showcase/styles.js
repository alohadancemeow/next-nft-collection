import styled, { keyframes } from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.textColors.text};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &>*:first-child {
        animation-duration: 30s;
    }
    &>*:last-child {
        animation-duration: 25s;
    }
`

const move = keyframes`
    0% { transform: translateX(100%)}
    100% { transform: translateX(-100%)}
`

export const Row = styled.div`
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;

    display: flex;
    animation: ${move} linear infinite ${({ direction }) => direction};
`

export const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    /* background-color: ${({ theme }) => theme.textColors.body}; */
    /* border-radius: 20px; */
    cursor: pointer;

    &.ant-image-img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`
