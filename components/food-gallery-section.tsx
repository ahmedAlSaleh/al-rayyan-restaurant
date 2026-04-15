"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

export default function FoodGallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items = siteContent.gallery.items;
  const activeItem = useMemo(
    () => (activeIndex === null ? null : items[activeIndex] ?? null),
    [activeIndex, items],
  );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length]);

  return (
    <section
      id="gallery"
      className="relative overflow-clip bg-[linear-gradient(180deg,#170704_0%,#2b0f08_55%,#1a0705_100%)] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute right-[-8%] top-6 h-64 w-64 rounded-full bg-[rgba(255,138,34,0.22)] blur-3xl" />
      <div className="pointer-events-none absolute left-[-8%] bottom-16 h-64 w-64 rounded-full bg-[rgba(204,42,31,0.2)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.gallery.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-[#fff1dc] md:text-5xl">{siteContent.gallery.title}</h2>
          <p className="text-base leading-8 text-[#ffd6ab] md:text-lg">{siteContent.gallery.description}</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-3xl border border-[#f39e47]/22 bg-[#2a0f0a]/75 text-right"
            >
              <div className="relative h-56 md:h-64">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(50vw - 2rem), calc(25vw - 2rem)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180703]/85 via-[#180703]/25 to-transparent" />
              </div>

              <div className="absolute bottom-0 right-0 left-0 p-4">
                <p className="inline-flex rounded-full bg-[#3b150e]/80 px-2.5 py-1 text-xs font-bold text-[#ffcb90]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#fff0d9]">{item.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-8">
          <OrderButtons />
        </div>
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 18 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#220c07]"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute left-4 top-4 z-10 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-sm font-bold text-white"
              >
                إغلاق
              </button>

              <div className="relative h-[22rem] md:h-[30rem]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1400px) calc(100vw - 6rem), 64rem"
                  priority
                />
              </div>

              <div className="space-y-2 p-5">
                <p className="inline-flex rounded-full bg-[#3b150e]/85 px-3 py-1 text-xs font-bold text-[#ffd09a]">
                  {activeItem.category}
                </p>
                <h3 className="text-2xl font-extrabold text-[#fff0d9]">{activeItem.title}</h3>
                <p className="text-sm leading-7 text-[#ffd6ab] md:text-base">{activeItem.description}</p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length))
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-bold text-white"
              >
                السابق
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length))}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-bold text-white"
              >
                التالي
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
