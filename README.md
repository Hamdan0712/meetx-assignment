# 📦 MeetX Backend Developer Assignment

A complete activity booking backend built using **Node.js**, **Express.js**, and **MongoDB**, featuring secure user authentication with JWT.

---

## ✨ Features

- 🔐 User Registration & Login with JWT
- 📋 Public Activity Listing
- 📥 Secure Activity Booking (auth required)
- 📦 View "My Bookings"
- 🔑 Password Hashing using `bcryptjs`
- ✅ Input Validation with `express-validator`
- 📁 Clean MVC Folder Structure
- 🧪 Postman Collection included for testing

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/assignment-mixup.git
cd assignment-mixup
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```bash
touch .env
```

Add the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
```

---

### 4. Seed Sample Activities (Optional)

#### 🛠 Option A: Use the provided `seed.js` script

```bash
node seed.js
```

This will insert the following 3 sample activities into your `activities` collection:

```js
[
  {
    title: "Cricket Match",
    description: "T20 League Match at the stadium",
    location: "Chennai",
    dateTime: "2025-05-10T16:00:00Z",
  },
  {
    title: "Football Friendly",
    description: "Friendly match at the local turf",
    location: "Bangalore",
    dateTime: "2025-05-12T18:00:00Z",
  },
  {
    title: "Movie Night",
    description: "Latest blockbuster screening at PVR",
    location: "PVR Velachery",
    dateTime: "2025-05-11T20:00:00Z",
  },
];
```

#### 🛠 Option B: Manual insertion via MongoDB Atlas

You can insert documents manually into the `activities` collection using this JSON structure:

```json
{
  "title": "Cricket Match",
  "description": "T20 League Match at the stadium",
  "location": "Chennai",
  "dateTime": "2025-05-10T16:00:00Z"
}
```

Repeat for each activity.

---

### 5. Run the App

```bash
npm run dev
```

---

## 📬 API Endpoints

| Method | Endpoint                    | Protected | Description          |
| ------ | --------------------------- | --------- | -------------------- |
| POST   | /api/auth/register          | ❌        | Register a user      |
| POST   | /api/auth/login             | ❌        | Login and get token  |
| GET    | /api/activities             | ❌        | List all activities  |
| POST   | /api/activities/book        | ✅        | Book an activity     |
| GET    | /api/activities/my-bookings | ✅        | View user's bookings |

> ✅ Protected routes require `x-auth-token` in headers.

---

## 🧪 Postman Collection

✅ Included in this repo: `Meetx.postman_collection.json`  
📥 Import it into Postman to test all endpoints easily.

---

## 🛠 Built With

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- bcryptjs for password hashing
- express-validator for validation

---

## 🙋 About Me

**Mohammed Hamdan**  
📧 hamdanaveed07@gmail.com  
🌐 [LinkedIn](https://linkedin.com/in/YOUR-PROFILE)
