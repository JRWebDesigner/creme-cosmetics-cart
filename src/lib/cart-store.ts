import { useSyncExternalStore } from "react";
import type { Product } from "./products";

export type CartItem = { product: Product; quantity: number };

let items: CartItem[] = [];
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }

export const cart = {
  add(product: Product) {
    const existing = items.find((i) => i.product.id === product.id);
    if (existing) existing.quantity += 1;
    else items = [...items, { product, quantity: 1 }];
    emit();
  },
  remove(id: string) {
    items = items.filter((i) => i.product.id !== id);
    emit();
  },
  setQty(id: string, qty: number) {
    if (qty <= 0) return cart.remove(id);
    items = items.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i));
    emit();
  },
  clear() { items = []; emit(); },
};

export function useCart() {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    () => items,
    () => items,
  );
}
