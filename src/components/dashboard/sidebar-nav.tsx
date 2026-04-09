"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Pill,
  Lightbulb,
  BookOpen,
  FlaskConical,
  Network,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/drugs", label: "Drug Candidates", icon: Pill },
  { href: "/hypotheses", label: "AI Hypotheses", icon: Lightbulb },
  { href: "/research", label: "Research Feed", icon: BookOpen },
  { href: "/trials", label: "Clinical Trials", icon: FlaskConical },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-border bg-sidebar">
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <Network className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-sm font-bold tracking-tight text-sidebar-foreground">
            SDH-Engine
          </h1>
          <p className="text-[10px] text-muted-foreground">
            Drug Repurposing Engine
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <p className="text-[10px] text-muted-foreground">
          Targeting SDH-deficient GIST, paraganglioma, pheochromocytoma, RCC
        </p>
      </div>
    </aside>
  );
}
