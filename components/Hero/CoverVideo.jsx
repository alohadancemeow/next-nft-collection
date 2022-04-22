import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd'

const CoverVideo = () => {
    return (
        <VideoContainer>
            <ImageBox
                src="/demo.gif"
                // src='/Home-GIF.gif'
                alt='image'
                preview={false}
            />
        </VideoContainer>
    )
}

export default CoverVideo

// # Styles here.
const VideoContainer = styled.div`
    width: 100%;
`

const ImageBox = styled(Image)`
    position: relative;
    margin-bottom: 10px;
    
    &.ant-image-img {
        width: 580px;
        height: 675px;
        object-fit: cover;
    }
`