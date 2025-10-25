import React from 'react';
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export function TextShimmer({
  children,
  className,
  duration = 2,
}: TextShimmerProps) {
  return (
    <span
      className={cn(
        'relative inline-block text-shimmer',
        className
      )}
      style={{
        '--shimmer-duration': `${duration}s`,
      } as React.CSSProperties}
    >
      {children}
    </span>
  );
}