import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://30ea986d719b5efa2dc814d55651b385@o4509467730575360.ingest.us.sentry.io/4509467731820544",
  sendDefaultPii: true
});

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)
