import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    background-color: ${({ theme }) => theme.textColors.body};
`

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 85%;
    height: ${({ theme }) => theme.navHeight};
    margin: 0 auto;
`

export const Logo = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${({ theme }) => theme.fonts.xxxl};
    color: ${({ theme }) => theme.textColors.text};
    transition: all .2s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`

export const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${({ theme }) => theme.textColors.text};
    cursor: pointer;
    text-transform: capitalize;

    &::after {
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background: ${({ theme }) => theme.textColors.text};
        transition: width .3s ease;
    }

    &:hover::after{
        width: 100%;
    }
`