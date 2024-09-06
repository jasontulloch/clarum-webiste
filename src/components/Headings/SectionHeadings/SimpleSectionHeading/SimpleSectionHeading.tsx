import React from 'react';

interface SimpleSectionHeadingProps {
    header: string,
    description?: string
}

const SimpleSectionHeading = ({ header, description }: SimpleSectionHeadingProps) => {
    return (
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">{header}</h3>
        {description ? (
            <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
        ) : (null)}
      </div>
    )
}

export default SimpleSectionHeading;
  