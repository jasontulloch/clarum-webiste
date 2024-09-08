import React, { useState, useEffect } from 'react';

const useFormErrorState = (value: any, error: string | undefined) => {
    
    const [isErrorActive, setIsErrorActive] = useState(false);
    const [lastValue, setLastValue] = useState(null);

    useEffect(() => {
        if (value !== lastValue) {
            setIsErrorActive(false)
        } else if (error) {
            setIsErrorActive(true);
        } else if (!error) {
            setIsErrorActive(false);
        }
        setLastValue(value); // Track the value for changes
    }, [value, error]);

    return isErrorActive;
};

export default useFormErrorState;
