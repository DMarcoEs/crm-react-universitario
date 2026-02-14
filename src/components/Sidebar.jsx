import { NavLink } from "react-router-dom";
import { Menu, LayoutDashboard, Users, GraduationCap, BarChart3 } from "lucide-react";

export default function Sidebar({ collapsed, setCollapsed }) {
  const items = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/leads", label: "Leads", icon: <Users size={20} /> },
    { to: "/teachers", label: "Teachers", icon: <GraduationCap size={20} /> },
    { to: "/reports", label: "Reports", icon: <BarChart3 size={20} /> },
  ];

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-slate-900 text-white
        h-screen
        transition-all duration-300
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && (
          <h1 className="text-lg font-extrabold tracking-tight">CRM</h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-white/15 transition"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-2 p-3">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `
              flex items-center gap-3 p-3 rounded-xl transition
              ${isActive ? "bg-white/20" : "hover:bg-white/10"}
              `
            }
          >
            <span className="min-w-[36px] grid place-items-center">
              {item.icon}
            </span>

            {!collapsed && (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 text-xs text-slate-300">
        {!collapsed ? "Universitario · React + Tailwind" : "v1.0"}
      </div>
    </aside>
  );
}

