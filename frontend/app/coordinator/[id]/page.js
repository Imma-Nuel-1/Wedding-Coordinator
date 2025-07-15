"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaStar,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaArrowLeft,
  FaAward,
} from "react-icons/fa";
import { getCoordinator } from "../../utils/api";
import BookingModal from "../../components/BookingModal";
import Header from "../../components/Header";

export default function CoordinatorDetail() {
  const params = useParams();
  const router = useRouter();
  const [coordinator, setCoordinator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    if (params.id) {
      loadCoordinator();
    }
  }, [params.id]);

  const loadCoordinator = async () => {
    try {
      setLoading(true);
      const data = await getCoordinator(params.id);
      setCoordinator(data);
    } catch (err) {
      setError("Failed to load coordinator details");
      console.error("Error loading coordinator:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-4">{error}</div>
            <button onClick={() => router.back()} className="btn-primary">
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in-up">
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Coordinators
        </Link>

        {/* Main Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative h-96 lg:h-full">
              <Image
                src={coordinator.profilePhoto}
                alt={coordinator.name}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105 rounded-t-3xl"
                priority
              />
            </div>

            {/* Details */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {coordinator.name}
                </h1>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {coordinator.rating}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaMapMarkerAlt className="mr-3" />
                  <span>{coordinator.location}</span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaDollarSign className="mr-3" />
                  <span className="font-semibold">
                    ${coordinator.price.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaAward className="mr-3" />
                  <span>{coordinator.experience} experience</span>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  About
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {coordinator.bio}
                </p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coordinator.specialties?.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm hover:scale-105 transition-transform"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaEnvelope className="mr-3" />
                    <span>{coordinator.contact?.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaPhone className="mr-3" />
                    <span>{coordinator.contact?.phone}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowBookingModal(true)}
                className="btn-primary w-full mt-4"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Availability */}
          <div className="p-8 border-t dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Available Dates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coordinator.availability?.map((date, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <FaCalendarAlt className="text-primary-600 mr-3" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        coordinator={coordinator}
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
    </div>
  );
}
