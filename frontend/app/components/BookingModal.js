"use client";
import { useState } from "react";
import {
  FaTimes,
  FaCalendarAlt,
  FaUsers,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { createBooking } from "../utils/api";

export default function BookingModal({ coordinator, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    weddingDate: "",
    guestNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", content: "" });

    try {
      const bookingData = {
        coordinatorId: coordinator.id || coordinator._id,
        ...formData,
        guestNumber: parseInt(formData.guestNumber),
      };

      const result = await createBooking(bookingData);

      setMessage({
        type: "success",
        content:
          "Booking request submitted successfully! We will contact you soon.",
      });

      // Reset form
      setFormData({
        customerName: "",
        customerEmail: "",
        weddingDate: "",
        guestNumber: "",
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setMessage({ type: "", content: "" });
      }, 2000);
    } catch (error) {
      setMessage({
        type: "error",
        content:
          error.message ||
          "Failed to submit booking request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Book {coordinator.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl"
          >
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {message.content && (
            <div
              className={`mb-4 p-3 rounded-lg ${
                message.type === "success"
                  ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                  : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
              }`}
            >
              {message.content}
            </div>
          )}

          {/* Full Name */}
          <div className="mb-4">
            <label className="label">
              <FaUser className="inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="label">
              <FaEnvelope className="inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {/* Wedding Date */}
          <div className="mb-4">
            <label className="label">
              <FaCalendarAlt className="inline mr-2" />
              Wedding Date
            </label>
            <select
              name="weddingDate"
              value={formData.weddingDate}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">Select a date</option>
              {coordinator.availability?.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Guests */}
          <div className="mb-6">
            <label className="label">
              <FaUsers className="inline mr-2" />
              Number of Guests
            </label>
            <input
              type="number"
              name="guestNumber"
              value={formData.guestNumber}
              onChange={handleChange}
              className="input-field"
              min="1"
              max="500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 btn-primary flex items-center justify-center gap-2 transition-all duration-300 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : "hover:brightness-110"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
