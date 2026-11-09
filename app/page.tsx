
"use client";

import Header from "@/components/Header";
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
    image: "/images/BUMI MANUSIA.jpg",
  },
  {
    id: 2,
    title: "Anak Semua Bangsa (Lentera Dipantara)",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    nomorpanggil: "800 PRA",
    isAvailable: false,
    image: "/images/ANAK SEMUA BANGSA.jpg",  
  },
];

export default function Home() {
  const userName = "Mara";

  return (
    <>
      <Header activeRoute="Home" />

      <main className="min-h-screen bg-white flex flex-col items-center text-center px-4 py-6 sm:px-6 sm:py-8">

        {/* Sambutan */}
        <section className="w-full pt-10 sm:pt-16 md:pt-20">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Selamat Datang, {userName}!
          </h1>

          <p className="mt-3 text-gray-600">
            Temukan berbagai koleksi buku digital di sini.
          </p>
        </section>

        {/* Search Bar */}
        <section className="w-full max-w-2xl mx-auto mt-8">
          <SearchBar
            onSearch={(query) => {
              alert("Kamu mencari: " + query);
            }}
          />
        </section>

        {/* Koleksi Buku */}
        <section className="w-full max-w-6xl mx-auto mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Eksplor Koleksi Terbaru!
          </h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {catalogData.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                nomorpanggil={book.nomorpanggil}
                isAvailable={book.isAvailable}
                image={book.image}
              />
            ))}

          </div>
        </section>

      </main>
    </>
  );
}
