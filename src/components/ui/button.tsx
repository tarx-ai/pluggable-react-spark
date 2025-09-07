import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cx(...args: any[]) {
  return twMerge(clsx(args));
}

const buttonStyles = cva(
  // base
  "inline-flex items-center justify-center select-none whitespace-nowrap font-medium " +
    "transition-colors outline-none ring-offset-0 active:scale-[.99] " +
    "disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-black hover:bg-brand-600 active:bg-brand-700 " +
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand",
        secondary:
          "bg-panel text-fg hover:bg-muted active:bg-muted/90 " +
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand",
        subtle:
          "bg-transparent text-fg hover:bg-muted/60 active:bg-muted " +
          "border border-border " +
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand",
        ghost:
          "bg-transparent text-fg hover:bg-muted/40 active:bg-muted/60 " +
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand",
        outline:
          "bg-transparent text-fg hover:bg-muted/60 active:bg-muted " +
          "border border-border " +
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand",
        destructive:
          "bg-danger text-white hover:bg-danger/90 active:bg-danger " +
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-danger",
      },
      size: {
        xs: "h-7 px-2 text-[12.5px] rounded-sm gap-1",
        sm: "h-8 px-3 text-sm rounded-sm gap-1.5",
        md: "h-9 px-3.5 text-[15px] rounded-md gap-2",
        lg: "h-11 px-5 text-base rounded-lg gap-2",
        icon: "h-9 w-9 rounded-md",
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        pill: "rounded-pill",
      },
      shadow: {
        none: "",
        1: "shadow-1",
        2: "shadow-2",
      },
    },
    compoundVariants: [
      // subtle + border emphasis on hover
      {
        variant: "subtle",
        class: "hover:border-fg-muted",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "md",
      shadow: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, shadow, leftIcon, rightIcon, children, isLoading, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(buttonStyles({ variant, size, radius, shadow }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <>
            {leftIcon ? <span className="-ml-0.5">{leftIcon}</span> : null}
            {children}
            {rightIcon ? <span className="-mr-0.5">{rightIcon}</span> : null}
          </>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export const IconButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "children">>(
  ({ className, variant = "ghost", size = "icon", ...props }, ref) => {
    return <Button ref={ref} variant={variant} size={size} className={className} {...props} />;
  }
);
IconButton.displayName = "IconButton";

// Legacy export for compatibility
export { buttonStyles as buttonVariants };