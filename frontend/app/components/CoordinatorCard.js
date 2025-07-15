"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

export default function CoordinatorCard({ coordinator }) {
  const coordinatorId = coordinator.id || coordinator._id;

  return (
    <div className="card overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] animate-fade-in">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={coordinator.profilePhoto}
          alt={coordinator.name}
          fill
          className="object-cover object-[45%_25%] transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {coordinator.name}
          </h3>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {coordinator.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span className="text-sm">{coordinator.location}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
          <FaNairaSign className="mr-2" />
          <span className="text-sm font-medium">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
              minimumFractionDigits: 0,
            }).format(coordinator.price)}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
            {coordinator.bio}
          </p>
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          {coordinator.specialties?.slice(0, 2).map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>

        <Link
          href={`/coordinator/${coordinatorId}`}
          className="btn-primary w-full text-center block transition duration-300 hover:brightness-110"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
