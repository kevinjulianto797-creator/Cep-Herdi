export const STORE_NAME = "RetailPro Main Branch";
export const STORE_ID = "STR-001";

export const PRODUCTS = [
  {
    id: "p1",
    name: "Burger Sapi Premium",
    price: 45000,
    category: "Makanan",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=200&h=200",
    stock: 50
  },
  {
    id: "p2",
    name: "Es Kopi Susu Aren",
    price: 22000,
    category: "Minuman",
    image: "https://images.unsplash.com/photo-1595821927361-4238421d7baa?auto=format&fit=crop&q=80&w=200&h=200",
    stock: 120
  },
  {
    id: "p3",
    name: "Roti Sourdough",
    price: 35000,
    category: "Makanan",
    image: "https://images.unsplash.com/photo-1585478259715-876acc2106a7?auto=format&fit=crop&q=80&w=200&h=200",
    stock: 30
  },
  {
    id: "p4",
    name: "Minyak Goreng 2L",
    price: 38000,
    category: "Sembako",
    stock: 15
  },
  {
    id: "p5",
    name: "Gula Pasir 1kg",
    price: 16500,
    category: "Sembako",
    stock: 45
  },
  {
    id: "p6",
    name: "Teh Celup",
    price: 8000,
    category: "Sembako",
    stock: 100
  }
];

export const CATEGORIES = ["Semua", "Makanan", "Minuman", "Sembako"];

export const RECENT_TRANSACTIONS = [
  {
    id: "REC-20231024-001",
    date: "Today, 14:32",
    method: "QRIS",
    items: 3,
    total: 125000,
    status: "Lunas"
  },
  {
    id: "REC-20231024-002",
    date: "Today, 11:15",
    method: "Tunai",
    items: 5,
    total: 450000,
    status: "Hutang"
  },
  {
    id: "REC-20231023-089",
    date: "Yesterday, 18:45",
    method: "Transfer",
    items: 1,
    total: 75500,
    status: "Lunas"
  }
];
