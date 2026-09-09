import { StrictMode } from 'react'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import { HomePage,Discover,Library,MovieGrid, TrailerPage } from './Components/index.js'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "discover",
        element: <Discover />
      },
      {
        path: "library",
        element: <Library />
      },
      {
        path: "search",
        element: <MovieGrid />
      },
      {
        path: "movie/:movieId/:trailerKey",
        element: <TrailerPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
