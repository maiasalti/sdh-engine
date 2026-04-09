import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "banner" | "inline" | "compact";

const MESSAGES: Record<Variant, string> = {
  banner:
    "This tool is for research exploration only. It is not a medical device and does not provide medical advice. Drug candidates, evidence scores, and AI-generated content are not clinical recommendations. Always consult your medical team before making any treatment decisions.",
  inline:
    "AI-generated analysis reflects plausibility based on published research, not clinical proof. This is not medical advice — discuss any findings with your oncology team.",
  compact:
    "For research exploration only — not medical advice. Consult your doctor before acting on any information.",
};

export function MedicalDisclaimer({
  variant = "banner",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <p className={cn("text-[10px] text-muted-foreground/60", className)}>
        {MESSAGES.compact}
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3",
        variant === "inline" && "p-2.5",
        className
      )}
    >
      <AlertTriangle
        className={cn(
          "shrink-0 text-amber-500",
          variant === "banner" ? "h-4 w-4 mt-0.5" : "h-3.5 w-3.5 mt-0.5"
        )}
      />
      <p
        className={cn(
          "leading-relaxed text-amber-200/80",
          variant === "banner" ? "text-xs" : "text-[11px]"
        )}
      >
        {MESSAGES[variant]}
      </p>
    </div>
  );
}
