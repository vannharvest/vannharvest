import React from 'react';

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  titleSize?: string;
  descriptionSize?: string;
  padding?: string;
}

export function PageLayout({
  title,
  description,
  children,
  bgColor = 'bg-green-800',
  textColor = 'text-white',
  titleSize = 'text-4xl sm:text-5xl md:text-6xl',
  descriptionSize = 'text-xl',
  padding = 'py-20',
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`${bgColor} ${padding}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`font-extrabold ${textColor} ${titleSize} mb-6`}>
            {title}
          </h1>
          <p className={`mt-6 max-w-3xl mx-auto ${descriptionSize} ${textColor} opacity-90`}>
            {description}
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>
    </div>
  );
}
