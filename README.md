# EduCore Server - Course Management System Backend

## 🚀 Live Links
- **Client Website:** [https://b11a11-educore.web.app](https://b11a11-educore.web.app)
- **Server API:** [https://b11a11-educore-server.vercel.app](https://b11a11-educore-server.vercel.app)

## 📁 GitHub Repositories
- **Client:** [EduCore Client](https://github.com/arif128551/educore_clientside)
- **Server:** [EduCore Server](https://github.com/arif128551/educore_serverside)

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
📧 xossarif@gmail.com  
Assignment Project for Programming Hero - Assignment 11

