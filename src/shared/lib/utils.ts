import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Custom tailwind merge configuration to handle custom text styles
// This is necessary to ensure that the text styles are applied
const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'h0',
        'h1',
        'h2',
        'h3',
        'b1',
        'b1-bold',
        'b1-medium',
        'b1-light',
        'b2',
        'b2-bold',
        'b2-medium',
        'b2-light',
        'b3',
        'b3-bold',
        'b3-medium',
        'b3-light',
        'c1',
        'c1-medium',
        'c1-light'
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
