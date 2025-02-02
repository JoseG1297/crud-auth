
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { RegisterPage } from "./pages/RegisterPage"
import { LoginPage } from "./pages/LoginPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/profile" element={<h1>Profile page</h1>} />
        <Route path="/tasks" element={<h1>Tasks page</h1>} />
        <Route path="/add-tasks" element={<h1>Add Tasks page</h1>} />
        <Route path="/tasks/:id" element={<h1>Task detail page</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
