import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import {
  FollowerDashboard,
  Marketplace,
  MasterTraderProfile,
  CopySettings,
  ActiveTrades,
  TradeHistory as FollowerTradeHistory,
  MyTraders,
  WalletBalance,
  Notifications as FollowerNotifications,
  AccountSettings,
} from './pages/follower/pages';
import {
  Dashboard as AdminDashboard,
  MasterTraders,
  Followers,
  CopyMonitoring,
  TradeHistory as AdminTradeHistory,
  Payouts,
  APIManagement,
  KYCVerification,
  Subscriptions,
  Support,
  Settings,
  AdminAccounts,
} from './pages/admin/pages';
import AdminLayout from './layouts/AdminLayout';

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
            {/* Follower Dashboard Routes */}
            <Route path="dashboard" element={<FollowerDashboard />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="marketplace/:traderId" element={<MasterTraderProfile />} />
            <Route path="copy-settings" element={<CopySettings />} />
            <Route path="active-trades" element={<ActiveTrades />} />
            <Route path="trade-history" element={<FollowerTradeHistory />} />
            <Route path="my-traders" element={<MyTraders />} />
            <Route path="wallet" element={<WalletBalance />} />
            <Route path="notifications" element={<FollowerNotifications />} />
            <Route path="settings" element={<AccountSettings />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="master-traders" element={<MasterTraders />} />
            <Route path="followers" element={<Followers />} />
            <Route path="copy-monitoring" element={<CopyMonitoring />} />
            <Route path="trade-history" element={<AdminTradeHistory />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="api-management" element={<APIManagement />} />
            <Route path="kyc" element={<KYCVerification />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
            <Route path="accounts" element={<AdminAccounts />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;