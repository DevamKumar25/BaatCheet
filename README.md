# 💬 BaatCheet - Language Learning & Exchange Platform
[Live Demo](https://baatcheet-hz9b.onrender.com)

Experience lightning-fast conversations that feel like magic ⚡ Connect with native speakers worldwide, practice new languages through real conversations, and build meaningful friendships—all through an elegant, intuitive interface. Built with cutting-edge MERN stack technology, enhanced by Stream.io's powerful chat infrastructure and Socket.IO real-time engine for seamless, lag-free language exchange that just works.

## ✨ Features
| Feature | Description |
|---------|-------------|
| 🌍 **Language Exchange** | Connect with native speakers worldwide for authentic language practice |
| 🔐 **Smart Profile System** | Set native & learning languages, location, and bio for perfect partner matching |
| 👥 **Intelligent Partner Matching** | Discover language exchange partners based on your learning goals and profile |
| 💬 **Real-Time Video Chat** | Practice speaking with video calls and screen sharing capabilities |
| 🔔 **Smart Notifications** | Get notified about new connections, messages, and friend requests |
| 🎨 **Random Avatar Generator** | Beautiful, unique avatars generated automatically for each user |
| 🏷️ **Language Tags** | Clear visual indicators showing native and learning languages |
| 📱 **Responsive Design** | Mobile-first responsive UI that works seamlessly across all devices |
| 👫 **Friend System** | Send friend requests, build your language learning network |
| 🌐 **Global Community** | Connect with learners from different countries and cultures |

## 🏗️ Tech Stack
| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18 · Vite · TailwindCSS · Daisy UI · Socket.IO Client · Axios · React Router |
| **Backend** | Node.js 18 · Express 4 · Socket.IO · Multer · JWT · bcrypt · MongoDB/Mongoose |
| **Database** | MongoDB Atlas · Mongoose ODM |
| **Auth** | JWT Tokens · bcrypt password hashing |
| **Real-time** | Socket.IO for bidirectional communication |
| **File Storage** | Multer · Cloudinary (optional) |
| **Deployment** | Render (Full-stack) · MongoDB Atlas · Cloudinary (optional) |
| **Dev Tools** | nodemon · concurrently · dotenv · cors |

## 🚀 Quick Start (Local)

### 1. Clone & install
```bash
git clone https://github.com/DevamKumar25/BaatCheet.git
cd BaatCheet

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 2. Environment variables (root/.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/baatcheet

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Cloudinary (optional - for file uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### 3. Run both servers
```bash
# Backend (port 5000)
npm run dev          # nodemon server.js

# Frontend (port 5173) - in new terminal
cd client && npm run dev
```

Open http://localhost:5173 → Register/Login → Complete your language profile → Start connecting with language partners!

🌐 **Live Demo**: Visit [https://baatcheet-hz9b.onrender.com](https://baatcheet-hz9b.onrender.com) to start your language learning journey!

## 📸 Screenshots

### Authentication Pages
| Sign Up | Sign In |
|---------|---------|
| ![Sign Up](screenshots/signup.png) | ![Sign In](screenshots/signin.png) |

### Main Application
| Language Partner Discovery | Profile Setup |
|----------------------------|---------------|
| ![Partner Discovery](screenshots/home.png) | ![Profile Setup](screenshots/profile.png) |

### Communication Features  
| Video Chat | Notifications |
|------------|---------------|
| ![Video Chat](screenshots/video-chat.png) | ![Notifications](screenshots/notifications.png) |

## 📂 Folder Structure
```
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
└── client/                   # Frontend (React + Vite)
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
```

## 🛠️ Important Scripts
| Location | Script | Purpose |
|----------|--------|---------|
| **root** | `npm run dev` | Start backend with nodemon (auto-reload) |
| **root** | `npm run start` | Production server start |
| **root** | `npm run build` | Build both frontend and backend |
| **client** | `npm run dev` | Start Vite dev server (hot-reload) |
| **client** | `npm run build` | Build production frontend |
| **client** | `npm run preview` | Preview production build |

## 🔒 Environment Variables
| Key | Description | Required |
|-----|-------------|----------|
| `PORT` | Server port (default: 5000) | ❌ |
| `MONGODB_URI` | MongoDB Atlas connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT token signing | ✅ |
| `CLIENT_URL` | Frontend URL for CORS policy | ✅ |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name (for file uploads) | ❌ |
| `CLOUDINARY_API_KEY` | Cloudinary API key | ❌ |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | ❌ |

⚠️ **Security Note**: Never commit `.env` file to version control. Use `.env.example` for reference.

## 🧪 Testing the Application

### Local Development
1. Register a new account or login with existing credentials
2. Create a new chat room or join existing ones
3. Start messaging in real-time with other users
4. Test file uploads and media sharing
5. Check mobile responsiveness on different screen sizes

### Key Features to Test
- ✅ User registration and authentication
- ✅ Real-time message delivery
- ✅ Multiple chat rooms functionality
- ✅ Online/offline status updates
- ✅ File upload and sharing
- ✅ Responsive design on mobile devices

## 🖥️ Deployment

| Layer | Service | Configuration |
|-------|---------|---------------|
| **Full-stack App** | Render | Node.js 18 · Build: `npm install` · Start: `npm start` |
| **Database** | MongoDB Atlas | Free M0 cluster · Whitelist IP addresses |
| **File Storage** | Cloudinary | Optional for media uploads |

### Deployment Steps
1. **Full-stack App (Render)**:
   - Connect GitHub repository
   - Build command: `npm install`
   - Start command: `npm start`
   - Add all environment variables
   - Render automatically serves both frontend and backend

2. **Database (MongoDB Atlas)**:
   - Create free cluster
   - Whitelist deployment server IPs
   - Update connection string in environment variables

## 🎨 Socket.IO Events

### Client → Server
| Event | Payload | Description |
|-------|---------|-------------|
| `join_room` | `{ roomId, userId }` | Join a specific chat room |
| `send_message` | `{ content, roomId, sender }` | Send message to room |
| `typing_start` | `{ roomId, username }` | User started typing |
| `typing_stop` | `{ roomId, username }` | User stopped typing |
| `leave_room` | `{ roomId, userId }` | Leave chat room |

### Server → Client
| Event | Payload | Description |
|-------|---------|-------------|
| `message_received` | `{ message, sender, timestamp }` | New message in room |
| `user_joined` | `{ username, roomId }` | User joined the room |
| `user_left` | `{ username, roomId }` | User left the room |
| `typing_indicator` | `{ username, isTyping }` | Show/hide typing indicator |
| `user_status` | `{ userId, status }` | Online/offline status update |

## 🤝 Contributing
We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Test your changes thoroughly
- Update documentation if needed
- Ensure mobile responsiveness

## 🐛 Known Issues & Limitations
- File upload size limited to 10MB
- Message history loads last 50 messages by default
- Emoji reactions coming in future updates
- Voice/video calling planned for v2.0

## 🙏 Credits & Acknowledgments
- **Socket.IO** – Real-time bidirectional communication
- **MongoDB** – NoSQL database for storing messages and user data
- **React** – Frontend framework for building user interfaces
- **Express.js** – Backend web framework for Node.js
- **JWT** – Secure token-based authentication
- **Vite** – Fast build tool and development server

## 📜 License
MIT License - Free for personal and commercial use. See [LICENSE](LICENSE) file for details.

## 📞 Support & Contact
- **Email**: devamkumar758@gmail.com
- **GitHub**: [@DevamKumar25](https://github.com/DevamKumar25)
- **Issues**: [Report bugs or request features](https://github.com/DevamKumar25/BaatCheet/issues)

---

**Happy Chatting! 💬**

Feel free to ⭐ this repository if you found it helpful, and don't forget to follow for more awesome projects!
