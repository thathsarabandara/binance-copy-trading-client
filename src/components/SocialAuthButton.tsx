import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

interface SocialAuthButtonProps {
  provider: 'google' | 'facebook' | 'apple';
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const providerConfig = {
  google: {
    text: 'Continue with Google',
    icon: FaGoogle,
    bg: 'bg-red-50',
    textColor: 'text-red-700',
    hoverBg: 'hover:bg-red-100',
    border: 'border-red-200',
  },
  facebook: {
    text: 'Continue with Facebook',
    icon: FaFacebook,
    bg: 'bg-blue-50',
    textColor: 'text-blue-700',
    hoverBg: 'hover:bg-blue-100',
    border: 'border-blue-200',
  },
  apple: {
    text: 'Continue with Apple',
    icon: FaApple,
    bg: 'bg-gray-50',
    textColor: 'text-gray-700',
    hoverBg: 'hover:bg-gray-100',
    border: 'border-gray-200',
  },
};

export const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  provider,
  onClick,
  loading = false,
  disabled = false,
}) => {
  const { text, icon: Icon, bg, textColor, hoverBg, border } = providerConfig[provider];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading || disabled}
      className={`w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-lg border ${border} ${bg} ${hoverBg} ${textColor} font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
      ) : (
        <Icon className="text-lg" />
      )}
      <span>{text}</span>
    </button>
  );
};

export const SocialAuthButtons: React.FC<{
  onGoogleClick: () => void;
  onFacebookClick: () => void;
  onAppleClick: () => void;
  isLoading?: {
    google?: boolean;
    facebook?: boolean;
    apple?: boolean;
  };
}> = ({ onGoogleClick, onFacebookClick, onAppleClick, isLoading = {} }) => (
  <div className="space-y-3 w-full">
    <SocialAuthButton 
      provider="google" 
      onClick={onGoogleClick} 
      loading={isLoading.google}
    />
    <SocialAuthButton 
      provider="facebook" 
      onClick={onFacebookClick} 
      loading={isLoading.facebook}
    />
    <SocialAuthButton 
      provider="apple" 
      onClick={onAppleClick} 
      loading={isLoading.apple}
    />
  </div>
);
