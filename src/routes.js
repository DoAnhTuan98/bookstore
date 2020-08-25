import React from 'react'
import Detail from './pages/client/Detail'
import Home from './pages/client/Home'
import Checkout from './pages/client/Checkout'
import OrderReceived from './pages/client/OderReceived'
import Orders from './pages/client/Orders'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/detail',
        exact: true,
        main: () => <Detail />
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
    }

]

export default routes