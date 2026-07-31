import { cn } from "@/lib/utils";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "inline-flex min-w-max items-center gap-2 rounded-2xl border-2 border-tinta/80 bg-kertas-dark/40 p-2",
          className
        )}
        {...props}
      />
    </div>
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex min-h-11 shrink-0 whitespace-nowrap items-center justify-center rounded-xl border-2 px-4 py-2 text-sm font-semibold transition-all duration-200 aria-selected:bg-kapas aria-selected:text-tinta",

        // Default
        "border-transparent bg-transparent text-tinta/70",

        // Hover
        "hover:bg-kapas/60 hover:text-tinta",

        // Click
        "active:translate-y-px",

        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "mt-6 outline-none",
        "animate-in fade-in-0 zoom-in-95 duration-300",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };