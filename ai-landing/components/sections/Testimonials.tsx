"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Airo ile API'lerimizi günler yerine saatlerde entegre ettik.",
    author: "Selin K.",
    role: "CTO, FinTechX",
  },
  {
    quote: "Model performansı ve stabilitesi mükemmel. Destek ekibi çok hızlı.",
    author: "Mert A.",
    role: "Head of AI, Healthify",
  },
  {
    quote: "Fiyat/performans açısından tartışmasız en iyi çözüm.",
    author: "Ece T.",
    role: "Founder, AutoDocs",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Kullanıcılarımız ne diyor?</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">Binlerce geliştirici tarafından güvenilen altyapı.</p>
        </div>

        <div className="mt-10 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t, i) => (
                <div className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_33%]" key={i}>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg">“{t.quote}”</p>
                      <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">{t.author} — {t.role}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-neutral-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-neutral-950" />

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={scrollPrev} className="rounded-full border px-3 py-1.5 text-sm disabled:opacity-50">Geri</button>
            <button onClick={scrollNext} className="rounded-full border px-3 py-1.5 text-sm disabled:opacity-50">İleri</button>
          </div>
        </div>
      </div>
    </section>
  );
}