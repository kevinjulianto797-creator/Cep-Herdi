import { RECENT_TRANSACTIONS } from "../data";

export default function Riwayat() {
  return (
    <div className="p-4 md:p-8 max-w-[1280px] mx-auto min-h-full">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-background">Transaction History</h2>
          <p className="text-sm text-on-surface-variant mt-1">Manage and review past sales</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              type="text" 
              placeholder="Search Receipt ID..." 
              className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary outline-none transition-colors rounded-t-lg text-sm text-on-background"
            />
          </div>
          <div className="relative w-full sm:w-48">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_today</span>
            <input 
              type="date" 
              className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary outline-none transition-colors rounded-t-lg text-sm text-on-background text-on-surface-variant"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-wide uppercase border border-primary-container">All Methods</button>
        <button className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant text-xs font-bold tracking-wide uppercase hover:bg-surface-container-low">Tunai</button>
        <button className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant text-xs font-bold tracking-wide uppercase hover:bg-surface-container-low">QRIS</button>
        <button className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant text-xs font-bold tracking-wide uppercase hover:bg-surface-container-low">Transfer</button>
      </div>

      <div className="space-y-4 pb-20">
        {RECENT_TRANSACTIONS.map((tx) => (
           <div key={tx.id} className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-4 md:p-6 transition-all hover:shadow-md group">
             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                   <span className="material-symbols-outlined text-primary">
                     {tx.method === 'QRIS' ? 'qr_code_scanner' : tx.method === 'Tunai' ? 'payments' : 'account_balance'}
                   </span>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                     <h3 className="font-semibold text-on-background">{tx.id}</h3>
                     <span className={`px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold tracking-wider ${tx.status === 'Lunas' ? 'bg-primary-container text-on-primary-container' : 'bg-error-container text-on-error-container'}`}>
                       {tx.status}
                     </span>
                   </div>
                   <p className="text-sm text-on-surface-variant">{tx.date} • {tx.method} • {tx.items} Items</p>
                 </div>
               </div>
               
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end w-full lg:w-auto gap-4 lg:gap-8">
                 <div className="text-left sm:text-right">
                   <p className="text-sm text-on-surface-variant">Total</p>
                   <p className="text-xl font-bold text-on-background">Rp {tx.total.toLocaleString("id-ID")}</p>
                 </div>
                 <div className="flex items-center gap-2 w-full sm:w-auto">
                   <button className="flex-1 sm:flex-none bg-surface-container-low text-primary border border-primary/20 hover:bg-primary-container hover:text-on-primary-container px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 transition-colors">
                     <span className="material-symbols-outlined text-[18px]">print</span>
                     <span className="sr-only sm:not-sr-only sm:text-xs">Print</span>
                   </button>
                   <button className="flex-1 sm:flex-none bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-surface-container-high px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 transition-colors">
                     <span className="material-symbols-outlined text-[18px]">edit</span>
                   </button>
                 </div>
               </div>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
}
