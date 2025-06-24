import 'next';

declare module 'next' {
  export interface Metadata {
    title?: string | { default: string; template?: string; absolute?: string };
    description?: string;
    openGraph?: {
      title?: string;
      description?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }>;
    };
  }
}
