import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const Image = ({ 
  src, 
  alt, 
  className, 
  wrapperClassName,
  ...props 
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {isLoading && (
        <Skeleton className={cn("absolute inset-0", className)} />
      )}
      <img
        src={src}
        alt={alt || ""}
        className={cn(
          className,
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export { Image }; 