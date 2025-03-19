
import React, { forwardRef } from 'react';

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const ScrollSection = forwardRef<HTMLElement, ScrollSectionProps>(
  ({ id, className, children }, ref) => {
    return (
      <section 
        id={id} 
        className={className}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

ScrollSection.displayName = 'ScrollSection';

export default ScrollSection;
