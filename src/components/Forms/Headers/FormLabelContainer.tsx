import React from 'react';
// Internal Components
import DescriptionText from '@/components/Text/DescriptionText';
import ItemHeaderText from '@/components/Text/ItemHeaderText';

interface FormLabelContainerProps {
    required?: boolean
    header: string;
    description?: string;
    children?: React.ReactNode;
}

const FormLabelContainer: React.FC<FormLabelContainerProps> = ({ required, header, description, children }) => {
    return (
        <div>
            <ItemHeaderText text={header} required={required} />
            {description ? (
                <DescriptionText text={description} />
            ) : (null)}
            {children ? (
                <div className="mt-2">
                    {children}
                </div>
            ) : (
                <div className="mt-2" />
            )}
        </div>
    );
}

export default FormLabelContainer;
