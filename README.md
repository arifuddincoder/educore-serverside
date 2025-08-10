# EduCore Server - Course Management System Backend

## 🚀 Live Links
- **Client Website:** [https://b11a11-educore.web.app](https://b11a11-educore.web.app)
- **Server API:** [https://b11a11-educore-server.vercel.app](https://b11a11-educore-server.vercel.app)

## 📁 GitHub Repositories
- **Client:** [EduCore Client](https://github.com/arifuddincoder/educore-clientside)
- **Server:** [EduCore Server](https://github.com/arifuddincoder/educore-serverside)

## 🧪 How to Run Locally

To run the project locally on your machine, follow these steps carefully:

### 🚀 1. Clone & Run the Client

```bash
git clone https://github.com/arifuddincoder/educore_clientside.git
cd educore_clientside
npm install
npm run dev
```

### 🛠️ 2. Clone & Run the Server

```bash
git clone https://github.com/arifuddincoder/educore_serverside.git
cd educore_serverside
npm install
npm run dev
```

✅ **Note:** The client will not function properly unless the server is running.  
So make sure the server is started **before** using the client.

---

### 🔐 3. Setup `.env` Files

Create a `.env` file in both the client and server directories.

For **client**:
```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

For **server**:
```
PORT=5000
DB_USER=your_mongo_user
DB_PASS=your_mongo_pass
FB_SERVICE_KEY=base64_encoded_service_account_json
```

If there are `.env.example` files, copy them as `.env` and fill in the correct values.

---

Now you're all set!  
- Server should run at `http://localhost:5000`  
- Client should run at `http://localhost:5173`

---


## 🔧 Technology Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Admin SDK
- **Environment Config:** dotenv
- **Deployment:** Vercel

## 📦 Installed Packages
```json
"dependencies": {
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "firebase-admin": "^13.4.0",
  "mongodb": "^6.17.0"
}
```

## 📂 Project Structure
```
b11a11-educore-server/
├── index.js
├── .env
├── package.json
├── package-lock.json
└── node_modules/
```

## 📃 Environment Variables (.env)
```
PORT=3000
DB_USER=yourMongoUser
DB_PASS=yourMongoPass
FB_SERVICE_KEY=yourBase64EncodedServiceAccountJSON
```

## 🔐 Firebase Admin Setup
```js
const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString("utf8");
const serviceAccount = JSON.parse(decoded);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
```

## ✅ Token Middleware
```js
const verifyFirebaseToken = async (req, res, next) => { /* ... */ };
const verifyTokenEmail = async (req, res, next) => { /* ... */ };
```

## 🔢 API Endpoints
### Public:
- `GET /api/courses?filter=recent|popular` - Fetch courses
- `GET /api/courses/:id` - Get course details
- `POST /api/users` - Register user

### Protected (with Firebase Token):
> All protected routes require Firebase ID token in Authorization header:
> `Authorization: Bearer <token>`

- `GET /api/my-courses` - Courses added by the logged-in user
- `POST /api/courses` - Add course
- `PATCH /api/edit-course/:id` - Update course (only author)
- `DELETE /api/delete-course/:id` - Delete course (only author)
- `POST /api/enroll` - Enroll/Unenroll in course
- `GET /api/is-enrolled` - Check enrollment status
- `GET /api/my-enrollments` - List enrolled courses

## 🛡️ Security Notes
- Course author can edit/delete only their courses
- Enrolled course seat limit and duplicate enroll checks enforced
- Max 3 active enrollments per user
- Firebase token verifies route access

## 🚨 Deployment
- Platform: Vercel
- Includes environment setup via `.env` file

## 👨‍💼 Developer Info
**Md Arif Uddin**  
📧 arifuddincoder@gmail.com  

