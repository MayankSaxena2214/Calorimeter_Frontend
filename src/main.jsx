import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import store from './App/store.js'
export const server='http://localhost:4040';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
  
)
