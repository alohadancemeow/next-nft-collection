import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.textColors.body};
    position: relative;
    color: ${({ theme }) => theme.textColors.text};

    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
`