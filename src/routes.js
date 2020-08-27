import React from 'react'
import Detail from './pages/client/Detail'
import Home from './pages/client/Home'
import Checkout from './pages/client/Checkout'
import OrderReceived from './pages/client/OderReceived'
import Orders from './pages/client/Orders'
import UserProfile from './pages/client/UserProfile'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/product/:id',
        exact: true,
        main: (match) => <Detail match={match} />
    },
    {
        path: '/checkout',
        exact: true,
        main: () => <Checkout />
    },
    {
        path: '/order-received',
        exact: true,
        main: () => <OrderReceived />
    },
    {
        path: '/order',
        exact: true,
        main: () => <Orders />
    },
    {
        path: '/profile',
        exact: true,
        main: () => <UserProfile />
    }

]

export default routes