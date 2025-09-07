import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ds-primary focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none rounded-xl",
  {
    variants: {
      variant: {
        default: "bg-ds-primary text-white hover:bg-ds-primary-hover shadow-sm",
        secondary: "bg-input text-text hover:bg-border/50",
        outline: "border-2 border-border bg-transparent text-text hover:bg-input hover:border-border-hover",
        subtle: "bg-input text-text hover:bg-border/50",
        ghost: "bg-transparent text-text hover:bg-input/50",
        destructive: "bg-destructive text-white hover:bg-destructive/90 shadow-sm",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };