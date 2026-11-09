
import Button from "./Button";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  nomorpanggil: string;
  isAvailable: boolean;
}

export default function BookCard({
  title,
  author,
  category, 
  nomorpanggil, 
  isAvailable,
}: BookCardProps) {
  return (
    <div className="w-full max-w-md border rounded-lg p-4 shadow-sm hover:shadow-md transition">

      {/* Informasi Buku */}
      <h3 className="text-lg font-bold text-gray-900">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        Penulis: {author}
      </p>

      <p className="text-xs text-gray-500 mb-4">
        Kategori: {category}
      </p>

      <p className="text-sm text-gray-600">
        Nomor DDC: {nomorpanggil}
      </p>

      {/* Status dan Tombol */}
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
