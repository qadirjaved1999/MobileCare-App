"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

// __________Cart Drawer__________
export default function CartDrawer() {
  // __________Cart state & actions__________
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    subtotal,
    shipping,
    total,
    voucher,
    setVoucher,
    saveForLater,
  } = useCart();

  return (
    // __________Drawer container__________
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) closeCart(); }}>
      <SheetContent side="right" className="w-full sm:w-[480px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Nákupný košík</SheetTitle>
        </SheetHeader>

        {/* __________Items list__________ */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            // __________Empty state__________
            <div className="text-center py-12">
              <p className="text-muted-foreground">Váš košík je prázdny</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                // __________Cart item row__________
                <div
                  key={item.productId}
                  className="flex gap-4 pb-4 border-b border-border last:border-0"
                >
                  {/* __________Item image__________ */}
                  <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* __________Item details__________ */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-1 truncate">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.product.category}
                    </p>

                    {/* __________Qty & price row__________ */}
                    <div className="flex items-center justify-between">
                      {/* __________Quantity controls__________ */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                          aria-label="Znížiť množstvo"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          aria-label="Zvýšiť množstvo"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* __________Line total__________ */}
                      <div className="text-right">
                        <p className="font-semibold">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>

                    {/* __________Item actions__________ */}
                    <div className="flex gap-2 mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-xs"
                        onClick={() => saveForLater(item.productId)}
                      >
                        Odložiť na neskôr
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-xs text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.productId)}
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Odstrániť
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* __________Summary & actions__________ */}
        {items.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            {/* __________Voucher input__________ */}
            <div className="flex gap-2">
              <Input
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder="Zľavový kód"
              />
              <Button variant="outline">Použiť</Button>
            </div>

            {/* __________Totals__________ */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Spolu položky</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Doprava</span>
                <span>{shipping === 0 ? "Zadarmo" : formatPrice(shipping)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Spolu vrátane DPH</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {/* __________Payment methods (stub)__________ */}
            <div className="flex items-center gap-2 py-2">
              <span className="text-xs text-muted-foreground">Akceptujeme:</span>
              <div className="flex gap-1">
                {["Visa", "MC", "PayPal"].map((method) => (
                  <div
                    key={method}
                    className="bg-secondary border border-border rounded px-2 py-1 text-xs"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* __________Primary actions__________ */}
            <div className="flex flex-col gap-2">
              <Button className="w-full" size="lg">
                Do pokladne
              </Button>
              <Button variant="outline" className="w-full" onClick={closeCart}>
                Pokračovať v nákupe
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
