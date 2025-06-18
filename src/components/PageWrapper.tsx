import { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <main className={`min-h-[calc(100vh-10rem)] pt-32 pb-16 ${className}`}>
      <div className="w-full max-w-[calc(100%-32px)] mx-auto">
        {children}
      </div>
    </main>
  );
}
