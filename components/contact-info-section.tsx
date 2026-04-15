"use client";

import { motion } from "motion/react";
import { siteContent } from "@/data/site-content";

export default function ContactInfoSection() {
  return (
    <section
      id="contact-info"
      className="relative overflow-clip bg-[linear-gradient(180deg,#1b0906_0%,#2a0f09_50%,#190805_100%)] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.58, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.contact.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-[#fff1dc] md:text-5xl">{siteContent.contact.title}</h2>
          <p className="text-base leading-8 text-[#ffd6ab] md:text-lg">{siteContent.contact.description}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <motion.a
            href={siteContent.contact.phoneHref}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-[#ffac5a]/20 bg-[#2a0f0a]/75 p-6"
          >
            <p className="text-sm font-semibold text-[#ffb45d]">{siteContent.contact.phoneLabel}</p>
            <p className="mt-3 text-lg font-bold text-[#ffe8c8]" dir="ltr">
              {siteContent.contact.phoneDisplay}
            </p>
          </motion.a>

          <motion.a
            href={siteContent.contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="rounded-3xl border border-[#ffac5a]/20 bg-[#2a0f0a]/75 p-6"
          >
            <p className="text-sm font-semibold text-[#ffb45d]">{siteContent.contact.whatsappLabel}</p>
            <p className="mt-3 text-lg font-bold text-[#ffe8c8]" dir="ltr">
              {siteContent.contact.whatsappDisplay}
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="rounded-3xl border border-[#ffac5a]/20 bg-[#2a0f0a]/75 p-6"
          >
            <p className="text-sm font-semibold text-[#ffb45d]">{siteContent.contact.addressLabel}</p>
            <p className="mt-3 text-base leading-7 text-[#ffe8c8]">{siteContent.contact.address}</p>
          </motion.div>

          <motion.a
            href={siteContent.contact.locationHref}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
            className="rounded-3xl border border-[#ffac5a]/20 bg-[#2a0f0a]/75 p-6"
          >
            <p className="text-sm font-semibold text-[#ffb45d]">{siteContent.contact.locationLabel}</p>
            <p className="mt-3 text-base leading-7 text-[#ffe8c8]">{siteContent.contact.locationText}</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
            className="rounded-3xl border border-[#ffac5a]/20 bg-[#2a0f0a]/75 p-6 md:col-span-2 xl:col-span-2"
          >
            <p className="text-sm font-semibold text-[#ffb45d]">{siteContent.contact.openingHoursLabel}</p>
            <div className="mt-3 space-y-2">
              {siteContent.contact.openingHours.map((line) => (
                <p key={line} className="text-base leading-7 text-[#ffe8c8]">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
