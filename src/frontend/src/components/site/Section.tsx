import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted';
}

export function Section({ id, children, className, background = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 scroll-mt-16',
        background === 'muted' && 'bg-muted/30',
        className
      )}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}
