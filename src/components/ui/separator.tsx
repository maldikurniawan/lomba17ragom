import { cn } from "@/lib/utils";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 bg-tinta/20",
        orientation === "horizontal" ? "h-0.5 w-full" : "h-full w-0.5",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
