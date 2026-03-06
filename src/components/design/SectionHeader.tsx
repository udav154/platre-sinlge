import { DecorativeLine } from "./DecorativeLine";
import { cn } from "@/components/ui/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
  /** Center align (default) or left */
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const lineAlignClass = align === "center" ? "" : "mx-0";

  return (
    <div className={cn(alignClass, "mb-10 md:mb-20", className)}>
      <DecorativeLine
        variant="gradient"
        className={cn("mb-4 sm:mb-6 md:mb-8", lineAlignClass)}
      />
      <h2
        className="font-serif text-3xl sm:text-4xl md:text-6xl tracking-wide mb-4 md:mb-8 font-medium text-brand-dark"
      >
        {title}
      </h2>
      <DecorativeLine
        variant="solid"
        className={cn("mb-4 md:mb-8", lineAlignClass)}
      />
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-xl leading-relaxed max-w-3xl px-2 text-brand-dark",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
