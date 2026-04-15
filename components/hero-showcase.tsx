"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

gsap.registerPlugin(ScrollTrigger);

export default function HeroShowcase() {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const imageLayerRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!heroRef.current || !headlineRef.current || !imageLayerRef.current || !badgeRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro
        .from(".hero-word", {
          yPercent: 110,
          stagger: 0.14,
          duration: 1,
        })
        .from(
          ".hero-copy",
          {
            y: 28,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45",
        )
        .from(
          ".hero-cta",
          {
            y: 24,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".hero-contact",
          {
            y: 16,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.3",
        );

      gsap.to(imageLayerRef.current, {
        scale: 1.17,
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(headlineRef.current, {
        yPercent: -26,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const storyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1.1,
          pin: true,
        },
      });

      storyTimeline
        .to(
          badgeRef.current,
          {
            y: -56,
            opacity: 0.34,
            scale: 0.96,
          },
          0,
        )
        .to(
          ".hero-story-line",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            stagger: 0.16,
            ease: "power3.out",
          },
          0.2,
        )
        .to(
          ".hero-kinetic",
          {
            letterSpacing: "0.22em",
          },
          0.18,
        )
        .to(
          ".hero-overlay",
          {
            opacity: 0.78,
          },
          0,
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[175vh] overflow-clip bg-[var(--rayyan-bg)] text-[var(--rayyan-cream)] md:min-h-[205vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={imageLayerRef} className="absolute inset-0 will-change-transform">
          <Image
            src="restaurant-hero.jpg"
            alt="أجواء مطعم الريان"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
        </div>

        <div className="hero-overlay absolute inset-0 bg-[linear-gradient(95deg,rgba(15,5,3,0.9)_8%,rgba(46,13,7,0.68)_48%,rgba(203,58,22,0.32)_100%)]" />
        <div className="pointer-events-none absolute -right-24 top-[-15%] h-[28rem] w-[28rem] rounded-full bg-[rgba(255,138,34,0.32)] blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-[-20%] h-[25rem] w-[25rem] rounded-full bg-[rgba(204,42,31,0.24)] blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6 pb-8 pt-10 md:pb-10 md:pt-16 md:px-10 lg:px-16">
          <motion.div
            ref={badgeRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-fit rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md"
          >
            {siteContent.brand.name} | {siteContent.brand.shortTagline}
          </motion.div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h1
                ref={headlineRef}
                className="hero-kinetic text-4xl font-extrabold leading-[1.08] tracking-[0.03em] sm:text-5xl md:text-7xl lg:text-8xl"
              >
                <span className="block overflow-hidden">
                  <span className="hero-word block">مطعم</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="hero-word block">الريان</span>
                </span>
              </h1>

              <p className="hero-copy max-w-2xl text-base text-[#ffe8c5] md:text-xl">
                {siteContent.brand.heroCopy}
              </p>

              <OrderButtons ctaClassName="hero-cta" />

              <motion.a
                href={siteContent.actions.menuHref}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="hero-cta inline-flex w-full items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm sm:w-fit md:text-base"
              >
                عرض المنيو
              </motion.a>

              <div className="hero-contact flex flex-wrap gap-3 text-sm md:text-base">
                <a
                  href={siteContent.contact.phoneHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#ffd8a0]/45 bg-[#2d120d]/60 px-5 py-2.5 font-semibold text-[#ffd8a0] transition hover:bg-[#3b1711]"
                >
                  اتصال مباشر
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.25 }}
              className="hidden rounded-3xl border border-white/25 bg-[#2d120d]/55 p-6 backdrop-blur-md md:block"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ffd8a0]">
                تجربة الريان
              </p>
              <div className="mt-4 space-y-3 text-lg md:text-xl">
                <p className="hero-story-line [clip-path:inset(100%_0_0_0)]">مشويات على الفحم بنكهات متوازنة.</p>
                <p className="hero-story-line [clip-path:inset(100%_0_0_0)]">مقبلات ساخنة وسريعة التحضير.</p>
                <p className="hero-story-line [clip-path:inset(100%_0_0_0)]">خدمة توصيل سريعة تغطي المدينة.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
