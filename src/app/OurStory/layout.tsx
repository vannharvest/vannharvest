'use client';

import { ReactNode } from 'react';

export default function OurStoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}
