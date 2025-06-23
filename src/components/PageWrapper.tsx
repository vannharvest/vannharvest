import { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`flex-grow pt-32 pb-16 px-4 sm:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
