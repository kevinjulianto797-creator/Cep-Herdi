import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/30 overflow-hidden relative">
        <div className="h-2 bg-primary w-full"></div>
        <div className="p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-container-high mb-3">
              <span className="material-symbols-outlined text-primary text-4xl filled">storefront</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight mb-1">KASIR UMKM</h1>
            <p className="text-sm text-on-surface-variant">Kasir Online Gratis & Efisien</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-on-surface-variant">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">person</span>
                </div>
                <input 
                  type="text" 
                  defaultValue="admin" 
                  required
                  className="block w-full pl-10 pr-3 py-2 bg-surface-container-lowest border-2 border-surface-container-high rounded-lg focus:ring-0 focus:border-primary transition-colors text-on-surface"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-on-surface-variant">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">lock</span>
                </div>
                <input 
                  type="password" 
                  defaultValue="123456" 
                  required
                  className="block w-full pl-10 pr-10 py-2 bg-surface-container-lowest border-2 border-surface-container-high rounded-lg focus:ring-0 focus:border-primary transition-colors text-on-surface tracking-widest"
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-primary transition-colors">
                   <span className="material-symbols-outlined">visibility_off</span>
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm font-semibold text-primary hover:text-on-primary-fixed-variant transition-colors">Lupa PIN?</a>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center py-2 px-4 bg-primary hover:bg-surface-tint text-on-primary rounded-lg text-sm font-semibold transition-all active:scale-95 mt-6 h-11"
            >
              {loading ? (
                <>
                  <span>Memverifikasi...</span>
                  <span className="material-symbols-outlined ml-2 animate-spin">progress_activity</span>
                </>
              ) : (
                <>
                  <span>Masuk Sekarang</span>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-4 border-t border-surface-container-high bg-surface-container-low rounded-lg p-3 flex gap-2">
            <span className="material-symbols-outlined text-secondary text-xl mt-0.5">info</span>
            <div>
              <h3 className="text-sm font-semibold text-on-surface mb-1">Akses Demo Admin</h3>
              <p className="text-xs text-on-surface-variant mb-2">Gunakan kredensial default untuk mencoba sistem.</p>
              <div className="flex items-center gap-3 text-xs bg-surface-container-lowest py-1 px-2 rounded border border-outline-variant/50 inline-flex">
                 <span className="text-on-surface-variant">User: <strong className="text-on-surface">admin</strong></span>
                 <span className="text-on-surface-variant">PIN: <strong className="text-on-surface">123456</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
