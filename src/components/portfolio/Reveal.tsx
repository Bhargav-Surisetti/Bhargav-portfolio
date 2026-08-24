import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, props } = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} {...props} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
