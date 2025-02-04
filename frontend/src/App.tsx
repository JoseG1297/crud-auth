
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { RegisterPage } from "./pages/RegisterPage"
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";



import { AuthProvider } from "./context/AuthContext"

import { ProtectedRoutes } from "./components/ProtectedRoutes"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/tasks" element={<TasksPage/>} />
            <Route path="/task-form" element={<TaskFormPage/>} />
            <Route path="/" element={<HomePage/>} />
          </Route>

          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
