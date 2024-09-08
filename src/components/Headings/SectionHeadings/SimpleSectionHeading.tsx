import React from 'react';
// Tailwind
import { classNames } from '@/utils/tailwind/classNames';
interface SimpleSectionHeadingProps {
    header: string,
    description?: string,
    size?: 'h1' | 'h2' | 'h3'
}

const SimpleSectionHeading = ({ header, description, size }: SimpleSectionHeadingProps) => {
    return (
      <div 
        className={classNames(
          size !== 'h1'
          ? "border-b border-gray-200 pb-2"
          : "pb-6",
          ""
        )}
      >
        {size === 'h1' ? (
          <h1 className="text-3xl font-semibold leading-6 text-gray-900">{header}</h1>
        ) : (size === 'h2') ? (
          <h2 className="text-lg font-semibold leading-6 text-gray-900">{header}</h2>
        ) : (
          <h3 className="text-base font-semibold leading-6 text-gray-900">{header}</h3>
        )}
        {description ? (
            <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
        ) : (null)}
      </div>
    )
}

export default SimpleSectionHeading;
  