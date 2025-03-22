# ncu-uber

A web application that facilitates carpooling among students, reducing transportation costs by enabling users to share Uber rides efficiently. Designed specifically for National Central University students facing transportation challenges.

---

## 🚀 Features

- Create and manage carpool groups
- Real-time location sharing with Google Maps
- Invite students to join carpool groups
- Secure authentication (login/signup)
- CoffeeMap integration (for coffee shop meetups)

---

## 🏗️ Tech Stack

- Frontend: React.js + React Router
- Backend: Node.js + Express.js
- Database: MongoDB + Mongoose
- Deployment: Heroku (or your cloud provider)
- Others: Axios, Context API, Google Maps API

---

## ⚙️ Installation & Running

### 1️⃣ Clone & install dependencies

```bash
git clone git@github.com:hsiangwang0129/ncu-uber.git
cd ncu-uber

# Install frontend dependencies
npm install

# Move to server directory and install backend dependencies
cd server
npm install
```

### 2️⃣ Setup environment variables

Create `.env` files in both `/ncu-uber/` and `/server/` folders.

```bash
# ncu-uber/.env
REACT_APP_API_URL=http://localhost:5000

# server/.env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 3️⃣ Running the application

#### 🚀 Start Backend (Express API)
```bash
cd server
node index.js
```

#### 🚀 Start Frontend (React)
```bash
cd ncu-uber
cd src
npm run dev
```

---

## 📝 Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'feat: add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

[MIT License](LICENSE)

---

## 📷 Screenshots

> _Add some UI screenshots here later to enhance documentation._

