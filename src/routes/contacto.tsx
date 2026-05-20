import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Belu Cosmetic Cosmetics" },
      {
        name: "description",
        content: "Escríbenos: dudas, pedidos personalizados y atención al cliente.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Contacto</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Hablemos de <em className="italic text-primary">belleza</em>.
          </h1>
          <p className="mt-6 text-muted-foreground">
            Responderemos en menos de 24 horas. Para temas urgentes, llámanos directamente.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" /> hola@petale.shop
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" /> +34 600 123 456
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" /> Calle Pétalos 12, Madrid
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Mensaje enviado!");
          }}
          className="rounded-[2rem] bg-secondary/40 p-8 md:p-10"
        >
          <div className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Nombre
              </label>
              <input
                required
                className="mt-2 w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Mensaje
              </label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-3xl border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button className="w-full rounded-full bg-foreground py-3.5 text-sm text-background hover:opacity-90">
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
