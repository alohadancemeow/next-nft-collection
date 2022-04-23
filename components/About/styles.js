import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.textColors.text};
    /* color: ${({ theme }) => theme.textColors.body}; */

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Container = styled.div`
    width: 75%;
    margin: 0 auto;

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

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fonts.xxl};
    text-transform: capitalize;
    width: 80%;
    color: ${({ theme }) => theme.textColors.body};
    align-self: flex-start;
    line-height: 50px;
    margin: 0 auto;
`

export const Subtitle = styled.p`
    font-size: ${({ theme }) => theme.fonts.lg};
    width: 80%;
    color: ${({ theme }) => theme.textColors.body};
    align-self: flex-start;
    margin: 1rem auto;
`

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fonts.md};
    width: 80%;
    color: ${({ theme }) => `rgba(${theme.textColors.bodyRgba} , 0.6)`};
    align-self: flex-start;
    margin: 1rem auto;
`

export const ButtonWrapper = styled.div`
    width: 80%;
    align-self: flex-start;
    margin: 1rem auto;
`