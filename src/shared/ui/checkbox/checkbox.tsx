'use client'
import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva, VariantProps } from 'class-variance-authority'
import { CheckIcon } from '../icons'
import { cn } from '@shared/lib/utils'

const checkboxVariants = cva(
  [
    'peer text-line border-line data-[state=checked]:border-none',
    'size-5.5 shrink-0 border shadow-xs transition-shadow outline-none focus-visible:ring-[3px]',
  ],
  {
    variants: {
      variant: {
        default: 'rounded-sm data-[state=checked]:bg-primary-50 data-[state=checked]:text-white disabled:text-white disabled:bg-background-deep',
        round: 'rounded-full data-[state=checked]:bg-primary-50 data-[state=checked]:text-white disabled:text-white disabled:bg-background-deep',
        ghost: 'border-none bg-none data-[state=checked]:text-black'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

function Checkbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant, className }))}
      {...props}
    >
      <div className="flex items-center justify-center text-current">
        <CheckIcon className="size-2.5" />
      </div>
    </CheckboxPrimitive.Root>
  )
}
export { Checkbox }
