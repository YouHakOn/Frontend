'use client'
import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDownIcon } from '../icons'
import { cn } from '@shared/lib/utils'

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}
function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}
function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}
function SelectTrigger({
  className,
  size = 'lg',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'lg' | 'md' | 'sm'
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        'border-line enabled:hover:border-primary-50 data-[state=open]:border-primary-50 data-[placeholder]:text-text-info outline-none flex w-fit items-center',
        'justify-between gap-2 rounded-md border bg-transparent p-4 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] data-[size=lg]:h-14 data-[size=md]:h-12 data-[size=sm]:h-11',
        'disabled:bg-background-light disabled:text-text-disabled *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex',
        "*:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'data-[state=open]:[&_svg]:rotate-180 [&_svg]:transition-transform', // rotate icon when open
        // "[&_svg:not([class*='text-'])]:text-muted-foreground aria-invalid:ring-destructive/20 aria-invalid:border-error focus-visible:border-ring focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}
function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-background text-text data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2z-50 max-h-(--radix-select-content-available-height)',
          'min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-2 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        {/* <SelectScrollUpButton /> // 필요하면 해제*/}
        <SelectPrimitive.Viewport
          className={cn(
            // 'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        {/* <SelectScrollDownButton /> // 필요하면 해제*/}
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}
function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-text-info px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'focus:bg-background-light data-[state=checked]:bg-background-light relative flex w-full cursor-default items-center gap-2',
        'rounded-md py-3.5 px-4 outline-hidden select-none data-[disabled]:pointer-events-none [&_svg]:pointer-events-none text-sm', // TODO: text 사이즈 명확하게
        "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 [&_svg:not([class*='text-'])]:text-muted-foreground data-[disabled]:opacity-50", // 체크상태 표시하면 추가
        className
      )}
      {...props}
    >
      {/* <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span> */}
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

// 나중에 필요하면 주석 해제하고 스타일 변경
// function SelectSeparator({
//   className,
//   ...props
// }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
//   return (
//     <SelectPrimitive.Separator
//       data-slot="select-separator"
//       className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
//       {...props}
//     />
//   )
// }
// function SelectScrollUpButton({
//   className,
//   ...props
// }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
//   return (
//     <SelectPrimitive.ScrollUpButton
//       data-slot="select-scroll-up-button"
//       className={cn(
//         "flex cursor-default items-center justify-center py-1",
//         className
//       )}
//       {...props}
//     >
//       <ChevronUpIcon className="size-4" />
//     </SelectPrimitive.ScrollUpButton>
//   )
// }
// function SelectScrollDownButton({
//   className,
//   ...props
// }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
//   return (
//     <SelectPrimitive.ScrollDownButton
//       data-slot="select-scroll-down-button"
//       className={cn(
//         "flex cursor-default items-center justify-center py-1",
//         className
//       )}
//       {...props}
//     >
//       <ChevronDownIcon className="size-4" />
//     </SelectPrimitive.ScrollDownButton>
//   )
// }
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  //   SelectScrollDownButton,
  //   SelectScrollUpButton,
  //   SelectSeparator,
  SelectTrigger,
  SelectValue
}
