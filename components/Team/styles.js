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
`

export const Container = styled.div`
    width: 80%;
    margin: 2rem auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 auto;
    /* background-color: ${({ theme }) => theme.textColors.carouselColor}; */
    /* border-radius: 20px; */
    cursor: pointer;
    
    &.ant-image-img {    
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

export const Item = styled.div`
    width: calc(20rem - 4vw);
    /* padding: 1rem 0; */
    color: ${({ theme }) => theme.textColors.body};
    margin: 2rem 1rem;
    position: relative;

    &:hover {
        img {
            transform: translateY(-2rem) scale(1.2);
        }
    }
`

