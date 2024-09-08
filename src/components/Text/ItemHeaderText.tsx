import React from 'react';

interface ItemHeaderTextProps {
    required?: boolean,
    text: string
}

const ItemHeaderText: React.FC<ItemHeaderTextProps> = ({ required, text }) => {
    return (
        <label className="block text-sm font-medium leading-6 text-gray-900">
            {text}{required ? '*' : ''}
        </label>
    );
}

export default ItemHeaderText;