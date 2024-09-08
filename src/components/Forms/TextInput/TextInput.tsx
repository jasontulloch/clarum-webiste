import React from 'react';
// Hooks
import useFormErrorState from '@/utils/hooks/forms/useFormErrorState';
// Internal Components
import FormErrorText from '@/components/Text/FormErrorText';
import FormLabelContainer from '@/components/Forms/Headers/FormLabelContainer';
// Tailwind
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface TextInputProps {
    required?: boolean,
    header: string,
    inputValue: string,
    value: string,
    prefill?: string,
    placeholder: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string
}

const TextInput = ({ required, header, inputValue, value, prefill, placeholder, onChange, error }: TextInputProps) => {

    const isErrorActive = useFormErrorState(value, error);
    
    return (    
        <div className="sm:col-span-4">
            <FormLabelContainer header={header} required={required}>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {prefill ? (
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{prefill}</span>
                    ) : (
                        <span className="pl-3"></span>
                    )}
                    <input
                        id={inputValue}
                        name={inputValue}
                        type="text"
                        placeholder={placeholder}
                        autoComplete={inputValue}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        value={value}
                        onChange={onChange}
                    />
                    {(isErrorActive) ? (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ExclamationCircleIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
                        </div>
                    ) : (null)}
                </div>
                {(isErrorActive && error) ? (
                    <FormErrorText text={error} />
                ) : (null)}
            </FormLabelContainer>
        </div>
    )
}

export default TextInput;