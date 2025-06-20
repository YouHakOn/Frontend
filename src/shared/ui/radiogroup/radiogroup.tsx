'use client'
import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@shared/lib/utils'
import { CircleIcon } from '../icons'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'border-line text-line aspect-square size-4 shrink-0 bg-white',
        // 'focus-visible:border-ring focus-visible:ring-ring/50',
        'rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed',
        'data-[state=checked]:bg-primary-50 data-[state=checked]:border-none data-[state=checked]:text-white',
        className
      )}
      {...props}
    >
      <div
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="size-2 fill-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </RadioGroupPrimitive.Item>
  )
}
export { RadioGroup, RadioGroupItem }
