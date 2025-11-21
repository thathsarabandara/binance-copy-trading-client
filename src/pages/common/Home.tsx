import React, { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Award, Zap, MapPin, Star, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      const heroElements = heroRef.current.querySelectorAll('[data-animate]');
      gsap.fromTo(
        heroElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll('.stat-card'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Services animation
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-card'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Reviews animation
    if (reviewsRef.current) {
      gsap.fromTo(
        reviewsRef.current.querySelectorAll('.review-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Features animation
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll('.feature-item'),
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Process animation
    if (processRef.current) {
      gsap.fromTo(
        processRef.current.querySelectorAll('.process-step'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Blog animation
    if (blogRef.current) {
      gsap.fromTo(
        blogRef.current.querySelectorAll('.blog-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: blogRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // FAQ animation
    if (faqRef.current) {
      gsap.fromTo(
        faqRef.current.querySelectorAll('.faq-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <Navigation />
      {/* Hero Section - Minimalistic */}
      <section ref={heroRef} className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100 flex items-center pt-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div data-animate className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-bold text-yellow-600 uppercase tracking-widest">Welcome to LK Trader</p>
                <h1 className="text-6xl lg:text-7xl font-bold text-yellow-950 leading-tight">
                  Trade Smart,<br /><span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Earn More</span>
                </h1>
                <p className="text-lg text-yellow-900 font-medium max-w-md">
                  Copy top traders' strategies or share your expertise. Join a community of 50K+ traders earning passive income.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl">
                  Get Started
                  <ArrowRight size={18} />
                </button>
                <button className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-100 px-8 py-3 rounded-full font-bold transition-all">
                  Learn More
                </button>
              </div>

              <div className="flex gap-12 pt-8 border-t-2 border-yellow-300">
                <div>
                  <p className="text-4xl font-bold text-yellow-700">50K+</p>
                  <p className="text-sm text-yellow-900 font-semibold mt-1">Active Traders</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-yellow-700">$2B+</p>
                  <p className="text-sm text-yellow-900 font-semibold mt-1">Assets Managed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-yellow-700">24.5%</p>
                  <p className="text-sm text-yellow-900 font-semibold mt-1">Avg Returns</p>
                </div>
              </div>
            </div>

            {/* Right Minimalistic Visual */}
            <div data-animate className="relative h-96 lg:h-full min-h-12">
              <img src="/assets/common/hero.png" alt="Trading visualization" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalistic */}
      <section ref={statsRef} className="py-32 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">Why Choose LK Trader?</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Trusted by thousands of traders worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: 'Avg Returns', value: '24.5%' },
              { icon: Users, label: 'Active Users', value: '50K+' },
              { icon: Award, label: 'Top Traders', value: '1,200+' },
              { icon: Zap, label: 'Daily Trades', value: '100K+' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="stat-card">
                  <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:border-yellow-400 border-2 border-yellow-200 group">
                    <Icon size={40} className="text-yellow-600 mb-6 group-hover:text-yellow-700 transition-colors" />
                    <p className="text-xs text-yellow-700 font-bold uppercase tracking-widest">{stat.label}</p>
                    <p className="text-5xl font-bold text-yellow-700 mt-4">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Minimalistic */}
      <section ref={servicesRef} className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">Our Services</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Everything you need to succeed in trading</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Copy Trading',
                description: 'Automatically copy trades from top-performing traders. No experience needed.',
                icon: TrendingUp,
              },
              {
                title: 'Live Analytics',
                description: 'Real-time market data, charts, and technical analysis tools.',
                icon: Zap,
              },
              {
                title: 'Portfolio Management',
                description: 'Manage multiple accounts and track your performance effortlessly.',
                icon: Award,
              },
              {
                title: 'Community Support',
                description: 'Connect with traders, share strategies, and learn from experts.',
                icon: Users,
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="service-card">
                  <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:from-yellow-100 border-2 border-yellow-200 group">
                    <Icon size={48} className="text-yellow-600 mb-6 group-hover:text-yellow-700 transition-colors" />
                    <h3 className="text-2xl font-bold text-yellow-950 mb-3">{service.title}</h3>
                    <p className="text-yellow-800 font-semibold leading-relaxed">{service.description}</p>
                    <button className="mt-6 text-yellow-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group/btn">
                      Learn More
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - New */}
      <section ref={featuresRef} className="py-32 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">Powerful Features</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Everything built for your success</p>
          </div>

          <div className="space-y-6">
            {[
              { title: 'Real-time Notifications', desc: 'Get instant alerts on market movements and trade updates' },
              { title: 'Advanced Security', desc: 'Bank-level encryption and two-factor authentication' },
              { title: 'Mobile App', desc: 'Trade on the go with our native iOS and Android apps' },
              { title: 'API Access', desc: 'Integrate with your own trading systems and bots' },
              { title: 'Performance Analytics', desc: 'Detailed insights into your trading performance' },
              { title: '24/7 Support', desc: 'Round-the-clock customer support in multiple languages' },
            ].map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl hover:shadow-2xl transition-all border-2 border-yellow-200 hover:border-yellow-400 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 group-hover:from-yellow-500 group-hover:to-yellow-400 transition-all">
                      <CheckCircle size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-yellow-950">{feature.title}</h3>
                    <p className="text-yellow-800 font-semibold mt-1">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - New */}
      <section ref={processRef} className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">How It Works</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Get started in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Create Account', desc: 'Sign up with your email and verify your identity' },
              { step: '02', title: 'Fund Account', desc: 'Add funds via bank transfer or crypto wallet' },
              { step: '03', title: 'Choose Traders', desc: 'Browse and select traders to copy' },
              { step: '04', title: 'Start Earning', desc: 'Sit back and earn from copied trades' },
            ].map((item, idx) => (
              <div key={idx} className="process-step">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-500 text-white rounded-full font-bold text-2xl mb-6 shadow-lg hover:shadow-xl transition-shadow">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-yellow-950 mb-3">{item.title}</h3>
                  <p className="text-yellow-800 font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section - Minimalistic */}
      <section className="py-32 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">Global Presence</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Serving traders in 50+ countries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { country: 'Sri Lanka', traders: '15K+', flag: '🇱🇰' },
              { country: 'India', traders: '25K+', flag: '🇮🇳' },
              { country: 'Southeast Asia', traders: '10K+', flag: '🌏' },
            ].map((location, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all border-2 border-yellow-200 hover:border-yellow-400 group">
                <p className="text-7xl mb-6 group-hover:scale-110 transition-transform">{location.flag}</p>
                <h3 className="text-2xl font-bold text-yellow-950">{location.country}</h3>
                <p className="text-yellow-800 font-bold mt-3">{location.traders} Active Traders</p>
                <MapPin className="mx-auto mt-6 text-yellow-600 group-hover:text-yellow-700 transition-colors" size={24} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Minimalistic */}
      <section ref={reviewsRef} className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">What Our Users Say</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Join thousands of satisfied traders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Professional Trader',
                review: 'LK Trader has transformed my trading journey. The copy trading feature is amazing!',
                rating: 5,
              },
              {
                name: 'Priya Sharma',
                role: 'Follower',
                review: 'I started with zero trading knowledge. Now I earn passive income by following top traders.',
                rating: 5,
              },
              {
                name: 'Ahmed Hassan',
                role: 'Trader',
                review: 'The platform is user-friendly and the community support is exceptional. Highly recommended!',
                rating: 5,
              },
            ].map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all border-2 border-yellow-200 hover:border-yellow-400 group">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-yellow-900 mb-8 font-semibold leading-relaxed">"{review.review}"</p>
                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="font-bold text-yellow-950">{review.name}</p>
                    <p className="text-sm text-yellow-700 font-semibold mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Minimalistic */}
      <section ref={blogRef} className="py-32 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">Latest Insights</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Learn trading strategies and market tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://placehold.co/400x200/yellow/white?text=Strategy',
                title: 'Top 5 Trading Strategies for 2025',
                excerpt: 'Discover the most effective trading strategies used by top performers on LK Trader.',
                date: 'Nov 20, 2025',
                category: 'Strategy',
              },
              {
                img: 'https://placehold.co/400x200/yellow/white?text=Volatility',
                title: 'Understanding Market Volatility',
                excerpt: 'Learn how to navigate market volatility and protect your portfolio on LK Trader.',
                date: 'Nov 18, 2025',
                category: 'Education',
              },
              {
                img: 'https://placehold.co/400x200/yellow/white?text=Success',
                title: 'Copy Trading Success Stories in 2025',
                excerpt: 'Real stories from followers who turned $1000 into $10000 using copy trading.',
                date: 'Nov 15, 2025',
                category: 'Success',
              },
            ].map((blog, idx) => (
              <div key={idx} className="blog-card">
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all border-2 border-yellow-200 hover:border-yellow-400 group">
                  <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-white bg-gradient-to-r from-yellow-600 to-yellow-500 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-xs text-yellow-700 font-bold">{blog.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-yellow-950 mb-3">{blog.title}</h3>
                    <p className="text-yellow-800 font-semibold mb-6">{blog.excerpt}</p>
                    <button className="text-yellow-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group/btn">
                      Read More
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section ref={faqRef} className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-yellow-950">Frequently Asked Questions</h2>
            <p className="text-lg text-yellow-800 font-semibold mt-4">Find answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do I start copy trading?',
                a: 'Create an account, fund it, browse top traders, and select one to copy. Your trades will automatically mirror theirs.',
              },
              {
                q: 'What are the fees?',
                a: 'We charge a small commission on profits. No hidden fees. Check our pricing page for detailed breakdown.',
              },
              {
                q: 'Is my money safe?',
                a: 'Yes. We use bank-level encryption and two-factor authentication. Your funds are held in segregated accounts.',
              },
              {
                q: 'Can I withdraw anytime?',
                a: 'Yes, you can withdraw your funds anytime. Withdrawals are processed within 2-3 business days.',
              },
              {
                q: 'Do I need trading experience?',
                a: 'No. Copy trading is designed for beginners. You can start with as little as $100.',
              },
              {
                q: 'How do I become a trader?',
                a: 'Apply through our platform, pass verification, and start sharing your trading strategies with followers.',
              },
            ].map((item, idx) => (
              <div key={idx} className="faq-item">
                <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group border-2 border-yellow-200 hover:border-yellow-400">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-yellow-950 group-hover:text-yellow-700 transition-colors">{item.q}</h3>
                    <div className="text-2xl text-yellow-600 group-hover:text-yellow-700 transition-colors font-bold">+</div>
                  </div>
                  <p className="text-yellow-800 font-semibold mt-3 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalistic */}
      <section className="py-32 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          <p className="text-lg text-yellow-100 font-semibold mb-10">Join LK Trader today and take control of your financial future.</p>
          <button className="bg-white hover:bg-yellow-50 text-yellow-600 px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 mx-auto transition-all hover:shadow-2xl shadow-lg">
            Create Free Account
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;