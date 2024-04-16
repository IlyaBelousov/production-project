declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;

  export = classNames;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
// @ts-ignore
declare global {
  type Entries<T> = {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];
  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>
  }
}
