import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda — Pétale Cosmetics" },
      { name: "description", content: "Compra labiales, sombras, fragancias y skincare en tonos pastel." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [active, setActive] = useState<string>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Tienda</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl">Todo el catálogo</h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Pasea por los pasillos de Pétale. Cada categoría es un rincón pensado para descubrir tu próximo favorito.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="sticky top-[72px] z-20 -mx-6 mb-10 flex gap-2 overflow-x-auto bg-background/80 px-6 py-4 backdrop-blur-xl">
          {["Todos", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm transition-colors ${
                active === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">No hay productos en esta categoría.</p>
        )}
      </section>
    </>
  );
}
