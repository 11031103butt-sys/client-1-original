import { pricingData, slugify } from "@/app/components/pricedata";

// Service ID (slug) se item dhoondo. Price hamesha server se lo, client se kabhi nahi.
export function findService(serviceId: string) {
  for (const cat of pricingData) {
    for (const item of cat.items) {
      if (slugify(item.name) === serviceId) return { item: item as any, cat: cat as any };
    }
  }
  return null;
}

// "$50" / "Rs 5,000" / "5000" -> subunit (x100). "Custom Quote" -> null
export function priceToSubunit(price: unknown): number | null {
  if (!price) return null;
  const n = parseFloat(String(price).replace(/[^0-9.]/g, ""));
  if (!n || isNaN(n)) return null;
  return Math.round(n * 100);
}