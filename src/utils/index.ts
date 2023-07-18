import { adminWhatsappNumber } from "@/config/app.config";

export function openWhatsapp(
  type: string | undefined = undefined,
  product: string
) {
  if (type === "href") {
    if (product) {
      return `https://wa.me/${adminWhatsappNumber}?text=Halo%20saya%20ingin%20pesan%20${product}`;
    } else {
      return `https://wa.me/${adminWhatsappNumber}?text=Halo%20kak%20saya%20mau%20order%20produk%20di%20konveksitangerang.id`;
    }
  } else {
    window.open(`https://wa.me/${adminWhatsappNumber}`, "_blank");
  }
}
