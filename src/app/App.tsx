import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { store } from './store'
import { router } from '../pages/router'
import { Toaster } from 'react-hot-toast'
import "modern-css-reset/dist/reset.css";
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position='top-center' containerStyle={{fontFamily: 'var(--font-family)'}}/>
    </Provider>
  </StrictMode>,
)
