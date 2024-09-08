import React from 'react';

interface DescriptionTextProps {
    text: string
}

const DescriptionText: React.FC<DescriptionTextProps> = ({ text }) => {
    return (
        <p className="mt-1 text-sm leading-6 text-gray-600">{text}</p>
    );
}

export default DescriptionText;