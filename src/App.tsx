import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { OtpVerify } from './pages/auth/OtpVerify';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Auth routes */}
          <Route path="/auth">
            <Route index element={<Navigate to="/auth/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="otp-verify" element={<OtpVerify />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          {/* Dashboard routes */}
          <Route path="/dashboard" element={
            // TODO: Add a DashboardLayout component here
            <div className="min-h-screen bg-gray-50">
              {/* Placeholder for dashboard header/sidebar */}
              <div className="p-4 bg-white shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
              </div>
              {/* Main content area */}
              <main className="p-6">
                <Outlet />
              </main>
            </div>
          }>
            <Route index element={
              <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
                <h1 className="text-4xl font-bold text-gray-900">Dashboard Home (Coming Soon)</h1>
              </div>
            } />
            {/* Add more dashboard child routes here, for example: */}
            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>

          {/* Redirects */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
