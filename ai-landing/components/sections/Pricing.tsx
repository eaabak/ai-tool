"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const monthly = [
  { name: "Starter", price: 0, cta: "Başla", features: ["1k API çağrısı/ay", "Temel modeller", "Topluluk desteği"] },
  { name: "Pro", price: 29, cta: "Satın Al", features: ["100k API çağrısı/ay", "Gelişmiş modeller", "Öncelikli destek"] },
  { name: "Scale", price: 99, cta: "İletişime Geç", features: ["Sınırsız", "Özel modeller", "Kurumsal özellikler"] },
];

const yearly = [
  { name: "Starter", price: 0, cta: "Başla", features: ["12k API çağrısı/yıl", "Temel modeller", "Topluluk desteği"] },
  { name: "Pro", price: 290, cta: "Satın Al", features: ["1.2M API çağrısı/yıl", "Gelişmiş modeller", "Öncelikli destek"] },
  { name: "Scale", price: 990, cta: "İletişime Geç", features: ["Sınırsız", "Özel modeller", "Kurumsal özellikler"] },
];

export default function Pricing() {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  const plans = plan === "monthly" ? monthly : yearly;

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Basit, şeffaf fiyatlandırma</h2>
          <div className="mt-6 inline-flex items-center rounded-full border border-neutral-200 p-1 dark:border-neutral-800">
            <button onClick={() => setPlan("monthly")} className={`px-4 py-1.5 text-sm rounded-full ${plan === "monthly" ? "bg-black text-white dark:bg-white dark:text-black" : "text-neutral-700 dark:text-neutral-300"}`}>Aylık</button>
            <button onClick={() => setPlan("yearly")} className={`px-4 py-1.5 text-sm rounded-full ${plan === "yearly" ? "bg-black text-white dark:bg-white dark:text-black" : "text-neutral-700 dark:text-neutral-300"}`}>Yıllık <span className="ml-1 opacity-70">(2 ay hediye)</span></button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name}>
              <CardHeader>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-[-0.03em]">{p.price === 0 ? "Ücretsiz" : `$${p.price}`}</span>
                  {p.price !== 0 && (
                    <span className="text-sm text-neutral-500">/{plan === "monthly" ? "ay" : "yıl"}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{p.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}