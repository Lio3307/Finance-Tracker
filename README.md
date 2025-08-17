# FinT - Finance Tracker

FinT is a simple and intuitive finance tracker application designed to help you manage your personal finances effectively. This project was created as a way to practice and improve web development skills.

## Features

- **User Authentication:** Secure sign-in and sign-up functionality.
- **Dashboard:** A comprehensive dashboard to track your financial transactions and savings targets.
- **Transaction Management:** Easily add, edit, and delete your financial transactions.
- **Target Tracking:** Set savings goals, track your progress, and stay motivated.
- **Responsive Design:** A clean and responsive user interface that works seamlessly on both desktop and mobile devices.

## Tech & Tools

This project is built with a modern tech stack, including:

- **Frontend:**
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Vite](https://vitejs.dev/)
- **State Management:**
  - [Zustand](httpss://zustand-demo.pmnd.rs/)
- **Data Fetching:**
  - [React Query (TanStack Query)](https://tanstack.com/query/latest)
- **Routing:**
  - [React Router](https://reactrouter.com/)
- **Charts:**
  - [Chart.js](https://www.chartjs.org/)
- **Backend (as a Service):**
  - [Firebase](https://firebase.google.com/)
- **Animations:**
  - [Framer Motion](https://www.framer.com/motion/)

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18 or higher is recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/Lio3307/Finance-Tracker
cd fint
```


### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Setup Firebase

This project uses Firebase for backend services like authentication and database. You will need to set up your own Firebase project to run this application locally.

1. Go to the [Firebase Console](httpss://console.firebase.google.com/) and create a new project.
2. In your project settings, add a new web app.
3. You will be given a Firebase configuration object. Copy this object.
4. In the `src/config/` directory, create a new file named `firebase.ts`.
5. Add the following code to `src/config/firebase.ts`, replacing the placeholder values with your actual Firebase config:

```typescript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the project files for any code quality issues and prints the report to the console.

### `npm run preview`

Runs a local server to preview the production build from the `dist` directory. This is a good way to check if the production build is working correctly before deploying.
