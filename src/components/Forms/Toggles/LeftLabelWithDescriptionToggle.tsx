import React from 'react';
// Tailwind
import { Description, Field, Label, Switch } from '@headlessui/react'
import { classNames } from '@/utils/tailwind/classNames'

interface LeftLabelWithDescriptionToggleProps {
    header: string,
    description: string,
    isActive: boolean,
    setIsActive: (newValue: boolean) => void,
    isLast: boolean
}

const LeftLabelWithDescriptionToggle = ({ header, description, isActive, setIsActive, isLast = false }: LeftLabelWithDescriptionToggleProps) => {

  return (
    <Field 
        className={classNames(
            isLast 
            ? ''
            : 'border-b border-b-gray-100',
            'flex items-center justify-between mt-4 pb-4 mb-4',
        )}
    >
      <span className="flex flex-grow flex-col">
        <Label as="span" passive className="text-sm font-medium leading-6 text-gray-900">{header}</Label>
        <Description as="span" className="text-sm text-gray-500">{description}</Description>
      </span>
      <Switch
        checked={isActive}
        onChange={setIsActive}
        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
    </Field>
  )
}

export default LeftLabelWithDescriptionToggle;
