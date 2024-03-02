import React, { useEffect, useState } from 'react'

const useScreenSize = () => {

    const [screen, setScreen] = useState(window.innerWidth);
    const handleScreenSize = () => {
        setScreen(window.innerWidth);
    }
    useEffect(()=> {
        window.addEventListener('resize', handleScreenSize);
        return ()=>window.removeEventListener('resize', handleScreenSize);
    }, [])

    return screen;
}

export default useScreenSize
