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
  { id: "p1", name: "Velvet Rouge", category: "Labios", price: 24, image: lipstick, tag: "Bestseller", description: "Labial mate de larga duración con acabado aterciopelado." },
  { id: "p2", name: "Peach Glow Blush", category: "Rostro", price: 28, image: blush, tag: "Nuevo", description: "Rubor en polvo con pigmentación natural y brillo suave." },
  { id: "p3", name: "Lavanda Eau de Parfum", category: "Fragancias", price: 65, image: perfume, description: "Notas florales de lavanda, jazmín y vainilla." },
  { id: "p4", name: "Pastel Dream Palette", category: "Ojos", price: 42, image: palette, tag: "Edición limitada", description: "6 sombras pastel altamente pigmentadas." },
  { id: "p5", name: "Rose Gold Brush Set", category: "Accesorios", price: 58, image: brushes, description: "Set de 9 brochas profesionales con cerdas suaves." },
  { id: "p6", name: "Glow Serum", category: "Skincare", price: 48, image: serum, tag: "Vegano", description: "Sérum iluminador con vitamina C y ácido hialurónico." },
  { id: "p7", name: "Volume Mascara", category: "Ojos", price: 22, image: mascara, description: "Máscara voluminizadora resistente al agua." },
  { id: "p8", name: "Petal Tint", category: "Labios", price: 19, image: lipstick, description: "Tinte natural con efecto pétalo húmedo." },
];

export const categories = [
  { name: "Labios", color: "var(--blush)" },
  { name: "Rostro", color: "var(--peach)" },
  { name: "Ojos", color: "var(--lavender)" },
  { name: "Fragancias", color: "var(--accent)" },
  { name: "Skincare", color: "var(--mint)" },
  { name: "Accesorios", color: "var(--cream)" },
] as const;
