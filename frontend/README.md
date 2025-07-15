# Wedding Coordinator Marketplace - Frontend

## Overview

This is the frontend application for the Wedding Coordinator Marketplace MVP built with Next.js 14, React, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Dark Mode**: Toggle between light and dark themes
- **Coordinator Listing**: Browse all available wedding coordinators
- **Search & Filter**: Search by name/location and filter by price range
- **Detailed View**: View coordinator profiles with full information
- **Booking System**: Submit booking requests with form validation
- **Real-time Updates**: Dynamic availability checking
- **Modern UI**: Clean, professional design with animations

## Tech Stack

- **Next.js 14**: React framework with App Router
- **React 18**: User interface library
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **Axios**: HTTP client for API calls

## Setup Instructions

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:

   ```bash
   cp .env.local.example .env.local
   ```

4. Update the environment variables in `.env.local`:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.js       # Navigation header with theme toggle
│   │   ├── Hero.js         # Hero section with search
│   │   ├── CoordinatorList.js # Coordinator listing with filters
│   │   ├── CoordinatorCard.js # Individual coordinator card
│   │   ├── BookingModal.js    # Booking form modal
│   │   └── ThemeProvider.js   # Dark mode context provider
│   ├── coordinator/
│   │   └── [id]/
│   │       └── page.js     # Coordinator detail page
│   ├── utils/
│   │   └── api.js          # API utility functions
│   ├── globals.css         # Global styles and Tailwind utilities
│   ├── layout.js           # Root layout component
│   └── page.js             # Home page
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## API Integration

The frontend communicates with the backend API through the following endpoints:

- `GET /api/coordinators` - Fetch all coordinators
- `GET /api/coordinators/:id` - Fetch coordinator details
- `POST /api/bookings` - Submit booking request

## Features in Detail

### Search & Filter

- Real-time search by coordinator name or location
- Price range filtering (Under $2,500, $2,500-$3,000, Over $3,000)
- Results count display

### Coordinator Cards

- Profile photo display
- Key information (name, location, price, rating)
- Specialties tags
- Responsive grid layout

### Coordinator Details

- Full profile information
- Available dates calendar
- Contact information
- Booking form integration

### Booking System

- Form validation
- Availability checking
- Duplicate booking prevention
- Success/error messaging

### Dark Mode

- System preference detection
- Manual toggle option
- Persistent theme selection
- Smooth theme transitions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Set environment variables in Netlify dashboard

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the generated files to your hosting provider

## Environment Variables

- `NEXT_PUBLIC_API_URL`: Backend API URL (required)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
