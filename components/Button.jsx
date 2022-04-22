import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Button = ({ text, link }) => {
    return (
        <MyButton>
            <Link href={link}>
                <a >{text}</a>
            </Link>
        </MyButton>
    )
}

export default Button

const MyButton = styled.button` 
    display: inline-block;
    background-color: ${({ theme }) => theme.textColors.text};
    color: ${({ theme }) => theme.textColors.body};
    font-size: ${({ theme }) => theme.fonts.sm};
    padding: 0.7rem 2.3rem;
    outline: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all .2s ease;
    position: relative;
    text-transform: capitalize;

    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${({ theme }) => theme.textColors.text};
        border-radius: 50px;
        width: 90%;
        height: 100%;
        transition: all .2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1.2);
        padding: 0.3rem;
    }
`