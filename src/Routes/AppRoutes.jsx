import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../app/App'
import DashboardPage from '../feature/Dashboard/ui/DashboardPage'
import QuestionsPage from '../feature/Questions/ui/QuestionsPage'
import MachineCodingPage from '../feature/Machine-Coding/ui/MachineCodingPage'
import ProgressPage from '../feature/Progress/ui/ProgressPage'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path : "/",
            element : <App/>,
            children : [
                {
                    path : "",
                    element : <DashboardPage/>
                },
                {
                    path : "/questions",
                    element : <QuestionsPage/>
                },
                {
                    path : "/machine-coding",
                    element : <MachineCodingPage/>
                },
                {
                    path : "/progress",
                    element : <ProgressPage/>
                }
            ]

        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes