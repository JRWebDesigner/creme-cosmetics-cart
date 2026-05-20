import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, type Product } from "@/lib/products";
import { cart } from "@/lib/cart-store";

export const Route = createFileRoute("/product/$productId")({
  head: () => ({
    meta: [{ title: "Producto — Belu Cosmetic" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  let productId = "";
  if (typeof window !== "undefined") {
    const parts = window.location.pathname.split("/").filter(Boolean);
    productId = parts[parts.length - 1];
  }

  const product: Product | undefined = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Producto no encontrado.</p>
        <div className="ml-4">
          <Link to="/tienda" className="text-primary underline">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-petal)" }}
        >
          <img src={product.image} alt={product.name} className="w-full object-cover" />
        </motion.div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {product.category}
            </p>
            <h1 className="mt-2 font-display text-4xl">{product.name}</h1>
            <p className="mt-4 text-muted-foreground text-xs">{product.description}</p>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between">
            <div className="mb-5">
              <p className="text-sm text-muted-foreground">Precio</p>
              <p className="font-display text-4xl">{product.price}Bs.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => cart.add(product)}
                className="inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-medium text-background hover:opacity-90"
              >
                Añadir al carrito
              </button>
              <Link
                to="/tienda"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-6 py-3 text-sm text-foreground"
              >
                Volver <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
