import lipstick from "@/assets/product-lipstick.jpg";
import blush from "@/assets/product-blush.jpg";
import perfume from "@/assets/product-perfume.jpg";
import palette from "@/assets/product-palette.jpg";
import brushes from "@/assets/product-brushes.jpg";
import serum from "@/assets/product-serum.jpg";
import mascara from "@/assets/product-mascara.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Labios" | "Rostro" | "Ojos" | "Fragancias" | "Skincare" | "Accesorios";
  price: number;
  image: string;
  tag?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Velvet Rouge",
    category: "Labios",
    price: 24,
    image: lipstick,
    tag: "Bestseller",
    description: "Labial mate de larga duración con acabado aterciopelado.",
  },
  {
    id: "p2",
    name: "Peach Glow Blush",
    category: "Rostro",
    price: 28,
    image: blush,
    tag: "Nuevo",
    description: "Rubor en polvo con pigmentación natural y brillo suave.",
  },
  {
    id: "p3",
    name: "Lavanda Eau de Parfum",
    category: "Fragancias",
    price: 65,
    image: perfume,
    description: "Notas florales de lavanda, jazmín y vainilla.",
  },
  {
    id: "p4",
    name: "Pastel Dream Palette",
    category: "Ojos",
    price: 42,
    image: palette,
    tag: "Edición limitada",
    description: "6 sombras pastel altamente pigmentadas.",
  },
  {
    id: "p5",
    name: "Rose Gold Brush Set",
    category: "Accesorios",
    price: 58,
    image: brushes,
    description: "Set de 9 brochas profesionales con cerdas suaves.",
  },
  {
    id: "p6",
    name: "Glow Serum",
    category: "Skincare",
    price: 48,
    image: serum,
    tag: "Vegano",
    description: "Sérum iluminador con vitamina C y ácido hialurónico.",
  },
  {
    id: "p7",
    name: "Volume Mascara",
    category: "Ojos",
    price: 22,
    image: mascara,
    description: "Máscara voluminizadora resistente al agua.",
  },
  {
    id: "p8",
    name: "Petal Tint",
    category: "Labios",
    price: 19,
    image: lipstick,
    description:
      "Imagina morder un melocotón en su punto justo de madurez: su jugo recorre tu barbilla y su sabor adictivo y vibrante estalla en tu paladar. Al igual que tu canción favorita, esta fragancia te envuelve en una atmósfera dulce y audaz. Es pura felicidad en forma de melocotón, lista para ser escuchada una y otra vez. Reproduces esta sinfonía sensorial: el ritmo cae con una explosión de notas brillantes de bayas rojas, luego el ritmo crece con el irresistible toque del extracto natural de melocotón – Peach Orpur, una innovación de Givaudan. La música se eleva con la caricia aterciopelada de Damascena Rose Absolute, rica, sensual y totalmente adictiva. Como esa canción que no puedes dejar de tocar, esta fragancia impacta de forma diferente. Se queda en la piel, un pulso constante, una vibra vibrante. Idôle Peach'N Roses destaca en tu tocador, encarnando una confianza radiante. Su frasco, con un suave lacado en tonos melocotón y naranja, brilla como un atardecer capturado, irradiando una cálida luz interior. Más que una fragancia, Idôle Peach'N Roses es toda una experiencia. Un recordatorio constante para repetir esos momentos en los que te sientes, simplemente, imparable.",
  },
];

export const categories = [
  { name: "Labios", color: "var(--blush)" },
  { name: "Rostro", color: "var(--peach)" },
  { name: "Ojos", color: "var(--lavender)" },
  { name: "Fragancias", color: "var(--accent)" },
  { name: "Skincare", color: "var(--mint)" },
  { name: "Accesorios", color: "var(--cream)" },
] as const;
