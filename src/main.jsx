import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { AuthLayout, DashboardLayout } from "@/layouts";
import {
  Billing,
  General,
  GettingStarted,
  Home,
  Inbox,
  Profile,
  Settings,
  SignIn,
  SignUp,
  Teammates,
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

          {/* Settings pages */}
          <Route path="settings" element={<Settings />}>
            <Route index element={<Home />} />
            <Route path="workspace/general" element={<General />} />
            <Route path="workspace/billing" element={<Billing />} />
            <Route path="workspace/teammates" element={<Teammates />} />
          </Route>

          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
