
"use client";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";

const catalogData = [
  {
    id: 1,
    title: "Bumi Manusia (Lentera Dipantara)",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    nomorpanggil: "800 PRA",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Anak Semua Bangsa (Lentera Dipantara)",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    nomorpanggil: "800 PRA", 
    isAvailable: false,
  },
  {
    id: 3,
    title: "Jejak Langkah (Lentera Dipantara)",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    nomorpanggil: "800 PRA",
    isAvailable: true,
  },
];

export default function OPAC() {
  return (
    <>
      <Header activeRoute="Koleksi" />

      <main className="min-h-screen bg-white p-8">

        {/* Judul Halaman */}
        <section className="text-center pt-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Katalog Koleksi Buku
          </h1>

          <p className="mt-3 text-gray-600">
            Temukan dan telusuri berbagai koleksi buku digital.
          </p>
        </section>

        {/* Search Bar */}
        <section className="w-full mt-8">
          <SearchBar
            placeholder="Cari judul buku atau nama penulis..."
            onSearch={(query) => {
              alert("Kamu mencari: " + query);
            }}
          />
        </section>

        {/* Daftar Koleksi Buku */}
        <section className="max-w-6xl mx-auto mt-16">

          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Daftar Koleksi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {catalogData.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                nomorpanggil={book.nomorpanggil}
                isAvailable={book.isAvailable}
              />
            ))}

          </div>
        </section>

      </main>
    </>
  );
}
