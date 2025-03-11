import * as React from 'react';
import { cn } from '@/lib/utils';

// Simplified Chart component to avoid unused imports
const Chart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative h-[350px] w-full", className)}
      {...props}
    />
  );
});
Chart.displayName = 'Chart';

export { Chart };
