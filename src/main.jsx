import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { AuthLayout, DashboardLayout } from "@/layouts";
import {
  GettingStarted,
  Inbox,
  Profile,
  Settings,
  SignIn,
  SignUp,
} from "@/pages";
import { ProtectedRoute } from "@/components";
import { Provider } from "react-redux";
import store from "@/store/store";
import "@/index.scss";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <ToastContainer autoClose={1000} closeOnClick />

    <Provider store={store}>
      <Routes>
        {/* authentication pages */}
        <Route
          element={
            <ProtectedRoute authentication={false}>
              <AuthLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* protected pages */}
        <Route
          element={
            <ProtectedRoute authentication={false}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
