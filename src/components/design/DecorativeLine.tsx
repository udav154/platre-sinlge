import { cn } from "@/components/ui/utils";

type LineVariant = "gradient" | "gradient-light" | "gradient-from" | "solid" | "short";

interface DecorativeLineProps {
  variant?: LineVariant;
  className?: string;
}

/** Gradient line - fades at edges (for section headers) */
function GradientLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-32 h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent mx-auto",
        className
      )}
    />
  );
}

/** Gradient line - lighter (for dark backgrounds like footer) */
function GradientLightLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto",
        className
      )}
    />
  );
}

/** Gradient line - from color to transparent (for left-aligned headers) */
function GradientFromLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-24 h-px bg-gradient-to-r from-amber-800 to-transparent",
        className
      )}
    />
  );
}

/** Solid line - full color (for under titles) */
function SolidLine({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-24 h-px bg-amber-800 mx-auto", className)}
    />
  );
}

/** Short line - for inline use (e.g. beside "by Sokolova Olga") */
function ShortLine({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-6 md:w-8 h-px bg-amber-800", className)}
    />
  );
}

export function DecorativeLine({
  variant = "gradient",
  className,
}: DecorativeLineProps) {
  switch (variant) {
    case "gradient":
      return <GradientLine className={className} />;
    case "gradient-light":
      return <GradientLightLine className={className} />;
    case "gradient-from":
      return <GradientFromLine className={className} />;
    case "solid":
      return <SolidLine className={className} />;
    case "short":
      return <ShortLine className={className} />;
    default:
      return <GradientLine className={className} />;
  }
}
