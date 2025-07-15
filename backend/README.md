# Wedding Coordinator Marketplace - Backend

## Overview

This is the backend API for the Wedding Coordinator Marketplace MVP. It provides endpoints for managing coordinators and booking requests.

## Features

- Get all coordinators with optional search functionality
- Get coordinator details by ID
- Create booking requests
- Prevent duplicate bookings
- MongoDB integration with fallback to in-memory storage

## API Endpoints

### Coordinators

- `GET /api/coordinators` - Get all coordinators
  - Query parameters: `?search=term` (optional)
- `GET /api/coordinators/:id` - Get coordinator by ID

### Bookings

- `POST /api/bookings` - Create a booking request
  - Body: `{ coordinatorId, customerName, customerEmail, weddingDate, guestNumber }`
- `GET /api/bookings` - Get all bookings

### Health Check

- `GET /health` - Check server status

## Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Update MongoDB URI if needed (optional - will use in-memory storage if not provided)

3. Run the server:

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## Database

The application supports both MongoDB and in-memory storage:

- If `MONGODB_URI` is provided, it will use MongoDB
- If not provided, it will use in-memory arrays for data storage

## Sample Data

The application includes sample coordinators data that will be automatically loaded.

## CORS

CORS is enabled for all origins to allow frontend communication.

## Error Handling

The API includes proper error handling for:

- Invalid requests
- Missing coordinators
- Duplicate bookings
- Unavailable dates
