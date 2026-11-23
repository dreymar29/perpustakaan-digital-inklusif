
"use client";

import { useState } from "react"; 
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import Image from "next/image";

const catalogData = [
  {
    id: 1,
    title: "Bumi Manusia (Lentera Dipantara)",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    nomorpanggil: "800 PRA",
    isAvailable: true,
    image: "/images/BUMI MANUSIA.jpg"
  },
  {
    id: 2,
    title: "Anak Semua Bangsa (Lentera Dipantara)",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    nomorpanggil: "800 PRA", 
    isAvailable: false,
    image: "/images/ANAK SEMUA BANGSA.jpg"
  },
  {
    id: 3,
    title: "Jejak Langkah (Lentera Dipantara)",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    nomorpanggil: "800 PRA",
    isAvailable: true,
    image: "/images/JEJAK LANGKAH.jpg"
  },
];

export default function OPAC() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = catalogData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery) ||
    book.author.toLowerCase().includes(searchQuery)
  );

  return (
    
      <main className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8">

        {/* Judul Halaman */}
        <section className="text-center pt-6 sm:pt-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Katalog Koleksi Buku
          </h1>

          <p className="mt-3 text-gray-600">
            Temukan dan telusuri berbagai koleksi buku digital.
          </p>
        </section>

        {/* Search Bar */}
        <section className="w-full max-w-2xl mx-auto mt-8">
          <SearchBar
            placeholder="Cari judul buku atau nama penulis..."
            onSearchChange={(query) => {
              setSearchQuery(query);
            }}
          />
        </section>

        {/* Daftar Koleksi Buku */}
        <section className="w-full max-w-6xl mx-auto mt-12 sm:mt-16">

        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
          Daftar Koleksi
        </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">

           {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                nomorpanggil={book.nomorpanggil}
                isAvailable={book.isAvailable}
                image={book.image}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">
              Buku yang kamu cari tidak ditemukan.
            </p>
          )}

          </div>
        </section>

      </main>
  );
}
