"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  rightSlot?: React.ReactNode;
}

export function NavBar({ items, className, rightSlot }: NavBarProps) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cn("inline-flex", className)}>
      <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c29a] bg-[#fffaf0]/96 px-2 py-1 text-[#4f3820] shadow-[0_18px_45px_rgba(94,72,42,0.18)] backdrop-blur-lg">
        <div className="flex items-center gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.url;

            return (
              <NavLink
                key={item.name}
                to={item.url}
                className={cn(
                  "relative cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold text-[#a57a2a] transition-colors hover:text-[#6d4d1f] sm:text-sm",
                  isActive && "bg-[#ead2a1] text-[#5a3e12]"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                {isMobile && <Icon size={18} strokeWidth={2.5} className="text-current" />}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 -z-10 w-full rounded-full bg-[#ead2a1]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 rounded-t-full bg-[#d4a84c]">
                      <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-[#d4a84c]/20 blur-md" />
                      <div className="absolute -top-1 h-6 w-8 rounded-full bg-[#d4a84c]/20 blur-md" />
                      <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-[#d4a84c]/15 blur-sm" />
                    </div>
                  </motion.div>
                )}
              </NavLink>
            );
          })}
        </div>
        {rightSlot}
      </div>
    </div>
  );
}
