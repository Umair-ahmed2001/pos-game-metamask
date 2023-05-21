import {lazy} from 'react';

const publicRoutes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('../pages/SignIn/SignIn')),
    },
    {
        path: '/signup',
        exact: true,
        component: lazy(() => import('../pages/SignUp/SignUp')),
    },
]
const privateRoutes = [
    {
        path: '/metamask',
        exact: true,
        component: lazy(() => import('../pages/MetaMask/MetaMask')),
    }
]
const routes = {
    publicRoutes,
    privateRoutes
}

export default routes;