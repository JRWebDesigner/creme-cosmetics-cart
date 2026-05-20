import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Truck, Leaf, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroImg from "@/assets/hero-cosmetics.jpg";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Belu Cosmetic — Cosméticos en tonos pastel" },
      {
        name: "description",
        content:
          "Descubre maquillaje y skincare con fórmulas limpias y tonos pastel. Envío gratis +$50.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 4);
  //rossy te amo
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -left-32 top-20 -z-10 h-64 w-96 rounded-full bg-accent/40 blur-3xl animate-float" />
        <div
          className="absolute -right-20 bottom-0 -z-10 h-64 w-80 rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        {/*CARRUSEL DE IMAGENES DE PROMOCIONES */}
        <div className="relative custom-swiper h-full">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            navigation
            pagination={{ clickable: true }}
            className="h-full"
          >
            <SwiperSlide>
              <img
                src="https://www.cosmet.com.bo/media/wysiwyg/slider/TF_Soleil-Neige_Cosmet_3840x1200_1.jpg"
                alt="Promoción 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={heroImg} alt="Promoción 2" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-secondary/40 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-12 px-6 font-display text-2xl text-foreground/70"
            >
              <span>Marca 1</span>
              <span>·</span>
              <span>Marca 2</span>
              <span>·</span>
              <span>Marca 3</span>
              <span>·</span>
              <span>Marca 4</span>
              <span>·</span>
              <span>Marca 5</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Explora</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Explora nuestra tienda</h2>
          </div>
          <Link
            to="/tienda"
            className="hidden text-sm text-muted-foreground underline-offset-4 hover:underline md:inline"
          >
            Ver todo
          </Link>
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
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 rounded-[2rem] bg-gradient-to-br from-secondary to-accent/40 p-10 md:grid-cols-4 md:p-12">
          {[
            { icon: Leaf, title: "Vegano", text: "Fórmulas sin ingredientes animales" },
            { icon: ShieldCheck, title: "Clean Beauty", text: "Sin parabenos ni sulfatos" },
            { icon: Truck, title: "Envío gratis", text: "En pedidos superiores a $50" },
            { icon: Sparkles, title: "Productos de calidad", text: "Lotes pequeños y cuidados" },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-2">
              <f.icon className="h-6 w-6 text-primary" />
              <p className="font-display text-lg">{f.title}</p>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Selección</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Recomendado para ti</h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Selección</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Nuevos ingresos</h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
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
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Nuestra filosofía
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Belleza que <em className="italic text-primary">florece</em> contigo.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Creamos cada producto con ingredientes botánicos seleccionados, empaques reciclables y
              mucha intención. Porque tu rutina debería ser un momento, no una rutina.
            </p>
            <Link
              to="/tienda"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Explorar Tienda <ArrowRight className="h-4 w-4" />
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
