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


## 📄 License

[MIT License](LICENSE)

---

## 📷 Screenshots

<img width="1710" alt="image" src="https://github.com/user-attachments/assets/eb099c7d-90d0-472d-8608-a32e3b2afa94" />
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/a48c1ec7-5cf9-4020-802e-98d8881aa75a" />
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/9386e6a9-fd30-478f-9cc2-0ac817b2d63e" />
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/51b5424d-fff3-4118-a2bc-6bfaf952dc2c" />
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/2387a3c0-41f9-434f-81fa-a2bac20b6f73" />
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/afca4bd0-734d-4bfa-89bd-cbe9a6070221" />





