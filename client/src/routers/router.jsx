import { createBrowserRouter } from 'react-router-dom'
import MenuPage from '../pages/MenuPage'
import LandingPage from '../pages/LandingPage'
import BaseLayout from '../components/BaseLayout'


const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                element: <LandingPage />,
                path: ""
            }
        ]
    }
])

export default router