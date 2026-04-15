"use client";

import Image from "next/image";
import { motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

export default function MenuProductsSection() {
  return (
    <section id="menu" className="relative overflow-clip bg-[#1b0906] px-6 py-20 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-36 top-18 h-72 w-72 rounded-full bg-[rgba(204,42,31,0.22)] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[rgba(255,138,34,0.22)] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.menu.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#fff1dc] md:text-5xl">{siteContent.menu.title}</h2>
          <p className="mt-4 text-base text-[#ffd7ad] md:text-lg">{siteContent.menu.description}</p>
          <p className="mt-2 text-sm font-semibold text-[#ffbf7a]">{siteContent.menu.pricingNote}</p>

          <div className="mt-6">
            <OrderButtons />
          </div>
        </motion.div>

        <div className="mt-12 space-y-12">
          {siteContent.menu.categories.map((category, categoryIndex) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.58, ease: "easeOut", delay: categoryIndex * 0.05 }}
              className="rounded-[2rem] border border-[#f07d2f]/25 bg-[#2a0f0a]/75 p-5 backdrop-blur-sm md:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f6a14b]/22 pb-4">
                <h3 className="text-2xl font-bold text-[#fff0da] md:text-3xl">{category.title}</h3>
                <span className="rounded-full bg-[#4a190f] px-4 py-1.5 text-sm font-semibold tracking-[0.08em] text-[#ffc98b]">
                  {category.subtitle}
                </span>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_1.95fr]">
                <div className="rounded-2xl border border-[#f8a44f]/20 bg-[#210b07]/70 p-4 md:p-5">
                  <p className="text-sm font-bold text-[#ffbf7a]">قائمة تفصيلية وأسعار</p>
                  <ul className="mt-3 space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={`${category.id}-list-${item.name}`}
                        className="rounded-xl border border-[#f8a44f]/15 bg-[#2a0f0a]/70 px-3 py-2.5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-bold text-[#ffe8c8] md:text-base">{item.name}</p>
                          <span className="whitespace-nowrap rounded-full bg-[#ff8a22]/18 px-2.5 py-1 text-xs font-extrabold text-[#ffb25b] md:text-sm">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-6 text-[#ffd6aa] md:text-sm">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${category.id}-${item.name}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: itemIndex * 0.08,
                    }}
                    whileHover={{ y: -8, scale: 1.012 }}
                    className="group overflow-hidden rounded-3xl border border-[#f29a43]/20 bg-[#1e0a07]/80"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1280px) calc(50vw - 3.5rem), calc(25vw - 3rem)"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#170703]/76 via-transparent to-transparent" />
                    </div>

                    <div className="space-y-3 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-lg font-bold leading-snug text-[#ffe8c8]">{item.name}</h4>
                        <span className="whitespace-nowrap rounded-full bg-[#ff8a22]/18 px-3 py-1 text-sm font-extrabold text-[#ffb25b]">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-[#ffd6aa]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
