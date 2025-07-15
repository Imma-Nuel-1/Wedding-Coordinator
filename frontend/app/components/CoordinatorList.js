"use client";
import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import CoordinatorCard from "./CoordinatorCard";
import { getCoordinators } from "../utils/api";

const CoordinatorList = forwardRef((props, ref) => {
  const [coordinators, setCoordinators] = useState([]);
  const [filteredCoordinators, setFilteredCoordinators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");

  useImperativeHandle(ref, () => ({
    setSearchTerm: (term) => {
      setSearchTerm(term);
    },
  }));

  useEffect(() => {
    loadCoordinators();
  }, []);

  useEffect(() => {
    filterCoordinators();
  }, [coordinators, searchTerm, priceRange]);

  const loadCoordinators = async () => {
    try {
      setLoading(true);
      const data = await getCoordinators();
      setCoordinators(data);
      setFilteredCoordinators(data);
    } catch (err) {
      setError("Failed to load coordinators");
      console.error("Error loading coordinators:", err);
    } finally {
      setLoading(false);
    }
  };

  const filterCoordinators = () => {
    let filtered = coordinators;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (coord) =>
          coord.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coord.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price filter
    if (priceRange !== "all") {
      filtered = filtered.filter((coord) => {
        switch (priceRange) {
          case "low":
            return coord.price < 2500;
          case "medium":
            return coord.price >= 2500 && coord.price < 3000;
          case "high":
            return coord.price >= 3000;
          default:
            return true;
        }
      });
    }

    setFilteredCoordinators(filtered);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
              <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">{error}</div>
          <button onClick={loadCoordinators} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search coordinators by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-500" />
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="input-field"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $2,500</option>
              <option value="medium">$2,500 - $3,000</option>
              <option value="high">Over $3,000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredCoordinators.length} coordinator
          {filteredCoordinators.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Coordinators Grid */}
      {filteredCoordinators.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            No coordinators found matching your criteria
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoordinators.map((coordinator) => (
            <CoordinatorCard
              key={coordinator.id || coordinator._id}
              coordinator={coordinator}
            />
          ))}
        </div>
      )}
    </div>
  );
});

CoordinatorList.displayName = "CoordinatorList";

export default CoordinatorList;
