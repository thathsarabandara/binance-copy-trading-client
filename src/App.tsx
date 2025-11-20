import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Login as TraderLogin } from './pages/trader/auth/Login';
import { Register as TraderRegister } from './pages/trader/auth/Register';
import { OtpVerify as TraderOtpVerify } from './pages/trader/auth/OtpVerify';
import { ForgotPassword as TraderForgotPassword } from './pages/trader/auth/ForgotPassword';
import { ResetPassword as TraderResetPassword } from './pages/trader/auth/ResetPassword';
import { Login as FollowerLogin } from './pages/follower/auth/Login';
import { Register as FollowerRegister } from './pages/follower/auth/Register';
import { OtpVerify as FollowerOtpVerify } from './pages/follower/auth/OtpVerify';
import { ForgotPassword as FollowerForgotPassword } from './pages/follower/auth/ForgotPassword';
import { ResetPassword as FollowerResetPassword } from './pages/follower/auth/ResetPassword';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Redirect root to trader login by default */}
          <Route path="/" element={<Navigate to="/trader/auth/login" replace />} />

          {/* Trader Routes */}
          <Route path="/trader">
            <Route path="auth">
              <Route path="login" element={<TraderLogin />} />
              <Route path="register" element={<TraderRegister />} />
              <Route path="otp-verify" element={<TraderOtpVerify />} />
              <Route path="forgot-password" element={<TraderForgotPassword />} />
              <Route path="reset-password" element={<TraderResetPassword />} />
            </Route>
          </Route>

          {/* Follower Routes */}
          <Route path="/follower">
            <Route path="auth">
              <Route path="login" element={<FollowerLogin />} />
              <Route path="register" element={<FollowerRegister />} />
              <Route path="otp-verify" element={<FollowerOtpVerify />} />
              <Route path="forgot-password" element={<FollowerForgotPassword />} />
              <Route path="reset-password" element={<FollowerResetPassword />} />
            </Route>
          </Route>

          {/* Admin Routes - Placeholder */}
          <Route path="/admin">
            {/* Admin routes will go here */}
          </Route>

          {/* Fallback route - redirect to trader login */}
          <Route path="*" element={<Navigate to="/trader/auth/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;