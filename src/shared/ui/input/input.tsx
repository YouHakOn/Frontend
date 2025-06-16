import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@shared/lib/utils'

// TODO: bg-transparent was original
const inputVariants = cva(
  [
    'placeholder:text-text-info selection:text-default border-input flex rounded-md border bg-background px-4 outline-none disabled:bg-background-light disabled:text-text-disabled',
    'focus-visible:border-primary-50 focus-visible:ring-1 focus-visible:ring-primary-50',
    'aria-invalid:ring-error aria-invalid:border-error'
  ],
  {
    variants: {
      size: {
        lg: 'h-14 py-4',
        md: 'h-12 py-3.5',
        small: 'h-11 py-3'
      }
    },
    defaultVariants: {
      size: 'lg'
    }
  }
)



function Input({
  className,
  type,
  size,
  ...props
}: Omit<React.ComponentProps<'input'>, 'size'> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  )
}
export { Input }
