
interface HeaderProps {
  activeRoute?: string;
}

export default function Header({
  activeRoute = "Home",
}: HeaderProps) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "OPAC", href:"/opac"}, 
    { label: "Koleksi Digital", href: "/koleksi-digital" },
    { label: "Aktivitas", href: "/Aktivitas" },
  ];

  return (
    <header className="w-full bg-[#202734] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Identitas Website */}
        <div>
          <h1 className="text-lg font-bold text-white">
            Perpustakaan MOA
          </h1>
        </div>

        {/* Navigasi Utama */}
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={
                    activeRoute === item.label ? "page" : undefined
                  }
                  className={`text-sm font-medium transition-colors ${
                    activeRoute === item.label
                      ? "text-white-600"
                      : "text-white hover:text-white-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol Login */}
        <a
          href="/login"
          className="bg-[#005A9C] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#005A9C] transition-colors"
        >
          Login
        </a>

      </div>
    </header>
  );
}
