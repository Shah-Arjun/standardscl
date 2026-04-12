"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Bell, 
  Image 
} from "lucide-react";

const navItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/teachers",
    label: "Teachers",
    icon: Users,
  },
  {
    href: "/admin/notices",
    label: "Notice",
    icon: Bell,
  },
  {
    href: "/admin/gallery",
    label: "Gallery",
    icon: Image,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-gray-900 text-gray-100">
      {/* Logo / Header */}
      <div className="px-6 py-8 border-b border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight">School Admin</h2>
        <p className="text-gray-400 text-sm mt-1">Management Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-amber-600 text-white shadow-md" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer (Optional) */}
      <div className="p-4 border-t border-gray-800 text-xs text-gray-500 text-center">
        © 2026 School Admin
      </div>
    </div>
  );
}