import React from 'react'
import Detail from './pages/client/Detail'
import Home from './pages/client/Home'
import Checkout from './pages/client/Checkout'
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
    }

]

export default routes