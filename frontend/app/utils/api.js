const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://wedding-coordinator-backend-jt8c.onrender.com";

export async function getCoordinators(searchTerm = "") {
  try {
    const url = new URL(`${API_BASE_URL}/api/coordinators`);
    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching coordinators:", error);
    throw error;
  }
}

export async function getCoordinator(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/coordinators/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching coordinator:", error);
    throw error;
  }
}

export async function createBooking(bookingData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to create booking");
    }

    return result;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
}

export async function getBookings() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
}
