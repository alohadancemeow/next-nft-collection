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

export const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    /* background-color: aliceblue; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>*:nth-of-type(2n +1) {
        justify-content: start;
    }
    &>*:nth-of-type(2n) {
        justify-content: end;
    }
`

export const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
`

export const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${({ theme }) => theme.textColors.text};
`

export const Box = styled.p`
    height: fit-content;
    padding: 1rem;
    position: relative;
    color: ${({ theme }) => theme.textColors.text};
    background-color: ${({ theme }) => theme.textColors.carouselColor};
    border: 1px solid ${({ theme }) => theme.textColors.text};
`

export const Subtitle = styled.span`
    display: block;
    font-size: ${({ theme }) => theme.fonts.xl};
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColors.text};
`

export const Text = styled.span`
    display: block;
    margin: 0.5rem 0;
    font-size: ${({ theme }) => theme.fonts.sm};
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColors.text};
    font-weight: 400;
`