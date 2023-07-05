type Modes = Record<string, string | boolean>
export const classNames = (params: {
    className: string
    modes?: Modes
    additionalClasses: string[]
}): string => {

    const {
        className,
        modes,
        additionalClasses
    } = params;

    return [
        className,
        ...additionalClasses,
        ...Object.entries(modes)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) =>className)
    ].join(' ');

}