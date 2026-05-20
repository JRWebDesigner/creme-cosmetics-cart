import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl">
            Belu Cosmetic<span className="text-primary">.</span>
          </h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Belleza consciente y fórmulas limpias para tu rutina diaria.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-background p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-background p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="rounded-full bg-background p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Tienda</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/tienda" className="hover:text-foreground">
                Todos los productos
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="hover:text-foreground">
                Labios
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="hover:text-foreground">
                Rostro
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="hover:text-foreground">
                Fragancias
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Empresa</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/sobre-nosotros" className="hover:text-foreground">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-foreground">
                Contacto
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Envíos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Devoluciones
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">Recibe -10% en tu primera compra.</p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-full bg-foreground px-4 text-sm text-background hover:opacity-90">
              Unirme
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Belu Cosmetic Cosmetics. Todos los derechos reservados.
      </div>
    </footer>
  );
}
