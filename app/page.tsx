import HeroShowcase from "@/components/hero-showcase";
import MenuProductsSection from "@/components/menu-products-section";
import OffersSection from "@/components/offers-section";
import OrderActionsStrip from "@/components/order-actions-strip";
import OrderFormSection from "@/components/order-form-section";
import DeliveryInfoSection from "@/components/delivery-info-section";
import ContactInfoSection from "@/components/contact-info-section";
import QrCodeSection from "@/components/qr-code-section";
import FoodGallerySection from "@/components/food-gallery-section";
import FaqSection from "@/components/faq-section";
import FeaturedFooter from "@/components/featured-footer";

export default function Home() {
  return (
    <>
      <HeroShowcase />
      <MenuProductsSection />
      <FoodGallerySection />
      <OffersSection />
      <OrderActionsStrip />
      <OrderFormSection />
      <DeliveryInfoSection />
      <FaqSection />
      <ContactInfoSection />
      <QrCodeSection />
      <FeaturedFooter />
    </>
  );
}
