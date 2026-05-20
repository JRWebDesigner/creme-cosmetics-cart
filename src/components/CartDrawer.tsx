import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { cart, useCart } from "@/lib/cart-store";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items = useCart();
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm"
          />
          <motion.aside
            data-lenis-prevent
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="font-display text-xl">Tu bolso</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-secondary"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="mt-20 text-center text-sm text-muted-foreground">
                  Tu bolso está vacío.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((i) => (
                    <li key={i.product.id} className="flex gap-4 rounded-2xl bg-secondary/40 p-3">
                      <img
                        src={i.product.image}
                        alt={i.product.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-display text-base leading-tight">{i.product.name}</p>
                            <p className="text-xs text-muted-foreground">{i.product.category}</p>
                          </div>
                          <button
                            onClick={() => cart.remove(i.product.id)}
                            className="text-xs text-muted-foreground hover:text-foreground"
                          >
                            Quitar
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1">
                            <button
                              onClick={() => cart.setQty(i.product.id, i.quantity - 1)}
                              aria-label="Menos"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm">{i.quantity}</span>
                            <button
                              onClick={() => cart.setQty(i.product.id, i.quantity + 1)}
                              aria-label="Más"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="font-display">{i.product.price * i.quantity}Bs</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-border px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-lg">{total.toFixed(2)}Bs</span>
              </div>
              <button
                disabled={items.length === 0}
                className="mt-4 w-full rounded-full bg-foreground py-3.5 text-sm text-background transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                Finalizar compra
              </button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Envío gratis en pedidos +250Bs.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
