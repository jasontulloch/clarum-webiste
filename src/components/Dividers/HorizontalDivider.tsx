import React from 'react';

interface HorizontalDividerProps {
    borderStyle?: string
}

const HorizontalDivider = ({ borderStyle = 'Solid' }: HorizontalDividerProps) => {
    return (
        <div>
            {borderStyle === 'Dashed' ? (
                <div className="border-b border-dashed border-gray-900/10 pb-12" />
            ) : (borderStyle === 'Dotted') ? (
                <div className="border-b border-dotted border-gray-900/10 pb-12" />
            ) : (
                <div className="border-b border-gray-900/10 pb-12" />
            )}
        </div>
    )
}

export default HorizontalDivider;