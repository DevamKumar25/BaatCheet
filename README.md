💬 BaatCheet - LANGUAGE EXCHANGE PLATFORM

[![Live Demo](https://img.shields.io/badge/Live-Demo-27AE60?style=for-the-badge&logo=vercel&logoColor=white)](https://baatcheet-hz9b.onrender.com)


Experience lightning-fast conversations that feel like magic ⚡ Create vibrant chat communities, share moments instantly, and connect with friends across the globe—all through an elegant, intuitive interface. Built with cutting-edge MERN stack technology, enhanced by Stream.io's powerful chat infrastructure and Socket.IO real-time engine for seamless, lag-free messaging that just works.

✨ Features
Feature	Description
🔐 Auth & User Management	Secure user registration, login, and profile management with JWT authentication
💬 Real-Time Messaging	Instant messaging powered by Socket.IO with delivery status and typing indicators
🏠 Chat Rooms	Create public/private rooms, join existing ones, and manage room settings
👥 User Presence	See who's online, offline status, and last seen timestamps
📱 Responsive Design	Mobile-first responsive UI that works seamlessly across all devices
🔔 Notifications	Real-time push notifications for new messages and mentions
🎨 Modern UI/UX	Clean, intuitive interface built with React and styled with CSS/TailwindCSS
🖼️ File Sharing	Share images, documents, and media files in chat conversations
🔍 Message Search	Search through conversation history and find specific messages
🌐 Full-stack application hosted on Render · Database → MongoDB Atlas
🏗️ Tech Stack
Layer	Technologies
Frontend	React 18 · Vite · TailwindCSS · Daisy UI · Socket.IO Client · Axios · React Router
Backend	Node.js 18 · Express 4 · Socket.IO · Multer · JWT · bcrypt
Database	MongoDB Atlas · Mongoose ODM
Auth	JWT Tokens · bcrypt password hashing
Real-time	Socket.IO for bidirectional communication
File Storage	Multer · Cloudinary (optional)
Deployment Render · MongoDB Atlas
Dev Tools	nodemon · concurrently · dotenv · cors
🚀 Quick Start (Local)
1. Clone & install
bash
git clone https://github.com/DevamKumar25/BaatCheet.git
cd BaatCheet

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
2. Environment variables (root/.env)
env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/baatcheet

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
3. Run both servers
bash
# Backend (port 5000)
npm run dev          # nodemon server.js

# Frontend (port 5173) - in new terminal
cd frontend && npm run dev
Open http://localhost:5173 → Register/Login → Start chatting!

🌐 Live Demo: Visit https://baatcheet-hz9b.onrender.com to try the live application!

📂 Folder Structure
BaatCheet/
│
├── server.js                 # Express server entry point with Socket.IO
├── .env                      # Environment variables (keep secret!)
├── package.json              # Backend dependencies and scripts
│
├── config/
│   ├── database.js           # MongoDB connection configuration
│   └── cloudinary.js         # Cloudinary setup (if used)
│
├── models/
│   ├── User.js               # User schema (username, email, password)
│   ├── Message.js            # Message schema (content, sender, room, timestamp)
│   └── Room.js               # Chat room schema (name, description, members)
│
├── routes/
│   ├── authRoutes.js         # Authentication routes (register, login, logout)
│   ├── userRoutes.js         # User management routes (profile, search)
│   ├── messageRoutes.js      # Message CRUD operations
│   └── roomRoutes.js         # Room management routes
│
├── controllers/
│   ├── authController.js     # Handle auth logic (register, login, JWT)
│   ├── userController.js     # User profile and search functionality
│   ├── messageController.js  # Message handling and history
│   └── roomController.js     # Room creation and management
│
├── middleware/
│   ├── auth.js               # JWT authentication middleware
│   ├── upload.js             # Multer file upload middleware
│   └── validation.js         # Input validation middleware
│
├── socket/
│   └── socketHandler.js      # Socket.IO event handlers
│
└── Frontend/                   # Frontend (React + Vite)
    ├── public/               # Static assets
    ├── src/
    │   ├── components/       # Reusable UI components
    │   │   ├── Chat/         # Chat-related components
    │   │   ├── Auth/         # Login/Register forms
    │   │   ├── Layout/       # Navigation, Sidebar, Header
    │   │   └── Common/       # Shared UI components
    │   ├── pages/            # Main application pages
    │   │   ├── Home.jsx      # Landing/Dashboard page
    │   │   ├── Chat.jsx      # Main chat interface
    │   │   ├── Login.jsx     # Login page
    │   │   └── Register.jsx  # Registration page
    │   ├── context/          # React Context (Auth, Socket, Theme)
    │   ├── hooks/            # Custom React hooks
    │   ├── services/         # API calls and Socket.IO client setup
    │   ├── utils/            # Helper functions and constants
    │   └── styles/           # CSS/TailwindCSS styles
    └── package.json          # Frontend dependencies
🛠️ Important Scripts
Location	Script	Purpose
root	npm run dev	Start backend with nodemon (auto-reload)
root	npm run start	Production server start
root	npm run build	Build both frontend and backend
client	npm run dev	Start Vite dev server (hot-reload)
client	npm run build	Build production frontend
client	npm run preview	Preview production build
🔒 Environment Variables
Key	Description	Required
PORT	Server port (default: 5000)	❌
MONGODB_URI	MongoDB Atlas connection string	✅
JWT_SECRET	Secret key for JWT token signing	✅
CLIENT_URL	Frontend URL for CORS policy	✅
⚠️ Security Note: Never commit .env file to version control. Use .env.example for reference.

🧪 Testing the Application
Local Development
Register a new account or login with existing credentials
Create a new chat room or join existing ones
Start messaging in real-time with other users
Test file uploads and media sharing
Check mobile responsiveness on different screen sizes
Key Features to Test
✅ User registration and authentication
✅ Real-time message delivery
✅ Multiple chat rooms functionality
✅ Online/offline status updates
✅ File upload and sharing
✅ Responsive design on mobile devices
🖥️ Deployment
Layer	Service	Configuration
Frontend	Vercel	Connect GitHub repo → Auto-deploy from /client
Backend	Render/Railway	Node.js 18 · npm start · Auto-deploy from root
Database	MongoDB Atlas	Free M0 cluster · Whitelist IP addresses
Domain	Custom Domain	Point to Vercel for frontend, API subdomain to backend
Deployment Steps
Frontend (Vercel):
Connect GitHub repository
Set root directory to client
Build command: npm run build
Environment variables: Add API URL
Backend (Render/Railway):
Connect GitHub repository
Build command: npm install
Start command: npm start
Add all environment variables
Database (MongoDB Atlas):
Create free cluster
Whitelist deployment server IPs
Update connection string in environment variables
🎨 Socket.IO Events
Client → Server
Event	Payload	Description
join_room	{ roomId, userId }	Join a specific chat room
send_message	{ content, roomId, sender }	Send message to room
typing_start	{ roomId, username }	User started typing
typing_stop	{ roomId, username }	User stopped typing
leave_room	{ roomId, userId }	Leave chat room
Server → Client
Event	Payload	Description
message_received	{ message, sender, timestamp }	New message in room
user_joined	{ username, roomId }	User joined the room
user_left	{ username, roomId }	User left the room
typing_indicator	{ username, isTyping }	Show/hide typing indicator
user_status	{ userId, status }	Online/offline status update
🤝 Contributing
We welcome contributions! Here's how to get started:

Fork the repository
Create a feature branch: git checkout -b feature/amazing-feature
Commit changes: git commit -m 'Add amazing feature'
Push to branch: git push origin feature/amazing-feature
Open a Pull Request
Development Guidelines
Follow existing code style and conventions
Write clear commit messages
Test your changes thoroughly
Update documentation if needed
Ensure mobile responsiveness
🐛 Known Issues & Limitations
File upload size limited to 10MB
Message history loads last 50 messages by default
Emoji reactions coming in future updates
Voice/video calling planned for v2.0
🙏 Credits & Acknowledgments
Socket.IO – Real-time bidirectional communication
MongoDB – NoSQL database for storing messages and user data
React – Frontend framework for building user interfaces
Express.js – Backend web framework for Node.js
JWT – Secure token-based authentication
Vite – Fast build tool and development server
📜 License
MIT License - Free for personal and commercial use. See LICENSE file for details.

📞 Support & Contact
Email: devamkumar758@gmail.com
GitHub: @DevamKumar25
Issues: Report bugs or request features
Happy Chatting! 💬

Feel free to ⭐ this repository if you found it helpful, and don't forget to follow for more awesome projects!

