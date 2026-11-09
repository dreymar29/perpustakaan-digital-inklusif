
import Image from "next/image";

interface HeaderProps {
  activeRoute?: string;
}

export default function Header({
  activeRoute = "Home",
}: HeaderProps) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "OPAC", href: "/opac" },
    { label: "Koleksi Digital", href: "/koleksi-digital" },
    { label: "Aktivitas", href: "/Aktivitas" },
  ];

  return (
    <header className="w-full bg-[#14497d] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">

          {/* Logo dan Nama */}
          <div className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/LOGO MOA.png"
              alt="Logo Perpustakaan MOA"
              width={45}
              height={45}
              className="object-contain w-9 h-9 sm:w-[45px] sm:h-[45px]"
            />

            <h1 className="text-base sm:text-lg font-bold text-white whitespace-nowrap">
              Perpustakaan MOA
            </h1>
          </div>

          {/* Navigasi */}
          <nav
            aria-label="Navigasi utama"
            className="order-3 w-full overflow-x-auto md:order-none md:w-auto md:flex-1 md:overflow-visible"
          >
            <ul className="flex items-center justify-center gap-5 md:gap-6 w-max mx-auto md:w-auto">
              {navItems.map((item) => (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    aria-current={
                      activeRoute === item.label ? "page" : undefined
                    }
                    className={`text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                      activeRoute === item.label
                        ? "text-white underline underline-offset-8"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login */}
          <a
            href="/login"
            className="shrink-0 bg-[#23588d] text-white px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#005A9C] transition-colors"
          >
            Login
          </a>

        </div>
      </div>
    </header>
  );
}
