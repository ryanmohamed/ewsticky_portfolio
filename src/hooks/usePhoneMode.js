import { useState, useEffect } from 'react';

const usePhoneMode = () => {
    
    const [phoneMode, setPhoneMode] = useState(false);

    /* bug^ we assume we start in a false state
        check on componentDidMount */
    useEffect(() => {
        handleResize();
    }, []);
  
    const handleResize = () => {
        console.log(window.innerWidth);
        if(window.innerWidth <= 828) setPhoneMode(true);
        else setPhoneMode(false);
    }
  
    window.addEventListener('resize', handleResize);

    return [phoneMode];
}

export default usePhoneMode;