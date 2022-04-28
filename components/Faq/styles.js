import styled from "styled-components";
import { Collapse } from 'antd';

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.textColors.text};
    position: relative;
    color: ${({ theme }) => theme.textColors.body};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fonts.xxl};
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColors.body};
    margin: 1rem auto;
    border-bottom: 2px solid ${({ theme }) => theme.textColors.body};
    width: fit-content;
    line-height: 60px;
`

export const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: center;
    /* align-items: center; */
    
    &.ant-collapse-header {
        color: ${({ theme }) => theme.textColors.body} !important;
    }

    `

export const Box = styled.div`
    width: 45%;
    margin: 1rem;
`

export const StyledCollapse = styled(Collapse)`

    &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
        color: ${({ theme }) => theme.textColors.body} !important;
        border-bottom: 1px solid ${({ theme }) => theme.textColors.body};
        margin: 2rem 0;
    }
    &.ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content {
        color: ${({ theme }) => `rgba(${theme.textColors.bodyRgba} , 0.6)`} !important;
    }
`