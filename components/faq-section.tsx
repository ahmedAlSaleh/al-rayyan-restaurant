"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="relative overflow-clip bg-[linear-gradient(180deg,#170704_0%,#250c07_56%,#160603_100%)] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[rgba(255,138,34,0.2)] blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.faq.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-[#fff1dc] md:text-5xl">{siteContent.faq.title}</h2>
          <p className="text-base leading-8 text-[#ffd6ab] md:text-lg">{siteContent.faq.description}</p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {siteContent.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, ease: "easeOut", delay: index * 0.04 }}
                className="overflow-hidden rounded-3xl border border-[#f39e47]/20 bg-[#2a0f0a]/75"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right md:px-6"
                >
                  <span className="text-base font-bold text-[#ffe9cb] md:text-lg">{item.question}</span>
                  <span className="rounded-full border border-[#ffcb93]/30 bg-[#3a150d]/70 px-2.5 py-1 text-xs font-bold text-[#ffcb93]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-[#f39e47]/15 px-5 py-4 text-sm leading-7 text-[#ffd9b0] md:px-6 md:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8">
          <OrderButtons />
        </div>
      </div>
    </section>
  );
}
