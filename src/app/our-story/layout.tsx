import { ReactNode } from 'react';

export default function OurStoryLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {children}
    </div>
  );
}
