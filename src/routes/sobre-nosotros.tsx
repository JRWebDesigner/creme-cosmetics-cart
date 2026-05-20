import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-cosmetics.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros — Belu Cosmetic Cosmetics" },
      {
        name: "description",
        content:
          "Conoce la historia y filosofía detrás de Belu Cosmetic, cosmética limpia y consciente.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            Nuestra historia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 font-display text-5xl leading-tight md:text-7xl"
          >
            Hecho con <em className="italic text-primary">pétalos</em> y paciencia.
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <img
          src={heroImg}
          alt="Filosofía Belu Cosmetic"
          loading="lazy"
          className="aspect-[16/9] w-full rounded-[2rem] object-cover"
        />
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Belleza consciente</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Belu Cosmetic nació en 2021 con una idea simple: la cosmética debería cuidar la piel,
              la mente y el planeta por igual. Cada fórmula se desarrolla en lotes pequeños, con
              ingredientes botánicos rastreables y empaques reciclables.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl">Pastel por diseño</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Elegimos tonos suaves porque creemos en una belleza que acompaña sin gritar. Belu
              Cosmetic es el ritual silencioso que prepara tu día.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-4 text-center">
          {[
            { n: "+50K", t: "Clientas felices" },
            { n: "100%", t: "Cruelty free" },
            { n: "2021", t: "Año de fundación" },
          ].map((s) => (
            <div key={s.t} className="rounded-3xl bg-secondary/50 p-8">
              <p className="font-display text-4xl text-primary">{s.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
