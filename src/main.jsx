

/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Conmponents
 */
import App from './App.jsx';
import 'lenis/dist/lenis.css';

/**
 * CSS link
 */
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
