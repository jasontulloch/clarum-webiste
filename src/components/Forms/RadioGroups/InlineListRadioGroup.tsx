import React from 'react';
// Hooks
import useFormErrorState from '@/utils/hooks/forms/useFormErrorState';
// Internal Components
import FormLabelContainer from '@/components/Forms/Headers/FormLabelContainer';
import FormErrorText from '@/components/Text/FormErrorText';

interface ListItem {
    key: string;
    value: string;
}

interface InlineListRadioGroupProps {
    required: boolean,
    header: string,
    description?: string,
    selectedItem: string,
    setSelectedItem: (item: string) => void,
    list: ListItem[],
    error?: string
}

const InlineListRadioGroup = ({ required, header, description, selectedItem, setSelectedItem, list, error }: InlineListRadioGroupProps) => {

    const isErrorActive = useFormErrorState(selectedItem, error);

    return (
        <div className="col-span-full">
            <FormLabelContainer required={required} header={header} description={description}>
                <div className="mt-2 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {list?.map((item) => (
                        <div key={item.value} className="flex items-center">
                        <input
                            checked={item.value === selectedItem}
                            id={item.value}
                            type="radio"
                            onChange={() => setSelectedItem(item.value)}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor={item.value} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                            {item.key}
                        </label>
                        </div>
                    ))}
                </div>
                {(isErrorActive && error) ? (
                    <FormErrorText text={error} />
                ) : (null)}
            </FormLabelContainer>
        </div>
    )
}

export default InlineListRadioGroup;
  