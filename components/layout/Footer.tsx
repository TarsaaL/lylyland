import { contact, navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-chocolate text-cream py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-[family-name:var(--font-script)] text-3xl font-bold text-waffle-light">
              LYLYLAND
            </span>
            <p className="mt-2 text-cream/70 text-sm font-[family-name:var(--font-body)]">
              Fait avec amour a {contact.city}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/60 hover:text-waffle-light transition-colors font-[family-name:var(--font-body)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-center md:text-right text-sm text-cream/50 font-[family-name:var(--font-body)]">
            <p>&copy; {new Date().getFullYear()} LYLYLAND</p>
            <p className="mt-1">Glacier & Salon de The Artisanal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
