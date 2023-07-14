import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ImageSlede } from './ImageSlede'
import { ToolManage } from './ToolManage'
import { CategoryManage } from './CategoryManage'
import { HighlightedManage } from './HighlightedManage'
import { Submission } from './Submission'
import { Sidebar } from './Sidebar'
import { AdminCollection } from './Collection'
import { UserManage } from './UserManage'
import { UserFeedback } from './UserFeedback'
import { Reports } from './Reports'
import Multistep from '../Components/mulitstepfrom'
import { Home } from './Home'
 

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/imageslide" element={<ImageSlede />} />
            <Route path="/tool_manage" element={<ToolManage />} />
            <Route path="/category_manage" element={<CategoryManage />} />
            <Route path="/highlighted_tool" element={<HighlightedManage />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/collection" element={<AdminCollection />} />
            <Route path="/user_manage" element={<UserManage />} />
            <Route path="/user_feedback" element={<UserFeedback />} />
            <Route path="/report" element={<Reports />} />
            <Route path="/admin_creator" element={<Multistep/>} />
        </Routes>
    )
}
