import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from '../Button'

const TypeWriterText = () => {
    return (
        <div>
            <Header>Discover a new ara of cool</Header>
            <Title>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(`<span class="text-1">NFTs.</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-2">Collectible Items.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-3">Alohadancemeow.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />

            </Title>
            <Subtitle>Lorem ipsum, dolor sit adipisicing elit.</Subtitle>
            <ButtonWrapper>
                <Button text='Explore' link='#about' />
            </ButtonWrapper>
        </div>
    )
}

export default TypeWriterText

// # Styles here.
const Title = styled.h2`
    font-size: ${({ theme }) => theme.fonts.xxl};
    text-transform: uppercase;
    width: 80%;
    color: ${({ theme }) => theme.textColors.text};
    align-self: flex-start;
    line-height: 50px;
    margin: 10px 0;

    span {
        text-transform: uppercase;
        font-family: 'Akaya Telivigala', cursive;

        &.text-1 {
            color: blue;
        }
        &.text-2 {
            color: orange;
        }
        &.text-3 {
            color: red;
        }
    }
`

const Header = styled.h2`
    letter-spacing: 5px;
    line-height: 45px;
    font-size: ${({ theme }) => theme.fonts.xxl};
    font-weight: 600;
    text-transform: uppercase;
`

const Subtitle = styled.h3`
    font-size: ${({ theme }) => theme.fonts.lg};
    text-transform: capitalize;
    color: ${({ theme }) => `rgba(${theme.textColors.textRgba}, 0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;
`

const ButtonWrapper = styled.div`
    width: 80%;
    align-self: flex-start;
`