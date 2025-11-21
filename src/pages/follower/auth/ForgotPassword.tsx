import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mail, ArrowLeft } from 'lucide-react';
import { FormInput } from '../../../components/FormInput';
import { Button } from '../../../components/Button';
import { setLoading, setError, setOtpSent } from '../../../store/slices/authSlice';

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [error, setErrorState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = () => {
    if (!email) {
      setErrorState('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorState('Invalid email format');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;

    setIsLoading(true);
    dispatch(setLoading(true));
    try {
      // TODO: Replace with actual API call
      console.log('Forgot password request:', { email });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setOtpSent({ sent: true, email }));
      navigate('/otp-verify', { state: { email } });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send reset code';
      setErrorState(errorMessage);
      dispatch(setError(errorMessage));
    } finally {
      setIsLoading(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-150'>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
          <p className="text-gray-600">Enter your email to receive a password reset code</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setErrorState('');
            }}
            error={error}
            icon={<Mail size={18} />}
            required
          />

          <Button type="submit" variant="primary" size="lg" fullWidth loading={isLoading}>
            Send Reset Code
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-yellow-100">
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
