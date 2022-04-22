import styled from "styled-components";

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