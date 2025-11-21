import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Lock, CheckCircle } from 'lucide-react';
import { FormInput } from '../../../components/FormInput';
import { Button } from '../../../components/Button';
import { setLoading, setError } from '../../../store/slices/authSlice';

export const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const email = (location.state as { email?: string })?.email || '';
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
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
      console.log('Reset password:', { email, password: formData.password });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/login');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to reset password';
      dispatch(setError(errorMessage));
    } finally {
      setIsLoading(false);
      dispatch(setLoading(false));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-yellow-50'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8'>
          <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Password</h1>
          <p className="text-gray-600">Enter a strong password for your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="New Password"
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
            icon={<CheckCircle size={18} />}
            required
          />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Password requirements:</strong>
              <ul className="mt-2 space-y-1 text-xs">
                <li>✓ At least 8 characters long</li>
                <li>✓ Mix of uppercase and lowercase letters</li>
                <li>✓ At least one number</li>
                <li>✓ At least one special character</li>
              </ul>
            </p>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth loading={isLoading}>
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};
