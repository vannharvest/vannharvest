import { Montserrat, Montserrat_Alternates } from 'next/font/google';

// Configure the primary font
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

// Configure the heading font
export const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat-alt',
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

// Export the class names for use in components
export const fontVariables = [
  montserrat.variable,
  montserratAlternates.variable,
].join(' ');
