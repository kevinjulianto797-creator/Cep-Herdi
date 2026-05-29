export default function Employees() {
  const employees = [
    { id: "EMP-001", name: "Ahmad Santoso", initials: "AS", role: "Manager", status: "Active" },
    { id: "EMP-042", name: "Budi Makmur", initials: "BM", role: "Cashier", status: "Active" },
    { id: "EMP-088", name: "Citra Wijaya", initials: "CW", role: "Cashier", status: "Offline" },
    { id: "EMP-102", name: "Diana Putri", initials: "DP", role: "Admin", status: "Active" },
  ];

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto w-full min-h-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
           <h1 className="text-2xl md:text-3xl font-bold text-on-surface">Daftar Karyawan</h1>
           <p className="text-sm text-on-surface-variant mt-1">Kelola akses dan informasi staf retail.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
           <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input type="text" placeholder="Cari nama atau ID..." className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary text-sm rounded-t-lg px-4 py-2 pl-10 outline-none transition-colors" />
           </div>
           <button className="bg-primary text-on-primary hover:bg-surface-tint active:scale-95 transition-all rounded-lg px-4 py-2 flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span className="font-bold text-sm">Add Employee</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
         {employees.map(emp => (
           <div key={emp.id} className={`bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-4 flex flex-col gap-4 hover:shadow-md transition-shadow group relative overflow-hidden ${emp.status === 'Offline' ? 'opacity-80' : ''}`}>
              <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full -mr-8 -mt-8 opacity-50 transition-colors ${emp.status === 'Active' ? 'group-hover:bg-primary-container bg-surface-container-high' : 'bg-surface-container-low group-hover:bg-tertiary-container'}`}></div>
              
              <div className="flex items-start justify-between relative z-10">
                 <div className="flex gap-2 items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0 ${emp.status === 'Active' ? 'bg-surface-container-high text-primary' : 'bg-surface-container-low border border-outline-variant text-on-surface-variant'}`}>
                       {emp.initials}
                    </div>
                    <div>
                       <h3 className="text-lg font-semibold leading-tight">{emp.name}</h3>
                       <span className="text-xs text-on-surface-variant">ID: {emp.id}</span>
                    </div>
                 </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-2 border-t border-surface-container-high">
                 <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${emp.status === 'Active' ? 'bg-primary-container' : 'bg-tertiary-container'}`}></span>
                    <span className="text-xs font-bold tracking-wide uppercase text-on-surface-variant">{emp.role}</span>
                 </div>
                 <div className="flex gap-1">
                    <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors">
                       <span className="material-symbols-outlined text-[20px]">call</span>
                    </button>
                    <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors">
                       <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
