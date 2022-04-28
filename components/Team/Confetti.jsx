import React, { useState, useEffect } from 'react'

import { useWindowSize } from '@react-hook/window-size'
import Confetti from 'react-confetti'

const ConfettiBox = () => {

    const [width, height] = useWindowSize()
    const [w, setW] = useState()
    const [h, setH] = useState()
    // console.log(`w--> ${w},  h--> ${h}`);

    useEffect(() => {
        setW(width)
        setH(height)
    }, [width, height])

    return (
        <>
            {w && h &&
                <Confetti
                    width={w}
                    height={h * 1.5}
                    gravity={0.02}
                    numberOfPieces={150}
                />
            }
        </>
    )
}

export default ConfettiBox