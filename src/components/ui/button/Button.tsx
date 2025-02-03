// Tremor Button [v0.2.0]

import { Slot } from '@radix-ui/react-slot';
import { RiLoader2Fill } from '@remixicon/react';
import { m } from 'framer-motion';
import * as React from 'react';
import type { VariantProps } from 'tailwind-variants';

import { cx } from '~/lib/cn';

import { buttonVariants } from './buttonVariants';

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      size,
      flat,
      children,
      ...props
    }: ButtonProps,
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : m.button;
    return (
      // @ts-expect-error
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant, size, flat }), className)}
        disabled={disabled || isLoading}
        data-tremor-id="tremor-raw"
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none inline-flex items-center justify-center gap-1.5">
            <RiLoader2Fill
              className={cx(
                'shrink-0 animate-spin',
                size === 'xs' || size === 'sm' ? 'size-3' : 'size-4',
              )}
              aria-hidden="true"
            />
            <span className="sr-only">{loadingText ?? 'Loading'}</span>
            <span className="inline-block">{loadingText ?? children}</span>
          </span>
        ) : (
          children
        )}
      </Component>
    );
  },
);

Button.displayName = 'Button';

export { Button, type ButtonProps };
