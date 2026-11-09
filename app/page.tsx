
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
];

export default function Home() {
  const userName = "Mara";

  return (
    <>
      <Header activeRoute="Home" />

      <main className="min-h-screen bg-white flex flex-col items-center text-center p-8">

        {/* Sambutan */}
        <section className="w-full pt-20">
          <h1 className="text-3xl font-bold text-gray-900">
            Selamat Datang, {userName}!
          </h1>

          <p className="mt-3 text-gray-600">
            Temukan berbagai koleksi buku digital di sini.
          </p>
        </section>

        {/* Search Bar */}
        <section className="w-full mt-8">
          <SearchBar
            onSearch={(query) => {
              alert("Kamu mencari: " + query);
            }}
          />
        </section>

        {/* Koleksi Buku */}
        <section className="w-full max-w-6xl mt-16">

          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Eksplor Koleksi Terbaru!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
