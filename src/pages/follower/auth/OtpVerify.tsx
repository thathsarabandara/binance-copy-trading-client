import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RotateCcw } from 'lucide-react';
import { Button } from '../../../components/Button';
import { setLoading, setError } from '../../../store/slices/authSlice';

export const OtpVerify: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const email = (location.state as { email?: string })?.email || '';
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrorState] = useState('');
  const [otpExpiry, setOtpExpiry] = useState(10 * 60); // 10 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(120); // 2 minutes in seconds

  // OTP Expiry Timer
  useEffect(() => {
    if (otpExpiry > 0) {
      const timer = setInterval(() => {
        setOtpExpiry((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [otpExpiry]);

  // Resend Cooldown Timer
  useEffect(() => {
    if (resendCooldown > 0 && !canResend) {
      const timer = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [resendCooldown, canResend]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      setErrorState('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    dispatch(setLoading(true));
    try {
      console.log('OTP verification:', { email, otp: otpCode });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'OTP verification failed';
      setErrorState(errorMessage);
      dispatch(setError(errorMessage));
    } finally {
      setIsLoading(false);
      dispatch(setLoading(false));
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    
    try {
      setCanResend(false);
      setResendCooldown(120);
      setOtpExpiry(10 * 60);
      setOtp(['', '', '', '', '', '']);
      setErrorState('');
      
      console.log('Resending OTP to:', email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to resend OTP';
      setErrorState(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-yellow-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
          <p className="text-gray-600">
            We've sent a code to <span className="font-semibold text-gray-900">{email}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Enter 6-digit code</label>
            <div className="flex gap-3 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-bold border-2 border-yellow-200 rounded-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100 transition-all"
                />
              ))}
            </div>
            <p className="text-right text-sm text-gray-500">
              Expires in: <span className="font-medium">{formatTime(otpExpiry)}</span>
            </p>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            fullWidth 
            loading={isLoading}
            disabled={otpExpiry === 0}
          >
            {otpExpiry === 0 ? 'OTP Expired' : 'Verify OTP'}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-yellow-100 space-y-4">
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={!canResend}
            className={`w-full flex items-center justify-center gap-2 ${
              canResend 
                ? 'text-yellow-600 hover:text-yellow-700' 
                : 'text-gray-400'
            } font-medium transition-colors`}
          >
            <RotateCcw size={18} className={canResend ? 'animate-spin' : ''} />
            {canResend ? 'Resend Code' : `Resend in ${formatTime(resendCooldown)}`}
          </button>
          <p className="text-center text-gray-600 text-sm">
            Didn't receive the code?{' '}
            <button 
              type="button"
              onClick={handleResendOtp}
              disabled={!canResend}
              className={`${
                canResend 
                  ? 'text-yellow-600 hover:text-yellow-700' 
                  : 'text-gray-400'
              } font-semibold`}
            >
              Try another email
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};