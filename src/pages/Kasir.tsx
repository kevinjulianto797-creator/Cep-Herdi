import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data";

export default function Kasir() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showQrisModal, setShowQrisModal] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCategory = activeCategory === "Semua" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const addToCart = (price: number) => {
    setCartCount(c => c + 1);
    setCartTotal(t => t + price);
  };

  const handleCheckout = () => {
    if (cartCount > 0) {
      setShowPaymentModal(true);
    }
  };

  return (
    <div className="flex h-full bg-background relative overflow-hidden">
      <div className="flex-1 flex flex-col p-4 md:p-8 h-full overflow-y-auto pb-24 lg:pb-8">
        {/* Search & Categories */}
        <div className="flex flex-col xl:flex-row gap-4 mb-6 sticky top-0 z-10 bg-background pb-2">
          <div className="relative w-full xl:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
            </div>
            <input 
              type="text" 
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-12 py-3 bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg text-sm transition-colors shadow-sm"
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined">barcode_scanner</span>
            </button>
          </div>
          <div className="w-full xl:w-1/2 overflow-x-auto hide-scrollbar flex gap-2">
            {CATEGORIES.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap border shadow-sm transition-colors ${
                   activeCategory === cat 
                    ? "bg-primary-container text-on-primary-container border-transparent"
                    : "bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container-low"
                 }`}
               >
                 {cat}
               </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} onClick={() => addToCart(product.price)} className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high overflow-hidden cursor-pointer hover:shadow-md transition-shadow group relative">
              <div className="h-32 w-full bg-surface-container flex items-center justify-center relative overflow-hidden">
                 {product.image ? (
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                 ) : (
                   <span className="material-symbols-outlined text-outline text-4xl">inventory_2</span>
                 )}
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-on-surface truncate mb-1">{product.name}</h3>
                <p className="text-sm font-bold text-primary">Rp {product.price.toLocaleString("id-ID")}</p>
              </div>
               <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                 <span className="material-symbols-outlined text-primary text-4xl bg-white rounded-full shadow-sm p-1">add</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Cart (Desktop) */}
      <div className="hidden lg:flex flex-col w-[350px] bg-surface-container-lowest border-l border-outline-variant shadow-lg z-20">
        <div className="p-6 border-b border-outline-variant">
           <h2 className="text-xl font-bold text-on-surface">Checkout Cart</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center">
            {cartCount === 0 ? (
               <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-50">
                  <span className="material-symbols-outlined text-4xl mb-2 filled">shopping_cart</span>
                  <p>Keranjang Kosong</p>
               </div>
            ) : (
               <div className="flex flex-col items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl mb-2 text-primary">check_circle</span>
                  <p className="font-semibold">{cartCount} Items Selected</p>
               </div>
            )}
        </div>
        <div className="p-6 border-t border-outline-variant bg-surface-container-low">
           <div className="flex justify-between mb-2 text-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span className="font-bold text-on-surface">Rp {cartTotal.toLocaleString("id-ID")}</span>
           </div>
           <div className="flex justify-between mb-4 text-sm text-on-surface-variant">
              <span>Pajak (11%)</span>
              <span className="font-bold text-on-surface">Rp {Math.round(cartTotal * 0.11).toLocaleString("id-ID")}</span>
           </div>
           <div className="flex justify-between mb-6 text-xl font-bold">
              <span>Total</span>
              <span className="text-primary">Rp {Math.round(cartTotal * 1.11).toLocaleString("id-ID")}</span>
           </div>
           <button 
             onClick={handleCheckout}
             disabled={cartCount === 0}
             className="w-full bg-secondary-container text-on-primary font-bold rounded-lg py-4 flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 disabled:opacity-50 transition-all shadow-sm">
              <span className="material-symbols-outlined">payments</span>
              BAYAR
           </button>
        </div>
      </div>

      <button onClick={handleCheckout} className="fixed bottom-24 right-4 z-40 bg-secondary-container text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center lg:hidden hover:scale-105 active:scale-95 transition-transform">
         <span className="material-symbols-outlined">shopping_cart</span>
         {cartCount > 0 && (
           <span className="absolute -top-1 -right-1 bg-error text-on-error font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-surface-container-lowest">
             {cartCount}
           </span>
         )}
      </button>

      {/* Payment Method Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-on-surface">
          <div className="bg-surface-container-lowest w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h2 className="text-xl font-bold">Pilih Metode Pembayaran</h2>
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors" onClick={() => setShowPaymentModal(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <button 
                onClick={() => { setShowPaymentModal(false); setShowQrisModal(true); }}
                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors text-left"
              >
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">qr_code_2</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-primary">QRIS (Otomatis)</p>
                  <p className="text-xs text-on-surface-variant">Integrasi QR Dinamis Aktif</p>
                </div>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </button>
              
              <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors text-left" onClick={() => { setShowPaymentModal(false); setCartCount(0); setCartTotal(0); }}>
                <div className="bg-surface-container p-2 rounded-lg">
                  <span className="material-symbols-outlined text-on-surface-variant text-3xl">payments</span>
                </div>
                <div>
                  <p className="font-bold">Tunai / Cash</p>
                  <p className="text-xs text-on-surface-variant">Bayar di kasir secara manual</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-outline-variant">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QRIS Modal */}
      {showQrisModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-on-surface">
          <div className="bg-surface-container-lowest w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-primary p-6 text-on-primary text-center">
              <h2 className="text-xl font-bold mb-1">QRIS Dinamis</h2>
              <p className="text-xs opacity-90">RetailPro POS - ID: #RP-8821</p>
            </div>
            <div className="p-8 flex flex-col items-center gap-6">
              <div className="relative p-4 bg-white rounded-xl shadow-inner border border-outline-variant">
                <svg className="w-48 h-48 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect height="8" width="8" x="3" y="3"/>
                  <rect height="8" width="8" x="13" y="3"/>
                  <rect height="8" width="8" x="3" y="13"/>
                  <rect height="3" width="3" x="13" y="13"/>
                  <rect height="3" width="3" x="13" y="18"/>
                  <rect height="3" width="3" x="18" y="13"/>
                  <rect height="3" width="3" x="18" y="18"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-6xl">check_circle</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-on-surface-variant mb-1">Total Pembayaran</p>
                <p className="text-3xl font-bold text-primary">Rp {Math.round(cartTotal * 1.11).toLocaleString("id-ID")}</p>
              </div>
              
              <button 
                className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  alert("Pembayaran Berhasil!");
                  setShowQrisModal(false);
                  setCartCount(0);
                  setCartTotal(0);
                }}
              >
                <span className="material-symbols-outlined">refresh</span> CEK STATUS
              </button>

              <button className="text-sm text-outline hover:text-on-surface transition-colors font-semibold" onClick={() => setShowQrisModal(false)}>
                Batalkan Transaksi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
