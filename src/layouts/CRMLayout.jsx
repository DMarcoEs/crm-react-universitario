import { useState } from "react";
import Sidebar from "../components/Sidebar";

function CRMLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main className="flex-1 p-6 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}

export default CRMLayout;