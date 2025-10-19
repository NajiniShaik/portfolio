import { BrowserRouter } from "react-router-dom";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from "./Context/index.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DataProvider>
    <App/>
  </DataProvider>
  </BrowserRouter>,
)
