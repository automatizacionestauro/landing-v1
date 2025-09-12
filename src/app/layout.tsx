import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Base UI con v0 (hero + layout)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <header className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="font-bold text-xl">DevFlow</Link>
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
                <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Docs
                </a>
                <a
                  href="#signin"
                  className="rounded-md border px-3 py-1.5 hover:bg-accent hover:text-accent-foreground"
                >
                  Sign In
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevFlow. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
