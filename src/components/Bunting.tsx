import { cn } from "@/lib/utils";

const COLORS = ["#BC2A2A", "#FBF5E7", "#E0A438", "#2E5C45"];

export function Bunting({
  count = 24,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const flags = Array.from({ length: count }, (_, i) => i);
  return (
    <div
      className={cn("flex w-full select-none overflow-hidden", className)}
      aria-hidden="true"
    >
      {flags.map((i) => {
        const color = COLORS[i % COLORS.length];
        const stroke = color === "#FBF5E7" ? "#221A12" : "none";
        return (
          <svg
            key={i}
            viewBox="0 0 20 26"
            className="h-6 w-4 shrink-0 sm:h-8 sm:w-5"
            style={{
              transform: `translateY(${i % 2 === 0 ? "0" : "6px"}) rotate(${i % 2 === 0 ? "-2deg" : "2deg"
                })`,
            }}
          >
            <polygon
              points="0,0 20,0 10,26"
              fill={color}
              stroke={stroke}
              strokeWidth={stroke !== "none" ? 1 : 0}
            />
          </svg>
        );
      })}
    </div>
  );
}
