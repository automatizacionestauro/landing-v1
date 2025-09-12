import { Button } from "@/components/ui/button";
// Si no tienes lucide-react instalado, o prefieres evitarlo,
// elimina los iconos y deja el texto de los botones.
import { Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                Nuevo · v0 + Next.js
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Crea interfaces <span className="text-primary">más rápido</span> con v0
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Layout base con un hero accesible, CTAs y estructura limpia para iterar contenido y rendimiento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg px-8 py-6">
                <Zap className="mr-2 h-5 w-5" />
                Empezar gratis
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 bg-transparent">
                <Shield className="mr-2 h-5 w-5" />
                Ver documentación
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full" />
                Sin tarjeta requerida
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full" />
                Prueba de 14 días
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-sm text-muted-foreground font-mono">terminal</span>
                </div>
              </div>
              <div className="p-6 bg-card font-mono text-sm space-y-2">
                <div className="text-muted-foreground">$ devflow init my-project</div>
                <div className="text-primary">✓ Project initialized successfully</div>
                <div className="text-muted-foreground">$ devflow deploy --env production</div>
                <div className="text-accent">→ Building application...</div>
                <div className="text-accent">→ Running tests...</div>
                <div className="text-primary">✓ Deployed to https://my-project.dev</div>
                <div className="text-muted-foreground">$ devflow monitor</div>
                <div className="text-foreground">📊 Performance: 98% uptime</div>
                <div className="text-foreground">🚀 Response time: 45ms avg</div>
                <div className="text-primary">✓ All systems operational</div>
              </div>
            </div>

            {/* decor */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
