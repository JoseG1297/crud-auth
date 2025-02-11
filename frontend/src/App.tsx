import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";

import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

import { store } from "./store/configureStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/tasks/*"
                element={
                  <TaskProvider>
                    <Routes>
                      <Route path="/" element={<TasksPage />} />
                      <Route path="new" element={<TaskFormPage />} />
                      <Route path="edit/:id" element={<TaskFormPage />} />
                    </Routes>
                  </TaskProvider>
                }
              />
            </Route>
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
