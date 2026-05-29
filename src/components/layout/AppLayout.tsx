import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function AppLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: "dashboard" },
    { name: "Kasir", path: "/kasir", icon: "point_of_sale" },
    { name: "Produk", path: "/produk", icon: "inventory_2" },
    { name: "Riwayat", path: "/riwayat", icon: "history" },
    { name: "Lainnya", path: "/lainnya", icon: "menu" },
  ];

  return (
    <div className="flex h-screen bg-surface">
      {/* Desktop Sidebar Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-outline-variant bg-surface-container-lowest shadow-sm z-30">
        <div className="p-6 border-b border-outline-variant flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">MB</div>
          <div>
            <div className="font-semibold text-sm text-on-surface">Main Branch</div>
            <div className="text-xs text-on-surface-variant flex items-center gap-1">Register #01 • <span className="text-primary-container">Online</span></div>
          </div>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1 px-3 space-y-1">
          {navItems.map((item) => (
             <NavLink
             key={item.name}
             to={item.path}
             className={({ isActive }) =>
               cn(
                 "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                 isActive 
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high"
               )
             }
           >
             {({ isActive }) => (
                <>
                  <span className={cn("material-symbols-outlined", isActive && "filled")}>{item.icon}</span>
                  {item.name}
                </>
             )}
           </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top App Bar header */}
        <header className="flex-shrink-0 h-16 bg-surface-container-lowest border-b border-outline-variant shadow-sm flex items-center justify-between px-4 lg:px-8 z-20">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary lg:hidden">storefront</span>
            <h1 className="text-lg font-bold text-primary tracking-tight">KASIR UMKM</h1>
          </div>
          <button className="w-10 h-10 rounded-full flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto w-full pb-20 lg:pb-0">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden absolute bottom-0 left-0 w-full h-20 bg-surface-container-lowest border-t border-outline-variant shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex items-center justify-around px-2 pb-safe z-30">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center w-16 px-1 py-2 rounded-xl transition-all active:scale-95 duration-150",
                  isActive
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                )
              }
            >
               {({ isActive }) => (
                <>
                  <span className={cn("material-symbols-outlined mb-1", isActive && "filled")}>{item.icon}</span>
                  <span className="text-[10px] font-semibold leading-tight">{item.name}</span>
                </>
             )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
