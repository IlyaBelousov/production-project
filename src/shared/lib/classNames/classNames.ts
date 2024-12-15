type Modes = Record<string, string | boolean>;
export const classNames = (params: {
  className: string
  modes?: Modes
  additionalClasses?: string[]
}): string => {
    const {
        className,
        modes,
        additionalClasses,
    } = params;

    return [
        className,
        ...additionalClasses,
        ...Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
    ].join(' ');
};
