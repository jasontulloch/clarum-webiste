import React from 'react';

interface FormErrorTextProps {
    text: string
}

const FormErrorText: React.FC<FormErrorTextProps> = ({ text }) => {
    return (
        <p id="error" className="mt-2 text-sm text-red-600">
            {text}
        </p>
    );
}

export default FormErrorText;