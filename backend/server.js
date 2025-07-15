const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (using in-memory data if no MongoDB URI)
const MONGODB_URI = process.env.MONGODB_URI || null;

if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

// Coordinator Schema
const coordinatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  profilePhoto: { type: String, required: true },
  bio: { type: String, required: true },
  availability: [{ type: String }], // Array of available dates
  rating: { type: Number, default: 5 },
  experience: { type: String, required: true },
  specialties: [{ type: String }],
  contact: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

const bookingSchema = new mongoose.Schema({
  coordinatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coordinator",
    required: true,
  },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  weddingDate: { type: String, required: true },
  guestNumber: { type: Number, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

// Models
const Coordinator =
  mongoose.models.Coordinator ||
  mongoose.model("Coordinator", coordinatorSchema);
const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

// In-memory storage for fallback
let coordinators = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "New York, NY",
    price: 2500,
    profilePhoto:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "With over 8 years of experience in wedding planning, Sarah specializes in creating unforgettable romantic ceremonies. She has coordinated over 200 weddings and is known for her attention to detail and ability to bring couples' dreams to life.",
    availability: ["2024-08-15", "2024-09-20", "2024-10-05", "2024-11-12"],
    rating: 4.9,
    experience: "8+ years",
    specialties: [
      "Romantic Ceremonies",
      "Outdoor Weddings",
      "Destination Weddings",
    ],
    contact: {
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Los Angeles, CA",
    price: 3200,
    profilePhoto:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Michael is a luxury wedding coordinator with a passion for creating sophisticated and elegant celebrations. His modern approach and excellent vendor relationships make him a top choice for discerning couples.",
    availability: ["2024-08-22", "2024-09-14", "2024-10-18", "2024-11-25"],
    rating: 4.8,
    experience: "6+ years",
    specialties: ["Luxury Weddings", "Modern Ceremonies", "Corporate Events"],
    contact: {
      email: "michael.chen@email.com",
      phone: "+1 (555) 234-5678",
    },
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    location: "Miami, FL",
    price: 2800,
    profilePhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Emily brings creativity and cultural expertise to every wedding she coordinates. She specializes in multicultural celebrations and beach weddings, making each event unique and memorable.",
    availability: ["2024-08-10", "2024-09-05", "2024-10-15", "2024-11-08"],
    rating: 4.7,
    experience: "5+ years",
    specialties: [
      "Beach Weddings",
      "Multicultural Celebrations",
      "Tropical Themes",
    ],
    contact: {
      email: "emily.rodriguez@email.com",
      phone: "+1 (555) 345-6789",
    },
  },
  {
    id: "4",
    name: "David Thompson",
    location: "Chicago, IL",
    price: 2200,
    profilePhoto:
      "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "David is known for his organized approach and budget-friendly solutions. He helps couples create beautiful weddings without breaking the bank, while still maintaining high quality and style.",
    availability: ["2024-08-18", "2024-09-25", "2024-10-12", "2024-11-15"],
    rating: 4.6,
    experience: "4+ years",
    specialties: ["Budget Weddings", "Rustic Themes", "Intimate Ceremonies"],
    contact: {
      email: "david.thompson@email.com",
      phone: "+1 (555) 456-7890",
    },
  },
  {
    id: "5",
    name: "Lisa Park",
    location: "Seattle, WA",
    price: 2900,
    profilePhoto:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Lisa is a detail-oriented coordinator who excels at managing complex timelines and large guest lists. Her calm demeanor and problem-solving skills ensure smooth wedding days.",
    availability: ["2024-08-12", "2024-09-18", "2024-10-22", "2024-11-18"],
    rating: 4.9,
    experience: "7+ years",
    specialties: ["Large Weddings", "Garden Parties", "Vintage Themes"],
    contact: {
      email: "lisa.park@email.com",
      phone: "+1 (555) 567-8901",
    },
  },
  {
    id: "6",
    name: "James Wilson",
    location: "Austin, TX",
    price: 2400,
    profilePhoto:
      "https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "James combines traditional wedding planning with modern technology. He offers virtual planning sessions and digital coordination tools to make the planning process seamless.",
    availability: ["2024-08-28", "2024-09-12", "2024-10-08", "2024-11-22"],
    rating: 4.8,
    experience: "5+ years",
    specialties: [
      "Tech-Savvy Planning",
      "Country Weddings",
      "Live Music Events",
    ],
    contact: {
      email: "james.wilson@email.com",
      phone: "+1 (555) 678-9012",
    },
  },
];

let bookings = [];

// Routes

// Get all coordinators
app.get("/api/coordinators", async (req, res) => {
  try {
    const { search } = req.query;

    if (MONGODB_URI) {
      let query = {};
      if (search) {
        query = {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
          ],
        };
      }
      const coordinators = await Coordinator.find(query);
      res.json(coordinators);
    } else {
      let filteredCoordinators = coordinators;
      if (search) {
        filteredCoordinators = coordinators.filter(
          (coord) =>
            coord.name.toLowerCase().includes(search.toLowerCase()) ||
            coord.location.toLowerCase().includes(search.toLowerCase())
        );
      }
      res.json(filteredCoordinators);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get coordinator by ID
app.get("/api/coordinators/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (MONGODB_URI) {
      const coordinator = await Coordinator.findById(id);
      if (!coordinator) {
        return res.status(404).json({ error: "Coordinator not found" });
      }
      res.json(coordinator);
    } else {
      const coordinator = coordinators.find((coord) => coord.id === id);
      if (!coordinator) {
        return res.status(404).json({ error: "Coordinator not found" });
      }
      res.json(coordinator);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a booking
app.post("/api/bookings", async (req, res) => {
  try {
    const {
      coordinatorId,
      customerName,
      customerEmail,
      weddingDate,
      guestNumber,
    } = req.body;

    // Validate required fields
    if (
      !coordinatorId ||
      !customerName ||
      !customerEmail ||
      !weddingDate ||
      !guestNumber
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if coordinator exists
    let coordinator;
    if (MONGODB_URI) {
      coordinator = await Coordinator.findById(coordinatorId);
    } else {
      coordinator = coordinators.find((coord) => coord.id === coordinatorId);
    }

    if (!coordinator) {
      return res.status(404).json({ error: "Coordinator not found" });
    }

    // Check if date is available
    if (!coordinator.availability.includes(weddingDate)) {
      return res.status(400).json({ error: "Selected date is not available" });
    }

    // Check for duplicate bookings
    let existingBooking;
    if (MONGODB_URI) {
      existingBooking = await Booking.findOne({ coordinatorId, weddingDate });
    } else {
      existingBooking = bookings.find(
        (booking) =>
          booking.coordinatorId === coordinatorId &&
          booking.weddingDate === weddingDate
      );
    }

    if (existingBooking) {
      return res.status(400).json({ error: "This date is already booked" });
    }

    // Create booking
    const bookingData = {
      coordinatorId,
      customerName,
      customerEmail,
      weddingDate,
      guestNumber,
      status: "pending",
    };

    let newBooking;
    if (MONGODB_URI) {
      newBooking = new Booking(bookingData);
      await newBooking.save();
    } else {
      newBooking = {
        id: Date.now().toString(),
        ...bookingData,
        createdAt: new Date(),
      };
      bookings.push(newBooking);
    }

    res.status(201).json({
      message: "Booking request submitted successfully!",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all bookings
app.get("/api/bookings", async (req, res) => {
  try {
    if (MONGODB_URI) {
      const bookings = await Booking.find().populate("coordinatorId");
      res.json(bookings);
    } else {
      res.json(bookings);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Initialize database with sample data (if using MongoDB)
async function initializeDatabase() {
  if (MONGODB_URI) {
    try {
      const count = await Coordinator.countDocuments();
      if (count === 0) {
        await Coordinator.insertMany(
          coordinators.map((coord) => {
            const { id, ...coordData } = coord; // Remove the 'id' field
            return coordData;
          })
        );
        console.log("Sample coordinators added to database");
      }
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  }
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initializeDatabase();
});
