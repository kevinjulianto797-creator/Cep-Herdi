import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 max-w-[1280px] mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-on-background">Dashboard</h2>
        <p className="text-on-surface-variant mt-1">Welcome back, Main Branch. Here's today's overview.</p>
      </div>

      <div className="bg-primary text-on-primary rounded-xl p-6 mb-6 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative z-10 w-full md:w-2/3">
          <h3 className="text-xl font-bold mb-2">Unlock Pro Features</h3>
          <p className="text-sm opacity-90 mb-4">Upgrade your POS system for advanced analytics and multi-store management.</p>
          <button className="bg-white text-primary font-bold text-sm px-4 py-2 rounded-lg hover:bg-surface-container-lowest transition-colors shadow-sm">Upgrade Now</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm group">
           <div className="flex justify-between items-start mb-2">
             <div className="flex items-center gap-1 text-on-surface-variant">
               <span className="material-symbols-outlined text-[20px]">payments</span>
               <span className="font-semibold text-sm">Daily Turnover (Omset)</span>
             </div>
             <a href="#" className="text-xs font-bold text-primary hover:underline uppercase tracking-wide">Detail</a>
           </div>
           <div className="mt-4">
             <span className="text-4xl font-bold text-on-background tracking-tight">Rp 4.5M</span>
           </div>
           <div className="mt-2 flex items-center gap-1 text-primary-container font-semibold text-sm">
             <span className="material-symbols-outlined text-[16px]">trending_up</span>
             <span>+12.5% from yesterday</span>
           </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm group">
           <div className="flex justify-between items-start mb-2">
             <div className="flex items-center gap-1 text-on-surface-variant">
               <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
               <span className="font-semibold text-sm">Capital (Modal)</span>
             </div>
           </div>
           <div className="mt-4">
             <span className="text-4xl font-bold text-on-background tracking-tight">Rp 12.0M</span>
           </div>
           <div className="mt-2 flex items-center gap-1 text-on-surface-variant text-sm">
             <span>Current balance</span>
           </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm group">
           <div className="flex justify-between items-start mb-2">
             <div className="flex items-center gap-1 text-on-surface-variant">
               <span className="material-symbols-outlined text-[20px]">receipt_long</span>
               <span className="font-semibold text-sm">Expenses (Pengeluaran)</span>
             </div>
           </div>
           <div className="mt-4">
             <span className="text-4xl font-bold text-on-background tracking-tight">Rp 1.2M</span>
           </div>
           <div className="mt-2 flex items-center gap-1 text-secondary-container font-semibold text-sm">
             <span className="material-symbols-outlined text-[16px]">warning</span>
             <span>Action needed: 2 pending</span>
           </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-on-background mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { label: "Kasir", icon: "point_of_sale", path: "/kasir" },
          { label: "Produk", icon: "inventory_2", path: "/produk" },
          { label: "Laporan", icon: "bar_chart", path: "/lainnya" },
          { label: "Pengeluaran", icon: "receipt_long", path: "/lainnya" }
        ].map(action => (
           <Link key={action.label} to={action.path} className="bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm transition-colors active:scale-95 group">
             <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center group-hover:bg-primary-container/30 transition-colors">
                <span className="material-symbols-outlined text-primary">{action.icon}</span>
             </div>
             <span className="font-semibold text-sm text-on-surface">{action.label}</span>
           </Link>
        ))}
      </div>
      
      <div className="lg:hidden flex flex-col items-center justify-center gap-1 py-8 text-on-surface-variant text-sm">
        <p>App Version v1.0.2</p>
        <a href="#" className="font-bold uppercase tracking-wider text-xs hover:text-primary">Terms & Conditions</a>
      </div>
    </div>
  );
}
