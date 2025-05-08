import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import CreateTask from "./pages/Admin/CreateTask.jsx";
import ManageTasks from "./pages/Admin/ManageTasks.jsx";
import ManageUsers from "./pages/Admin/ManageUsers.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import MyTasks from "./pages/User/MyTasks.jsx";
import ViewTaskDetails from "./pages/User/ViewTaskDetails.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
            {/* Admin Routes */}
            <Route element={<PrivateRoute allowedRoles={['admin']} />}>
              <Route path={"/admin/dashboard"} element={<Dashboard />} />
              <Route path={"/admin/create-task"} element={<CreateTask />} />
              <Route path={"/admin/tasks"} element={<ManageTasks />} />
              <Route path={"/admin/users"} element={<ManageUsers />} />
            </Route>
            {/* User Routes */}
            <Route element={<PrivateRoute allowedRoles={['user']} />}>
              <Route path={"/user/dashboard"} element={<UserDashboard />} />
              <Route path={"/user/tasks"} element={<MyTasks />} />
              <Route path={"/user/task-detail/:id"} element={<ViewTaskDetails />} />
            </Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
