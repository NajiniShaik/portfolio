import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { DataProvider } from "./Context/index.jsx";
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.VITE_BASE}>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);
