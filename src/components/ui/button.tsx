import { cn } from "@/lib/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-merdeka disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-merdeka text-kapas shadow-[3px_3px_0px_0px_rgba(34,26,18,0.9)] hover:shadow-[1px_1px_0px_0px_rgba(34,26,18,0.9)] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-tinta",
        outline:
          "border-2 border-tinta bg-transparent text-tinta hover:bg-tinta hover:text-kapas",
        ghost: "text-tinta hover:bg-tinta/10",
        gold:
          "bg-kunyit text-tinta shadow-[3px_3px_0px_0px_rgba(34,26,18,0.9)] hover:shadow-[1px_1px_0px_0px_rgba(34,26,18,0.9)] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-tinta",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
