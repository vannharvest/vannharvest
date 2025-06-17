// Global type declarations for the application

// Base types
type Nullable<T> = T | null | undefined;

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_APP_ENV: 'development' | 'staging' | 'production';
    // Add other environment variables here
  }
}

// Extend the Window interface
declare interface Window {
  __NEXT_DATA__: {
    props: Record<string, any>;
    page: string;
    query: Record<string, string>;
    buildId: string;
    isFallback: boolean;
    dynamicIds?: string[];
    err?: Error & {
      statusCode?: number;
      source?: string;
    };
  };
}

// Global JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    img: React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >;
  }
}

// For CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// For image imports
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
