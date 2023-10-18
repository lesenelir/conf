import React, { memo } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '../lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {asChild?: boolean}

const Button = memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(
      {
        className,
        variant,
        size,
        asChild = false,
        ...props
      },
      ref
    ) {
      const Comp = asChild ? Slot : "button"

      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
  )
)
Button.displayName = "Button"

export {
  Button,
  buttonVariants
}


// import React, { memo } from "react"
//
// import { cn } from '../lib/utils'
//
// export type Variant =
//   | "primary"
//   | "secondary"
//   | "destructive"
//   | "outline"
//   | "link"
//   | "icon"
//
// export type VariantColor =
//   | "green"
//   | "red"
//   | "gray"
//   | "gradient"
//   | "black"
//   | "light"
//
// // Button component props
// type ButtonProps = {
//   isLoading?: boolean
//   isBlock?: boolean
//   isDisabled?: boolean
//   isAutoWidth?: boolean
//   variant?: Variant
//   variantColor?: VariantColor
//   outlineColor?: VariantColor
//   size?: "sm" | "xl" | "2xl"
//   rounded?: "full" | "lg"
// }
//
// export const Button = memo(
//   // forward ref from Button component to html button element
//   // forwardRef<ref type, props type>
//   React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>(
//     function Button(
//       {
//         type,
//         children,
//         className,
//         isLoading,
//         isDisabled,
//         isBlock,
//         variant,
//         variantColor,
//         outlineColor,
//         size,
//         rounded,
//         isAutoWidth,
//         ...props
//       },
//       ref
//     ) {
//       return (
//         <button
//           {...props}
//           ref={ref}
//           type={type || "button"}
//           disabled={isDisabled || isLoading}
//           className={cn(
//             className,
//             "button",
//             isLoading && "is-loading",
//             isBlock && `is-block`,
//             variantColor && `is-${variantColor}`,
//             variant === "outline" && outlineColor && `is-outline-${outlineColor}`,
//             isDisabled && `is-disabled`,
//             isAutoWidth && `is-auto-width`,
//             size && `is-${size}`,
//             `is-${variant || "primary"}`,
//             "rounded-full",
//           )}
//         >
//           {children}
//         </button>
//       )
//     }
//   )
// )
//
