import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-on-background">App Settings</h1>
        <p className="text-on-surface-variant mt-2">Manage your store preferences, account, and transaction rules.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-surface-container-lowest border border-outline-variant p-2 rounded-xl shadow-sm flex flex-row md:flex-col overflow-x-auto md:overflow-visible hide-scrollbar gap-1">
             {[
               { id: "account", icon: "person", label: "Account" },
               { id: "profile", icon: "storefront", label: "Profile" },
               { id: "printer", icon: "print", label: "Printer" },
               { id: "digital-menu", icon: "qr_code_2", label: "Menu Digital & QR" },
               { id: "language", icon: "language", label: "Language" }
             ].map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-sm whitespace-nowrap md:whitespace-normal w-full text-left transition-colors ${
                   activeTab === tab.id
                    ? 'bg-surface-container text-primary' 
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                 }`}
               >
                 <span className="material-symbols-outlined">{tab.icon}</span>
                 {tab.label}
               </button>
             ))}
          </div>
        </div>

        <div className="flex-1 space-y-6 pb-20">
          {activeTab === 'profile' && (
            <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
              <div className="p-6 border-b border-outline-variant">
                <h2 className="text-xl font-bold text-on-background">Store Profile</h2>
                <p className="text-sm text-on-surface-variant mt-1">Details that appear on your receipts.</p>
              </div>
              <div className="p-6 space-y-6">
                 <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-lg bg-surface-container-low border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container cursor-pointer group">
                      <span className="material-symbols-outlined text-2xl group-hover:text-primary">add_photo_alternate</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider mt-2">Upload</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-on-background">Store Logo</h3>
                      <p className="text-sm text-on-surface-variant mt-1">Recommended size: 256x256px. PNG or JPG.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-on-surface-variant">Store Name</label>
                       <input type="text" defaultValue="RetailPro Main Branch" className="w-full bg-surface-bright border-b-2 border-outline-variant focus:border-primary px-4 py-3 rounded-t-lg outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-on-surface-variant">Store ID</label>
                       <input type="text" defaultValue="STR-001" disabled className="w-full bg-surface-container-low border-b-2 border-outline-variant px-4 py-3 rounded-t-lg outline-none cursor-not-allowed text-on-surface-variant" />
                    </div>
                 </div>

                 <div className="pt-4 flex justify-end">
                    <button className="bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all">Save Changes</button>
                 </div>
              </div>
            </section>
          )}

          {activeTab === 'digital-menu' && (
             <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
                <div className="p-6 border-b border-outline-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">qr_code_2</span>
                  <h2 className="text-xl font-bold text-on-background">Menu Digital & QR Code</h2>
                </div>
                <div className="p-6 space-y-4">
                   <p className="text-sm text-on-surface-variant">Bagikan katalog produk ke pelanggan dengan mudah melalui kode QR atau tautan langsung.</p>
                   <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-outline-variant rounded-xl bg-surface-bright">
                      <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-sm mb-4">
                        <span className="material-symbols-outlined text-[112px] text-on-surface-variant">qr_code_2</span>
                      </div>
                      <button className="bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-lg hover:bg-surface-tint active:scale-95 transition-all shadow-sm flex items-center gap-2">
                         <span className="material-symbols-outlined">download</span> Unduh QR Code
                      </button>
                   </div>
                </div>
             </section>
          )}

          {activeTab === 'printer' && (
             <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
                <div className="p-6 border-b border-outline-variant">
                  <h2 className="text-xl font-bold text-on-background">Pengaturan Printer Thermal</h2>
                  <p className="text-sm text-on-surface-variant mt-1">Konfigurasi koneksi printer bluetooth dan format cetakan struk.</p>
                </div>
                <div className="p-6 space-y-6">
                   <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary">bluetooth</span>
                        <div>
                          <p className="font-bold text-sm">Koneksi Bluetooth</p>
                          <p className="text-xs text-on-surface-variant">Aktifkan untuk mencari printer</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="text-primary font-bold text-sm px-3 py-1 hover:bg-primary/10 rounded-lg">Cari Perangkat</button>
                      </div>
                   </div>
                </div>
             </section>
          )}
          
          {/* Other tabs can be added similarly */}
        </div>
      </div>
    </div>
  );
}
