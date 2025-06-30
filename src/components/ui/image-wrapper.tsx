
"use client";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWrapperProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function ImageWrapper({ 
  src, 
  alt, 
  className, 
  containerClassName,
  fill,
  ...props 
}: ImageWrapperProps) {
  if (fill) {
    return (
      <div className={cn("relative", containerClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
