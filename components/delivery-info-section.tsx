"use client";

import { motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

export default function DeliveryInfoSection() {
  return (
    <section
      id="delivery-info"
      className="relative overflow-clip bg-[linear-gradient(180deg,#170704_0%,#240b07_52%,#170704_100%)] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -right-16 top-16 h-64 w-64 rounded-full bg-[rgba(255,138,34,0.2)] blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-12 h-72 w-72 rounded-full bg-[rgba(204,42,31,0.2)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.delivery.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-[#fff1dc] md:text-5xl">{siteContent.delivery.title}</h2>
          <p className="text-base leading-8 text-[#ffd6ab] md:text-lg">{siteContent.delivery.description}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteContent.delivery.details.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-3xl border border-[#ffac5a]/20 bg-[#2a0f0a]/75 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-[#ffe8c8]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#ffd3a7] md:text-base">{item.answer}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <OrderButtons />
        </div>
      </div>
    </section>
  );
}
