import React from 'react'
// Hooks
import useFormErrorState from '@/utils/hooks/forms/useFormErrorState';
// Internal Components
import FormLabelContainer from '../Headers/FormLabelContainer';
import FormErrorText from '@/components/Text/FormErrorText';

interface MultiLineTextInputProps {
    required?: boolean,
    header: string,
    inputValue: string,
    value: string,
    placeholder?: string,
    rows?: number,
    description?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string
}

const MultiLineTextInput = ({ required, header, inputValue, value, placeholder = '', rows = 3, description = '', onChange, error }: MultiLineTextInputProps) => {
    
    const isErrorActive = useFormErrorState(inputValue, error);

    return (    
        <div className="col-span-full">
            <FormLabelContainer required={required} header={header} description={description}>
                <textarea
                    id={inputValue}
                    name={inputValue}
                    rows={rows}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </FormLabelContainer>
            {description !== '' ? (
                <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
            ) : (null)}
            {(isErrorActive && error) ? (
                <FormErrorText text={error} />
            ) : (null)}
        </div>
    )
}

export default MultiLineTextInput;