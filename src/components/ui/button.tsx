import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg relative",
  {
    variants: {
      variant: {
        // Primary button - matches Figma primary color
        default: "bg-[#0A84FF] text-white hover:bg-[#0056CC] focus:ring-[#0A84FF] shadow-sm",
        // Secondary button  
        secondary: "bg-[#1C1C1E] text-white hover:bg-[#2C2C2E] focus:ring-[#1C1C1E] border border-[#3A3A3C]",
        // Subtle button
        subtle: "bg-[#1C1C1E]/50 text-white hover:bg-[#1C1C1E] focus:ring-[#0A84FF]",
        // Outline button
        outline: "border-2 border-[#3A3A3C] bg-transparent text-white hover:bg-[#1C1C1E] hover:border-[#48484A] focus:ring-[#0A84FF]",
        // Ghost button
        ghost: "bg-transparent text-white hover:bg-[#1C1C1E] focus:ring-[#0A84FF]",
        // Destructive button
        destructive: "bg-[#FF453A] text-white hover:bg-[#D70015] focus:ring-[#FF453A] shadow-sm",
      },
      size: {
        sm: "h-8 px-3 text-sm gap-1.5",
        md: "h-10 px-4 text-sm gap-2", 
        lg: "h-12 px-6 text-base gap-2",
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
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          // Add 4px spacing around button content when not icon-only
          size !== "icon" && "p-1",
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        <div className={cn(
          "flex items-center justify-center w-full h-full",
          // Inner content area with proper spacing
          size !== "icon" && "px-3 py-1 gap-2"
        )}>
          {isLoading ? (
            <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <>
              {leftIcon && (
                <span className="flex-shrink-0">
                  {leftIcon}
                </span>
              )}
              {children && (
                <span className="text-center flex-1 whitespace-nowrap">
                  {children}
                </span>
              )}
              {rightIcon && (
                <span className="flex-shrink-0">
                  {rightIcon}
                </span>
              )}
            </>
          )}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };