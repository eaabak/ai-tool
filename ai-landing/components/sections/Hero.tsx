import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Yapay Zeka Aracı • API • SaaS</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
            AI ile ürününü 10x daha hızlı geliştir
          </h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">
            Geliştiriciler için basit API&apos;ler, güçlü modeller ve esnek entegrasyonlar. Dakikalar içinde kur, ölçekle ve büyüt.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button className="px-6">Ücretsiz Başla</Button>
            <Button variant="secondary" className="px-6">Dokümantasyon</Button>
          </div>
        </div>

        <div className="mt-12 md:mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
              poster="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
            >
              <source src="https://cdn.coverr.co/videos/coverr-working-with-tablets-9793/1080p.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}