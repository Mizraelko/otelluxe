import Image from 'next/image';
import { Box, SxProps, Theme } from '@mui/material';
import { OptimizedImageProps } from '@/types';

interface ExtendedOptimizedImageProps extends OptimizedImageProps {
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  sx?: SxProps<Theme>;
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className,
  sx,
  ...props
}: ExtendedOptimizedImageProps) {
  return (
    <Box sx={{ position: 'relative', ...sx }} className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        {...props}
      />
    </Box>
  );
}
