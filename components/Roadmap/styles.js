import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.textColors.body};
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fonts.xxl};
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColors.text};
    margin: 1rem auto;
    border-bottom: 2px solid ${({ theme }) => theme.textColors.text};
    width: fit-content;
    line-height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 70%;
    height: 200vh;
    background-color: ${({ theme }) => theme.textColors.body};
    margin: 0 auto;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`