// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { authProvider} from './contex/authProvider'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider >
//     <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
//     <App />
//     </div>
//     </AuthProvider>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './contex/authProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div>
      <App className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white"/>

      </div>
    </AuthProvider>
  </StrictMode>,
)