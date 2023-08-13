import { createBrowserRouter } from 'react-router-dom'
import MenuPage from '../pages/MenuPage'
import LandingPage from '../pages/LandingPage'
import BaseLayout from '../components/BaseLayout'
import MaintenancePage from '../pages/MaintenancePage'
import MenuDetail from '../pages/MenuDetail'
import ItemPage from '../pages/ItemPage'

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
    },
    {
        path: "/menu",
        element: <BaseLayout />,
        children: [
            {
                element: <MenuPage />,
                path: ""
            }
        ]
    },
    {
        path: "/maintenance",
        element: <BaseLayout />,
        children: [
            {
                element: <MaintenancePage />,
                path: ""
            }
        ]
    },
    {
        path: "/menu/detail",
        element: <BaseLayout />,
        children: [
            {
                element: <MenuDetail />,
                path: ""
            }
        ]
    },
    {
        path: "/menu/detail/:id",
        element: <BaseLayout />,
        children: [
            {
                element: <ItemPage />,
                path: ""
            }
        ]
    }
])

export default router