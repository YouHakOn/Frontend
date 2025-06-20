import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@shared/lib/utils"

// button variants defined in Figma Design System
const buttonVariants = cva(
  "items-center justify-center px-4 rounded-md bg-background focus-visible:outline-none focus-visible:ring-1",
  {
    variants: {
      variant: {
        filled:
          "bg-primary-50 text-white hover:bg-primary-60 focus-visible:bg-primary-70 disabled:bg-background-deep disabled:text-text-disabled",
        default:
          "text-primary-50 border-1 border-primary-50 hover:bg-primary-50/5 focus-visible:bg-primary-50/10 disabled:text-line disabled:border-line",
        secondary:
          "text-primary-50 border-1 border-line hover:bg-background-light focus-visible:bg-background-deep disabled:text-line",
        assistive:
          "text-default border-1 border-line hover:bg-background-light focus-visible:bg-background-deep disabled:text-line",
      },
      size: {
        lg: "h-14 py-4 text-b2-bold",
        md: "h-12 py-3.5 text-b3-bold",
        small: "h-11 py-3 text-b3-bold",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "lg",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { // variant-based Tailwind classes
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
export { Button, buttonVariants }