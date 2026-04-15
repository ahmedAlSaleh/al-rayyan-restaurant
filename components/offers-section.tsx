"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

gsap.registerPlugin(ScrollTrigger);

export default function OffersSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".offer-card");

      gsap.from(cards, {
        y: 120,
        opacity: 0,
        scale: 0.88,
        stagger: 0.16,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap.to(cards, {
            yPercent: -15,
            rotation: (index) => (index % 2 === 0 ? -1.8 : 1.8),
            stagger: 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.1,
            },
          });

          gsap.to(".offers-heading", {
            letterSpacing: "0.18em",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });

          gsap.to(".offers-glow", {
            scale: 1.4,
            opacity: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="offers"
      ref={sectionRef}
      className="relative overflow-clip bg-[linear-gradient(180deg,#1b0906_0%,#2f1009_48%,#180806_100%)] px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none offers-glow absolute left-1/2 top-22 h-80 w-80 -translate-x-1/2 rounded-full bg-[rgba(255,138,34,0.22)] blur-[120px]" />

      <div className="relative">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.offers.eyebrow}</p>
            <h2 className="offers-heading mt-4 text-3xl font-extrabold leading-tight text-[#fff1dc] md:text-5xl">
              {siteContent.offers.title}
            </h2>
            <p className="mt-4 text-base text-[#ffd7ad] md:text-lg">{siteContent.offers.description}</p>

            <div className="mt-6">
              <OrderButtons />
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {siteContent.offers.items.map((offer) => (
              <article
                key={offer.id}
                className="offer-card group overflow-hidden rounded-[1.8rem] border border-[#ffa44f]/22 bg-[#260d08]/78 shadow-[0_14px_46px_rgba(0,0,0,0.2)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140603]/80 via-[#1f0a05]/30 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-[#ffd19a]/30 bg-[#2e120b]/70 px-3 py-1 text-xs font-bold tracking-[0.1em] text-[#ffd19a]">
                    {offer.badge}
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <h3 className="text-2xl font-bold text-[#fff1dc]">{offer.title}</h3>
                  <p className="text-sm leading-7 text-[#ffd5a8]">{offer.description}</p>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#ffb98d] line-through">{offer.oldPrice}</span>
                    <span className="rounded-full bg-[#ff8a22]/20 px-3 py-1 text-sm font-extrabold text-[#ffb45d]">
                      {offer.newPrice}
                    </span>
                  </div>

                  <motion.a
                    href="#order-form"
                    whileHover={{ x: -6 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex w-fit items-center rounded-full border border-[#ffbe72]/35 bg-[#3a140d] px-4 py-2 text-sm font-semibold text-[#ffd5a8] transition hover:bg-[#4a1a11]"
                  >
                    احجز العرض الآن
                  </motion.a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
