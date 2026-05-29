import { Link } from "react-router-dom";

export default function Lainnya() {
  const menus = [
    { title: "App Settings", desc: "Store profile, receipt, and tax options", icon: "settings", path: "/settings" },
    { title: "Karyawan", desc: "Manage staff roles and access", icon: "badge", path: "/employees" },
    { title: "Supplier", desc: "Manage your supply chain partners", icon: "local_shipping", path: "#" },
    { title: "Laporan Keuangan", desc: "Overview of store performance", icon: "bar_chart", path: "#" },
  ];

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto min-h-full">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-on-background">Menu Lainnya</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menus.map((menu) => (
          <Link key={menu.title} to={menu.path} className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 flex flex-col items-center text-center hover:bg-surface-container-low transition-colors hover:shadow-md active:scale-95 duration-150">
             <div className="w-16 h-16 rounded-full bg-primary-container/20 text-primary flex items-center justify-center mb-4">
               <span className="material-symbols-outlined text-3xl">{menu.icon}</span>
             </div>
             <h3 className="font-bold text-lg text-on-surface">{menu.title}</h3>
             <p className="text-sm text-on-surface-variant mt-1">{menu.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
