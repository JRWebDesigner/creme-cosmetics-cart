import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Heart, Menu } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  const items = useCart();
  const [openCart, setOpenCart] = useState(false);
  const count = items.reduce((n, i) => n + i.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-2xl tracking-tight text-foreground">
            Belu Cosmetic<span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link
              to="/"
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              Inicio
            </Link>
            {/* <Link
              to="/tienda"
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              Tienda
            </Link>
            <Link
              to="/sobre-nosotros"
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contacto"
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              Contacto
            </Link> */}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Buscar"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground md:inline-flex transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Favoritos"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground md:inline-flex transition-colors"
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              onClick={() => setOpenCart(true)}
              aria-label="Carrito"
              className="relative inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm text-background hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Bolso</span>
              {count > 0 && (
                <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs text-primary-foreground">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
