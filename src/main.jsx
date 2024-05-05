import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import { Post, Protected }from './components/index.js'
import Home from './pages/Home.jsx'
import AllRooms from './pages/AllRooms.jsx'
import AddRoom from './pages/AddRoom.jsx'
import EditRoom from './pages/EditRoom.jsx'
import { Login , Signup } from './components'
import RoomMap from './components/RoomMap.jsx'
import ContactUs from './pages/ContactUs.jsx'




const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: (
            <Protected authentication={false}>
                <Login />
            </Protected>
        ),
    },
    {
        path: "/signup",
        element: (
            <Protected authentication={false}>
                <Signup />
            </Protected>
        ),
    },
    {
        path: "/all-listings",
        element: (
            <Protected authentication={true}>
                {" "}
                <AllRooms />
            </Protected>
        ),
    },
    {
        path: "/add-listing",
        element: (
            <Protected authentication={true}>
                {" "}
                <AddRoom />
            </Protected>
        ),
    },
    {
        path: "/edit-room/:slug",
        element: (
            <Protected authentication={true}>
                {" "}
                <EditRoom />
            </Protected>
        ),
    },
    {
        path: "/rooms/:slug",
        element: <Post />,
    },
   
    {
        path: "/rooms-map",
        element: <RoomMap />,
    },
    {
        path: "/contact-us",
        element: <ContactUs />,
    },
    ],
    errorElement: <NotFoundPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
