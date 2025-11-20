import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mail, Lock, User, UserCheck } from 'lucide-react';
import { AuthLayout } from '../../../layouts/AuthLayout';
import { FormInput } from '../../../components/FormInput';
import { Button } from '../../../components/Button';
import { setLoading, setError } from '../../../store/slices/authSlice';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    dispatch(setLoading(true));
    try {
      // TODO: Replace with actual API call
      console.log('Register attempt:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/otp-verify', { state: { email: formData.email } });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      dispatch(setError(errorMessage));
    } finally {
      setIsLoading(false);
      dispatch(setLoading(false));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const authImage = (
    <div className="w-full h-full">
      <img src="/assets/Follower/auth/register.png" alt="LK Trader" className="object-cover w-full h-full" />
    </div>
  );

  return (
    <AuthLayout image={authImage}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
        <p className="text-gray-600">Join LK Trader community today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="User Name"
          type="text"
          name="username"
          placeholder="john_doe"
          value={formData.username}
          onChange={handleInputChange}
          error={errors.username}
          icon={<User size={18} />}
          required
        />

        <FormInput
          label="Full Name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          icon={<User size={18} />}
          required
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPassword}
          icon={<UserCheck size={18} />}
          required
        />

        <Button type="submit" variant="primary" size="lg" fullWidth loading={isLoading}>
          Create Account
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-yellow-100">
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
