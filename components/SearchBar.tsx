
"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Cari buku yang dibutuhkan!",
  onSearchChange,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (rawValue: string) => {
    // Memperbarui state input
    setSearchTerm(rawValue);

    // Normalisasi input sesuai Postel's Law
    const normalizedQuery = rawValue.trim().toLowerCase();

    // Mengirim hasil pencarian ke halaman katalog
    onSearchChange(normalizedQuery);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex items-center gap-3 border border-gray-300 rounded-xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-300"
      >
        <label
          htmlFor="catalog-search"
          className="sr-only"
        >
          Cari judul buku atau penulis
        </label>

        <input
          id="catalog-search"
          type="text"
          value={searchTerm}
          onChange={(event) => handleSearch(event.target.value)}
          placeholder={placeholder}
          aria-label="Cari judul buku atau penulis"
          className="flex-1 outline-none text-sm text-gray-900 bg-white placeholder-gray-500 py-2"
        />

        <button
          type="submit"
          aria-label="Cari buku"
          className="bg-[#325E7D] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#005A9C] transition-colors"
        >
          <p>Cari</p>
        </button>
      </form>
    </div>
  );
}
