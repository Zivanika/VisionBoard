<h1 align="center">Visionboard - Dashboard with Google Sheets Integration</h1>

<p>This project is a web-based dashboard that integrates with Google Sheets to display and manage data dynamically. It supports user authentication, real-time updates, and dynamic column additions on the dashboard.
</p>

[Visit Now]() 🚀

## 🖥 Tech Stack
*Frontend:*

![nextjs](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)&nbsp;
![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;
![shadcnUI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)&nbsp;
![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7)&nbsp;

*Backend:*

![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![expressjs](https://img.shields.io/badge/Express.js-F7DF1E?style=for-the-badge&logo=express&logoColor=black)&nbsp;


*Deployed On:*

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)



## 📌 Screenshots:
![signin](/img/login.jpg)
![home](/img/home.jpg)
![table](/img/table.jpg)
![tableview](/img/tableview.jpg)



## 🚀 Getting Started:

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1 or later)
- [Docker](https://www.docker.com/get-started)

## **Installation & Setup**

### **Prerequisites**

- Node.js & npm
- MongoDB
- Google Cloud Account (for Sheets API)

### **1. Clone the Repository**

```bash
git clone https://github.com/zivanika/visionboard.git
cd visionboard
```

### **2. Setup Backend**

```bash
cd backend
npm install
```

Create a **`.env`** file in the `backend/` directory and add the following:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_PRIVATE_KEY = your_google_private_key (for google sheet api you can get it from api and services library. search for google sheet)
```

Run the backend:

```bash
npm start
```

---

### **3. Setup Frontend**

```bash
cd frontend
npm install or npm install --leagacy-per-deps
```

Create a **`.env.local`** file in the `frontend/` directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_API_WS_URL = ws://localhost:8000

```

Run the frontend:

```bash
npm run dev
```

---


© 2025 Harshita Barnwal


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)