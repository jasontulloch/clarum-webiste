
/**
* Concatenates class names into a single string, filtering out any falsy values.
* @param classes - The class names to concatenate.
* @returns A string of concatenated class names.
*/

export function classNames(...classes: (string | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
}