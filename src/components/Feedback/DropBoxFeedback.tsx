import React from 'react';
// Tailwind
import { PhotoIcon } from '@heroicons/react/24/outline';

interface DropBoxFeedbackProps {
    description: string,
    button: {
        label: string,
        onClick: () => void
    }
}

const DropBoxFeedback = ({ description, button }: DropBoxFeedbackProps) => {
    return (
        <div className="rounded-lg border border-dashed border-gray-900/25 px-6 py-6 h-full">
            <div className="justify-center flex">
                <div className="text-center">
                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-2 flex text-sm leading-6 text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                        <span>{button.label}</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default DropBoxFeedback;
