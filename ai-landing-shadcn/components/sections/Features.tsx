import { Brain, Code2, Lock, Rocket, Workflow, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  { icon: Brain, title: "Akıllı Modeller", desc: "LLM, Embedding ve Görüntü modellerini tek bir API ile kullanın." },
  { icon: Code2, title: "Geliştirici Dostu", desc: "TypeScript SDK, OpenAPI şeması ve örnek repo&apos;lar." },
  { icon: Rocket, title: "Hızlı Başlangıç", desc: "Dakikalar içinde entegre edin, saniyeler içinde dağıtın." },
  { icon: Lock, title: "Kurumsal Güvenlik", desc: "RBAC, audit log, VPC ve şifreleme standartları." },
  { icon: Workflow, title: "Workflow Orkestrasyonu", desc: "Araçları ve zincirleri sürükle-bırak ile birleştirin." },
  { icon: Zap, title: "Skalabilirlik", desc: "Yük altında otomatik ölçekleme ve akıllı önbellekleme." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Modern AI altyapısı</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">Ürününüze değer katan, kullanımı kolay bileşenler ve API&apos;ler.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader className="flex items-start gap-3 pb-0">
                <f.icon className="h-5 w-5" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}