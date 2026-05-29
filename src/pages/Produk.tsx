import { useState } from "react";
import { PRODUCTS } from "../data";

export default function Produk() {
  const [search, setSearch] = useState("");

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 max-w-[1280px] mx-auto min-h-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-on-background">Manajemen Produk</h2>
        <button className="bg-primary text-on-primary font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
          <span className="material-symbols-outlined text-sm">add</span> Tambah Produk
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Kategori */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sm text-on-surface">Kategori</h3>
              <button className="text-primary hover:bg-surface-container-low p-1 rounded-full transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
            <ul className="space-y-1">
              <li><button className="block w-full text-left px-3 py-2 rounded-lg bg-primary-container text-on-primary-container font-semibold text-sm">Semua Produk</button></li>
              <li><button className="block w-full text-left px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low text-sm transition-colors">Minuman</button></li>
              <li><button className="block w-full text-left px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low text-sm transition-colors">Makanan Ringan</button></li>
              <li><button className="block w-full text-left px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low text-sm transition-colors">Kebutuhan Sehari-hari</button></li>
            </ul>
          </div>
        </div>

        {/* Tabel Produk */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant">search</span>
              <input 
                type="text" 
                placeholder="Cari nama produk atau barcode..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary focus:outline-none rounded-t-lg text-sm text-on-surface transition-colors"
              />
            </div>
            <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg flex items-center gap-2 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
              <span className="font-semibold text-sm text-on-surface">Filter</span>
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Nama Produk</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Kategori</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">Stok</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">Harga Jual</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className={`hover:bg-surface-container-low transition-colors ${p.stock < 10 ? 'bg-error-container/20' : ''}`}>
                      <td className="p-4">
                         <div className="font-semibold text-sm text-on-surface">{p.name}</div>
                         <div className="text-xs text-on-surface-variant">{p.id}</div>
                      </td>
                      <td className="p-4 text-sm">{p.category}</td>
                      <td className="p-4 text-sm font-semibold text-right text-on-surface">
                         <span className={p.stock < 10 ? 'text-error flex items-center justify-end gap-1' : ''}>
                            {p.stock} pcs
                            {p.stock < 10 && <span className="material-symbols-outlined text-[14px]">warning</span>}
                         </span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-primary text-right">Rp {p.price.toLocaleString("id-ID")}</td>
                      <td className="p-4 flex justify-center gap-2">
                        <button className="p-1.5 text-primary hover:bg-surface-container rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                        <button className="p-1.5 text-error hover:bg-error-container rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-outline-variant flex justify-between items-center text-on-surface-variant text-sm">
              <span>Menampilkan {filteredProducts.length} produk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
