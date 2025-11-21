import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './pages/common/Home';
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
import {
  Dashboard,
  LiveTradesMonitor,
  TradeHistory,
  FollowersManagement,
  CopyTradingSettings,
  EarningsPayouts,
  APIConnection,
  Notifications,
  HelpSupport,
} from './pages/trader/pages';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Trader Routes */}
          <Route path="/trader">
            {/* Trader Auth Routes */}
            <Route path="auth">
              <Route path="login" element={<TraderLogin />} />
              <Route path="register" element={<TraderRegister />} />
              <Route path="otp-verify" element={<TraderOtpVerify />} />
              <Route path="forgot-password" element={<TraderForgotPassword />} />
              <Route path="reset-password" element={<TraderResetPassword />} />
            </Route>
            {/* Trader Dashboard Routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="live-trades" element={<LiveTradesMonitor />} />
            <Route path="history" element={<TradeHistory />} />
            <Route path="followers" element={<FollowersManagement />} />
            <Route path="settings" element={<CopyTradingSettings />} />
            <Route path="earnings" element={<EarningsPayouts />} />
            <Route path="api" element={<APIConnection />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="help" element={<HelpSupport />} />
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