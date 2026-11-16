
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#14497d] border-b border-gray-200 p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/LOGO MOA.png"
          alt="Logo Perpustakaan MOA"
          width={45}
          height={45}
          className="object-contain"
        />
        <span className="text-lg font-bold text-white">
          Perpustakaan MOA
        </span>
      </Link>

      <nav className="flex items-center gap-5">
        <Link href="/" className="text-gray-200 hover:text-white">
          Home
        </Link>

        <Link href="/about" className="text-gray-200 hover:text-white">
          About
        </Link>

        <Link href="/opac" className="text-gray-200 hover:text-white">
          OPAC
        </Link>

        <Link href="/koleksi-digital" className="text-gray-200 hover:text-white">
          Koleksi Digital
        </Link>

        <Link href="/aktivitas" className="text-gray-200 hover:text-white">
          Aktivitas
        </Link>

        <Link
          href="/login"
          className="bg-[#23588d] text-white px-4 py-2 rounded-lg hover:bg-[#005A9C]"
        >
          Login
        </Link>
      </nav>

    </header>
  );
}
