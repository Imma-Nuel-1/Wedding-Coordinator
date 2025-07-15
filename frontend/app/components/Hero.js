"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Hero({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white animate-fade-in rounded-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 animate-slide-up-fade">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Find Your Perfect
            <span className="block text-primary-200 mt-1">
              Wedding Coordinator
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Discover experienced wedding coordinators who will make your special
            day unforgettable.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
          >
            <div className="bg-white rounded-xl shadow-xl p-1 flex items-center transition-all w-full max-w-md">
              <FaSearch className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-3 text-gray-900 rounded-lg focus:outline-none flex-1 min-w-0"
              />
            </div>

            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
