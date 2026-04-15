"use client";

import { motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";

export default function OrderActionsStrip() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(110deg,#240d08_0%,#45170c_52%,#2d100a_100%)] px-6 py-14 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[rgba(255,138,34,0.24)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[rgba(204,42,31,0.24)] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-6 rounded-[2rem] border border-[#ffab57]/28 bg-[#2b0f08]/72 p-6 backdrop-blur-sm md:p-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-2xl font-extrabold text-[#fff1dc] md:text-4xl"
        >
          جاهز للطلب؟ اختر الطريقة الأنسب الآن
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="max-w-3xl text-sm leading-7 text-[#ffd6ab] md:text-base"
        >
          أزرار الطلب هنا مكررة بوضوح حتى تبقى عملية الشراء سريعة في أي نقطة من الصفحة.
        </motion.p>

        <OrderButtons />
      </div>
    </section>
  );
}
