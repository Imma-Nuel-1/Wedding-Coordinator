# Wedding Coordinator Marketplace MVP

A full-stack web application that connects couples with wedding coordinators, allowing them to browse profiles, view availability, and submit booking requests.

## 🚀 Live Demo

- **Frontend**: [Your deployment URL]
- **Backend API**: [Your API URL]

## 📋 Features

### ✅ Core Requirements

- **Coordinator Listing Page**: Browse all wedding coordinators with key details
- **Search & Filter**: Find coordinators by name, location, and price range
- **Coordinator Details**: View full profiles with bio, specialties, and availability
- **Booking System**: Submit booking requests with form validation
- **Mobile Responsive**: Works perfectly on desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes

### ⚡ Extra Features

- **Real-time Search**: Instant results as you type
- **Duplicate Prevention**: Prevents booking the same date twice
- **Modern UI**: Clean, professional design with animations
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Smooth loading animations

## 🛠 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database (with in-memory fallback)
- **Mongoose** - MongoDB object modeling

## 🏗 Project Structure

```
emmaproject/
├── frontend/          # Next.js React application
│   ├── app/
│   │   ├── components/
│   │   ├── coordinator/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/           # Express.js API server
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB (optional - will use in-memory storage if not available)

### 1. Clone the Repository

```bash
git clone [your-repo-url]
cd emmaproject
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will start on `https://wedding-coordinator-backend-jt8c.onrender.com`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `https://wedding-coordinator.vercel.app`

### 4. Environment Variables

#### Backend (.env)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wedding-coordinator
NODE_ENV=development
```

#### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=https://wedding-coordinator-backend-jt8c.onrender.com
```

## 📱 Usage

1. **Browse Coordinators**: Visit the homepage to see all available coordinators
2. **Search**: Use the search bar to find coordinators by name or location
3. **Filter**: Use the price filter to narrow down options
4. **View Details**: Click on any coordinator card to see full details
5. **Book**: Click "Book Now" to submit a booking request
6. **Toggle Theme**: Use the theme toggle in the header for dark mode

## 🎯 API Endpoints

### Coordinators

- `GET /api/coordinators` - Get all coordinators
- `GET /api/coordinators/:id` - Get coordinator by ID
- `GET /api/coordinators?search=term` - Search coordinators

### Bookings

- `POST /api/bookings` - Create a booking request
- `GET /api/bookings` - Get all bookings (admin)

### Health Check

- `GET /health` - Check server status

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach
- **Dark Mode**: System preference detection with manual toggle
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Loading States**: Skeleton screens and spinners
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time validation feedback

## 🔧 Development

### Running Tests

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### Code Quality

- ESLint configuration for code linting
- Prettier for code formatting
- TypeScript support ready

## 📦 Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Backend (Render/Heroku)

1. Push to GitHub
2. Connect to hosting platform
3. Set environment variables
4. Deploy

## 🧪 Testing

The application includes:

- Form validation testing
- API endpoint testing
- Responsive design testing
- Dark mode functionality testing
- Error handling testing

## 🔒 Security

- Input validation and sanitization
- CORS configuration
- Environment variable protection
- Error message sanitization

## 🐛 Known Issues

- None at this time

## 📝 Assumptions & Limitations

- Sample data is provided for demonstration
- MongoDB is optional (falls back to in-memory storage)
- No authentication system (can be added later)
- No payment processing (booking requests only)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

For questions or support, please contact [your-email@example.com]

---

**Note**: This is an MVP (Minimum Viable Product) designed for demonstration purposes. Additional features like authentication, payment processing, and advanced admin panels can be added based on requirements.
