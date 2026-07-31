import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-tinta px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "bg-merdeka text-kapas",
        gold: "bg-kunyit text-tinta",
        daun: "bg-daun text-kapas",
        outline: "bg-transparent text-tinta",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
