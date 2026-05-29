import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Kasir from "./pages/Kasir";
import Produk from "./pages/Produk";
import Riwayat from "./pages/Riwayat";
import Lainnya from "./pages/Lainnya";
import Settings from "./pages/Settings";
import Employees from "./pages/Employees";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="kasir" element={<Kasir />} />
          <Route path="produk" element={<Produk />} />
          <Route path="riwayat" element={<Riwayat />} />
          <Route path="lainnya" element={<Lainnya />} />
          <Route path="settings" element={<Settings />} />
          <Route path="employees" element={<Employees />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
