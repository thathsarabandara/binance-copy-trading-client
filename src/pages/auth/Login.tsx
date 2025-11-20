import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mail, Lock } from 'lucide-react';
import { AuthLayout } from '../../layouts/AuthLayout';
import { FormInput } from '../../components/FormInput';
import { Button } from '../../components/Button';
import { setLoading, setError } from '../../store/slices/authSlice';
import { SocialAuthButtons } from '../../components/SocialAuthButton';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    dispatch(setLoading(true));
    try {
      console.log('Login attempt:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch(setError(errorMessage));
    } finally {
      setIsLoading(false);
      dispatch(setLoading(false));
    }
  };
  
    const handleGoogleLogin = () => {
      console.log('Google login clicked');
    };

    const handleFacebookLogin = () => {
      console.log('Facebook login clicked');
    };

    const handleAppleLogin = () => {
      console.log('Apple login clicked');
    };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const authImage = (
    <div className="hidden md:block lg:w-full lg:h-full object-cover rounded-lg shadow-lg">
      <img src="/assets/trader/auth/login.png" alt="LK Trader" className="object-cover w-full h-full" />
    </div>
  );

  return (
    <AuthLayout image={authImage}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your account to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          icon={<Mail size={18} />}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          icon={<Lock size={18} />}
          required
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-yellow-300 text-yellow-400" />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth loading={isLoading}>
          Sign In
        </Button>
      </form>
        <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
        <div className="space-y-4 w-full">
          <SocialAuthButtons 
            onGoogleClick={handleGoogleLogin}
            onFacebookClick={handleFacebookLogin}
            onAppleClick={handleAppleLogin}
          />
        </div>
      <div className="mt-6 pt-6 border-t border-yellow-100">
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
