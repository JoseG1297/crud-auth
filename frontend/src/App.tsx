
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { RegisterPage } from "./pages/RegisterPage"
import { LoginPage } from "./pages/LoginPage"
import { ProfilePage } from "./pages/ProfilePage"
import { TasksPage } from "./pages/TasksPage"
import { TaskFormPage } from "./pages/TaskFormPage"


import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/add-tasks" element={<TaskFormPage/>} />
          <Route path="/tasks/:id" element={<h1>Task detail page</h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
