import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Button = ({ text, link, size }) => {
    return (
        <Link href={link}>
            <a>
                <MyButton size={size}>{text}</MyButton>
            </a>
        </Link>
    )
}

export default Button

const MyButton = styled.button` 
    display: inline-block;
    background-color: ${({ theme }) => theme.textColors.text};
    color: ${({ theme }) => theme.textColors.body};
    font-size: ${({ theme, size }) => size == 'big' ? theme.fonts.lg : theme.fonts.sm};
    font-weight: ${({ size }) => size == 'big' ? 600 : 400};
    padding: ${({ size }) => size == 'big' ? '1.5rem 3rem' : '0.7rem 2.3rem'};
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