# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Here’s a polished and informative README for your GitHub repository that showcases your ReactJS authentication flow using cookies:

---

# 🌐 ReactJS Portfolio Authentication

This project implements a simple authentication system for a ReactJS portfolio website using cookies for user session management. It includes **Sign Up**, **Sign In**, and **Session Persistence** features, built with React Router and Context API.

## 🚀 Features

- 🔐 **User Registration**: Sign up with a name and password, stored securely in cookies.
- 🔑 **User Login**: Validate credentials and maintain login state using cookies.
- 🧠 **Global State Management**: Context API tracks login status and theme preferences.
- 🧁 **Cookie-Based Session**: No backend required—user data and session info stored in browser cookies.
- 🎨 **Responsive UI**: Styled with modular CSS for clean layout and usability.

## 📁 Project Structure

```
src/
├── Context/
│   └── index.jsx          # Context provider for theme and login state
├── SignUp/
│   └── index.jsx          # Sign-up component with cookie-based user storage
├── SignIn/
│   └── index.jsx          # Sign-in component with credential validation
├── index.css              # Shared styles
```

## 🛠️ Technologies Used

- **ReactJS** (with Hooks)
- **React Router v6**
- **Context API**
- **js-cookie** for cookie management
- **CSS Modules** for styling

## 🧪 How It Works

### Sign Up Flow
1. User enters name and password.
2. Form validates non-empty fields.
3. Checks if user already exists in `users` cookie.
4. If not, adds user to cookie and redirects to Sign In.

### Sign In Flow
1. User enters credentials.
2. Validates against stored users in cookie.
3. If matched, sets `loggedInUser` cookie and updates global login state.
4. Redirects to portfolio page.

### Context Provider
- Initializes login state from `loggedInUser` cookie.
- Persists theme preference in `localStorage`.

## 📦 Installation

```bash
git clone https://github.com/your-username/react-auth-cookie.git
cd react-auth-cookie
npm install
npm start
```

## 🔄 Deployment

This project is ready to deploy on GitHub Pages, Vercel, or Netlify. Just ensure your routing base path (e.g., `/new_portfolio`) is correctly configured in `react-router-dom`.

## 🧠 Notes

- This is a **frontend-only** authentication demo. For production, use secure backend authentication and encrypted storage.
- Cookie expiration is set to 2 days for both user data and session.

## 📸 Screenshots

> Add screenshots of your Sign Up and Sign In pages here for visual reference.

<img width="1618" height="828" alt="Screenshot 2025-10-19 175501" src="https://github.com/user-attachments/assets/62251647-5027-4d75-984a-09fcf651c238" />

---<img width="1456" height="808" alt="Screenshot 2025-10-19 175607" src="https://github.com/user-attachments/assets/165feeb6-6fe1-429d-b206-687456b4f640" />


Let me know if you'd like help writing a deployment guide, adding screenshots, or converting this into a markdown file!
