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

export const Container = styled.div`
    width: 75%;
    /* height: 100px; */
    margin: 3rem auto;
    /* padding: 1rem 0; */
    border-bottom: 1px solid ${({ theme }) => theme.textColors.text};

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SocialIcons = styled.div`
   display: flex;
   align-items: center;
   margin: 2rem auto;

   &>*{
    padding-right: 0.5rem;
    transition: all .2s ease;

    &:hover {
        transform: scale(1.2);
    }
   }
`

export const MenuItems = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: .5rem;
    margin-bottom: 1rem;

    width: 30%;
`

export const Item = styled.li`
    width: fit-content;
    list-style: none;
    cursor: pointer;
   
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

export const Bottom = styled.div`
    width: 75%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
        letter-spacing: 2px;
        color: blueviolet;
    }
`
