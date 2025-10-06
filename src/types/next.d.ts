// This file contains type declarations for Next.js
// Make sure this file is included in your tsconfig.json's "include" array

declare module 'next' {
  import { ReactNode } from 'react';

  export interface PageProps {
    params?: { [key: string]: string | string[] };
    searchParams?: { [key: string]: string | string[] | undefined };
  }

  export interface MetadataImage {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }

  export interface MetadataAlternateURLs {
    canonical?: string | URL;
    languages?: Record<string, string>;
    media?: Record<string, string>;
    types?: Record<string, string>;
  }

  export interface Metadata {
    title?: string | { default: string; template?: string; absolute?: string };
    description?: string;
    metadataBase?: URL | string;
    alternates?: MetadataAlternateURLs;
    robots?: {
      index?: boolean;
      follow?: boolean;
      nocache?: boolean;
      noarchive?: boolean;
      nosnippet?: boolean;
      noimageindex?: boolean;
      notranslate?: boolean;
      maxSnippet?: number;
      maxImagePreview?: 'none' | 'standard' | 'large';
      maxVideoPreview?: number;
      googleBot?: {
        index?: boolean;
        follow?: boolean;
        nocache?: boolean;
        noarchive?: boolean;
        nosnippet?: boolean;
        noimageindex?: boolean;
        notranslate?: boolean;
        maxSnippet?: number;
        maxImagePreview?: 'none' | 'standard' | 'large';
        'max-video-preview'?: number;
        unavailableAfter?: string;
        noSiteLinksSearchBox?: boolean;
      };
    };
    keywords?: string | string[];
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      locale?: string;
      type?: string;
      publishedTime?: string;
      modifiedTime?: string;
      authors?: string | string[];
      section?: string;
      tags?: string[];
      images?: MetadataImage[];
    };
    twitter?: {
      card?: 'summary' | 'summary_large_image' | 'app' | 'player';
      title?: string;
      description?: string;
      site?: string;
      creator?: string;
      images?: string[] | MetadataImage[];
    };
    other?: Record<string, string>;
    verification?: Record<string, string>;
  }

  export type ResolvingMetadata = Promise<Metadata> | Metadata;

  export interface Viewport {
    width?: string | number;
    height?: string | number;
    initialScale?: number;
    minimumScale?: number;
    maximumScale?: number;
    userScalable?: boolean;
    viewportFit?: 'auto' | 'cover' | 'contain';
    themeColor?: string | { media: string; color: string }[];
  }

  export interface LayoutProps {
    children: ReactNode;
    params: Record<string, string | string[]>;
  }
}
