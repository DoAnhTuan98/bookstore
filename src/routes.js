import React from 'react'
import Detail from './pages/client/Detail'
import Home from './pages/client/Home'
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
    }
]

export default routes