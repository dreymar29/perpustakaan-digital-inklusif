
import Image from "next/image";
import Button from "./Button";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  nomorpanggil: string;
  isAvailable: boolean;
  image?: string;
}

export default function BookCard({
  title,
  author,
  category,
  nomorpanggil,
  isAvailable,
  image,
}: BookCardProps) {
  return (
    <div className="w-full max-w-[240px] border rounded-xl p-3 shadow-sm hover:shadow-md transition bg-white flex flex-col">

      <div className="relative w-full h-56 mb-4 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
        {image? (
          <Image
            src={image}
            alt={`Cover buku ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain"
          />
        ) : (
          <p className="text-sm text-gray-400">
            Cover belum tersedia
          </p>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        Penulis: {author}
      </p>

      <p className="text-xs text-gray-500 mb-4">
        Kategori: {category}
      </p>

      <p className="text-sm text-gray-600 mb-4">
        Nomor DDC: {nomorpanggil}
      </p>

      <div className="flex items-center justify-between">

        <span
          className={`text-xs px-2 py-1 rounded ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isAvailable ? "Tersedia" : "Dipinjam"}
        </span>

        <Button
          label={isAvailable ? "Pinjam" : "Reservasi"}
        />

      </div>
    </div>
  );
}
