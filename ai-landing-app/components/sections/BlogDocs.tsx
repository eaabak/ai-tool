import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [
  { title: "Airo ile LLM Entegrasyonu", desc: "Node.js ve TypeScript ile hızlı başlangıç rehberi.", href: "#" },
  { title: "Vektör Arama Mimarisi", desc: "Kümeleme ve recall optimizasyonları.", href: "#" },
  { title: "Üretken AI Güvenlik", desc: "Prompt injection ve veri sızıntılarına karşı önlemler.", href: "#" },
];

const docs = [
  { title: "REST API", desc: "Kimlik doğrulama, oran limitleri ve hata kodları.", href: "#" },
  { title: "SDK'lar", desc: "JavaScript/TypeScript, Python ve Go örnekleri.", href: "#" },
  { title: "Örnekler", desc: "Çalışan demo projeler ve şablonlar.", href: "#" },
];

export default function BlogDocs() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em]">Blog</h3>
            <div className="mt-6 grid gap-4">
              {blogPosts.map((p) => (
                <a key={p.title} href={p.href}>
                  <Card className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900">
                    <CardHeader className="pb-1">
                      <h4 className="text-lg font-semibold">{p.title}</h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 dark:text-neutral-400">{p.desc}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em]">Docs</h3>
            <div className="mt-6 grid gap-4">
              {docs.map((d) => (
                <a key={d.title} href={d.href}>
                  <Card className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900">
                    <CardHeader className="pb-1">
                      <h4 className="text-lg font-semibold">{d.title}</h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 dark:text-neutral-400">{d.desc}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}