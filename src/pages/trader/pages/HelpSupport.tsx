import React, { useState } from 'react';
import { Card } from '../../../components/Card';
import DashboardLayout from '../../../components/DashboardLayout';
import { FaQuestion, FaRegCommentDots } from 'react-icons/fa';
import { IoIosRocket, IoIosWarning } from 'react-icons/io';
import { IoConstructSharp } from 'react-icons/io5';

const HelpSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'setup' | 'troubleshoot' | 'contact'>('faq');
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });

  const faqs = [
    {
      question: 'What is copy trading?',
      answer: 'Copy trading allows followers to automatically replicate your trades in their own accounts. When you open or close a position on Binance, the system automatically copies those actions to your followers\' accounts based on their settings.',
    },
    {
      question: 'How do followers copy my trades?',
      answer: 'Followers connect their Binance accounts and subscribe to your copy trading service. They set their copy ratio (fixed amount, percentage, or proportional) and risk limits. When you make a trade, it automatically executes in their accounts.',
    },
    {
      question: 'Can I control who follows me?',
      answer: 'Yes! You can enable manual approval mode to review each follower before accepting them. You can also set minimum balance requirements and remove followers at any time.',
    },
    {
      question: 'How do I earn from copy trading?',
      answer: 'You earn through subscription fees or performance fees from your followers. The platform calculates and tracks your earnings, which you can withdraw once they reach the minimum threshold.',
    },
    {
      question: 'Is my API key safe?',
      answer: 'Your API keys are stored encrypted on our servers. We only require read-only and futures permissions - NEVER enable withdrawal permissions on your API key for maximum security.',
    },
    {
      question: 'What happens if my trade fails to copy?',
      answer: 'If a follower has insufficient balance or other issues, their copy will fail but your trade continues normally. You\'ll receive a notification about failed copies.',
    },
  ];

  const setupSteps = [
    {
      title: '1. Create Binance API Key',
      content: [
        'Login to your Binance account',
        'Go to Account > API Management',
        'Click "Create API" and choose "System generated"',
        'Enable "Enable Reading" and "Enable Futures"',
        'DO NOT enable withdrawal permissions',
        'Copy your API Key and Secret Key',
      ],
    },
    {
      title: '2. Connect API to Platform',
      content: [
        'Navigate to API Connection page',
        'Paste your API Key and Secret',
        'Click "Test Connection" to verify',
        'Click "Connect API" to complete setup',
      ],
    },
    {
      title: '3. Configure Copy Settings',
      content: [
        'Go to Copy Trading Settings',
        'Choose your copy ratio mode',
        'Set risk management limits',
        'Enable auto-accept followers (optional)',
        'Set minimum follower balance requirement',
        'Save your settings',
      ],
    },
    {
      title: '4. Start Trading',
      content: [
        'Trade normally on your Binance account',
        'System automatically detects new positions',
        'Followers\' accounts copy your trades',
        'Monitor follower activity in Followers Management',
        'Track your earnings in Earnings & Payouts',
      ],
    },
  ];

  const troubleshooting = [
    {
      issue: 'API Connection Failed',
      solutions: [
        'Verify your API key and secret are correct',
        'Ensure "Enable Reading" and "Enable Futures" permissions are enabled',
        'Check if your API key has IP restrictions that block our servers',
        'Make sure your API key is not expired',
        'Try regenerating a new API key',
      ],
    },
    {
      issue: 'Trades Not Copying',
      solutions: [
        'Verify your API is connected (green status)',
        'Check if copy trading is enabled in settings',
        'Ensure followers have sufficient balance',
        'Verify Binance account is not restricted',
        'Check for any system alerts or errors',
      ],
    },
    {
      issue: 'Followers Not Seeing Trades',
      solutions: [
        'Ensure your trades are executed on Binance Futures',
        'Check copy trading settings are properly configured',
        'Verify followers have active subscriptions',
        'Check if follower hit their risk limits',
        'Contact support if issue persists',
      ],
    },
    {
      issue: 'Withdrawal Request Pending',
      solutions: [
        'Withdrawal requests take 2-5 business days to process',
        'Ensure you meet minimum withdrawal amount ($100)',
        'Admin approval is required for all withdrawals',
        'Check your registered payment method details',
        'Contact support if delayed beyond 5 days',
      ],
    },
  ];

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Support ticket submitted! We\'ll respond within 24 hours.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
          <p className="text-gray-600">Find answers and get assistance</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 overflow-x-auto">
          {[
            { value: 'faq', label: <div className='flex items-center justify-center gap-2'><FaQuestion /> FAQs</div>, icon: <FaQuestion /> },
            { value: 'setup', label: <div className='flex items-center justify-center gap-2'><IoIosRocket /> API Setup Guide</div>, icon: <IoIosRocket /> },
            { value: 'troubleshoot', label: <div className='flex items-center justify-center gap-2'><IoConstructSharp />Troubleshooting</div>, icon: <IoConstructSharp /> },
            { value: 'contact', label: <div className='flex items-center justify-center gap-2'><FaRegCommentDots /> Contact Support</div>, icon: <FaRegCommentDots /> },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.value
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQs Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        )}

        {/* Setup Guide Tab */}
        {activeTab === 'setup' && (
          <div className="space-y-6">
            {setupSteps.map((step, index) => (
              <Card key={index} title={step.title} icon={<IoIosRocket />}>
                <ul className="space-y-2">
                  {step.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">▸</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        )}

        {/* Troubleshooting Tab */}
        {activeTab === 'troubleshoot' && (
          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <Card key={index} title={item.issue} icon={<IoConstructSharp />}>
                <p className="font-semibold text-gray-800 mb-3">Solutions:</p>
                <ul className="space-y-2">
                  {item.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        )}

        {/* Contact Support Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <Card title="Get in Touch" icon={<FaRegCommentDots />}>
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="What do you need help with?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Describe your issue in detail..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
                >
                  Submit Support Request
                </button>
              </form>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl"><IoIosWarning /></span>
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Support Information</p>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Response time: Within 24 hours</li>
                    <li>• Email: support@lktrader.com</li>
                    <li>• Available: Monday - Friday, 9 AM - 6 PM (UTC)</li>
                    <li>• Emergency support available for critical API issues</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupport;
