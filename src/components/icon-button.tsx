import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors hover:bg-blue hover:text-gray-900 duration-300',
        className
      )}
      {...props}
    />
  );
}
