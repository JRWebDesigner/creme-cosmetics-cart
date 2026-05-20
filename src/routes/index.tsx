import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Truck, Leaf, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-cosmetics.jpg";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pétale — Cosméticos en tonos pastel" },
      { name: "description", content: "Descubre maquillaje y skincare con fórmulas limpias y tonos pastel. Envío gratis +$50." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl animate-float" />
        <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur">
              <Sparkles className="h-3 w-3 text-primary" /> Nueva colección primavera
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              Belleza<br />
              <em className="font-normal italic text-primary">en pétalos.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Cosméticos limpios, fórmulas veganas y tonos pastel hechos para realzar tu luz natural.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/tienda"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-background transition-opacity hover:opacity-90"
              >
                Entrar a la tienda
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-6 py-3.5 text-sm text-foreground backdrop-blur hover:bg-background"
              >
                Nuestra historia
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem]" style={{ boxShadow: "var(--shadow-petal)" }}>
              <img src={heroImg} alt="Productos de cosmética en tonos pastel" width={1600} height={1200} className="aspect-[5/6] w-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-4 shadow-lg"
            >
              <p className="text-xs text-muted-foreground">Bestseller</p>
              <p className="font-display text-lg">Velvet Rouge</p>
              <p className="text-sm text-primary">$24</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-secondary/40 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6 font-display text-2xl text-foreground/70">
              <span>Vegano</span><span>·</span>
              <span>Cruelty Free</span><span>·</span>
              <span>Ingredientes Limpios</span><span>·</span>
              <span>Hecho con Amor</span><span>·</span>
              <span>Envío Gratis +$50</span><span>·</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Explora</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Pasea por la tienda</h2>
          </div>
          <Link to="/tienda" className="hidden text-sm text-muted-foreground underline-offset-4 hover:underline md:inline">Ver todo</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                to="/tienda"
                className="group block aspect-square rounded-3xl p-5 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: `oklch(from ${cat.color} l c h)` }}
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="font-display text-2xl text-foreground/90">{cat.name}</span>
                  <ArrowRight className="h-5 w-5 text-foreground/70 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Selección</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Lo más amado</h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 rounded-[2rem] bg-gradient-to-br from-secondary to-accent/40 p-10 md:grid-cols-4 md:p-12">
          {[
            { icon: Leaf, title: "Vegano", text: "Fórmulas sin ingredientes animales" },
            { icon: ShieldCheck, title: "Clean Beauty", text: "Sin parabenos ni sulfatos" },
            { icon: Truck, title: "Envío gratis", text: "En pedidos superiores a $50" },
            { icon: Sparkles, title: "Hecho a mano", text: "Lotes pequeños y cuidados" },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-2">
              <f.icon className="h-6 w-6 text-primary" />
              <p className="font-display text-lg">{f.title}</p>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Nuestra filosofía</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Belleza que <em className="italic text-primary">florece</em> contigo.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Creamos cada producto con ingredientes botánicos seleccionados, empaques reciclables y mucha intención.
              Porque tu rutina debería ser un momento, no una rutina.
            </p>
            <Link to="/sobre-nosotros" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline">
              Conoce más <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={heroImg}
            alt="Editorial cosmética"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>
    </>
  );
}
