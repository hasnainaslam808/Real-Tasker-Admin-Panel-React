import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Content from './admin-managment/Dashboard/content'
import Administration from "../components/admin-managment/adminstration/index"
import Buildings from "../components/admin-managment/buildings/index"
import Contacts from "../components/admin-managment/contacts/index"
const AppRoutes = () => {
  return (
            <Routes>
                <Route path="/" Component={Content} />
                <Route path="/administration" Component={Administration} />
                <Route path="/buildings" Component={Buildings} />
                <Route path="/supervisors" Component={Content} />
                <Route path="/contacts" Component={Contacts} />
            </Routes>
  )
}

export default AppRoutes