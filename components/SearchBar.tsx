
"use client";

import { useState, FormEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Cari buku yang dibutuhkan!",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.trim()) {
      onSearch?.(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 border border-gray-300 rounded-xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-300"
      >
      
        {/* Input Pencarian */}
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          aria-label="Cari koleksi buku"
          className="flex-1 outline-none text-sm text-gray-800 bg-transparent py-2"
        />

        {/* Tombol Cari */}
        <button
          type="submit"
          className="bg-[#23588d] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#005A9C] transition-colors">
          🔍︎
        </button>
      </form>
    </div>
  );
}
