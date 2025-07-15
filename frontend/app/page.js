"use client";
import { useRef } from "react";
import CoordinatorList from "./components/CoordinatorList";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  const coordinatorListRef = useRef(null);

  const handleSearch = (searchTerm) => {
    if (coordinatorListRef.current) {
      coordinatorListRef.current.setSearchTerm(searchTerm);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero onSearch={handleSearch} />
      <CoordinatorList ref={coordinatorListRef} />
    </div>
  );
}
