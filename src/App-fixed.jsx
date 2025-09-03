import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, BarChart3, Calendar, Users, BookOpen, Search, Bell } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [marketData, setMarketData] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [newsData, setNewsData] = useState([])

  const API_BASE_URL = 'https://arab-finance-hub-backend.onrender.com';

  useEffect(() => {
    // Fetch Market Data
    fetch(`${API_BASE_URL}/api/markets/arab`)
      .then(response => response.json())
      .then(data => setMarketData(data))
      .catch(error => console.error('Error fetching market data:', error));

    // Fetch Crypto Data
    fetch(`${API_BASE_URL}/api/markets/crypto`)
      .then(response => response.json())
      .then(data => setCryptoData(data))
      .catch(error => console.error('Error fetching crypto data:', error));

    // Fetch News Data
    fetch(`${API_BASE_URL}/api/news/financial`)
      .then(response => response.json())
      .then(data => setNewsData(data))
      .catch(error => console.error('Error fetching news data:', error));
  }, []);

  // Simple Button Component
  const Button = ({ children, variant = 'default', size = 'md', className = '', onClick, ...props }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
      ghost: 'hover:bg-gray-800 text-gray-300'
    };
    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-8 text-lg'
    };
    
    return (
      <button 
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Simple Card Components
  const Card = ({ children, className = '' }) => (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children, className = '' }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );

  const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  );

  const CardDescription = ({ children, className = '' }) => (
    <p className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </p>
  );

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );

  // Simple Badge Component
  const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
      default: 'bg-green-600 text-white',
      destructive: 'bg-red-600 text-white',
      outline: 'border border-gray-600 text-gray-300'
    };
    
    return (
      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}>
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* شريط التنقل العلوي */}
      <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-blue-400 ml-2" />
                <span className="text-xl font-bold">منصة المال العربي</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-reverse space-x-6">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                لوحة التحكم
              </button>
              <button 
                onClick={() => setActiveTab('markets')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'markets' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                الأسواق
              </button>
              <button 
                onClick={() => setActiveTab('analysis')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'analysis' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                التحليلات
              </button>
              <button 
                onClick={() => setActiveTab('calendar')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'calendar' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                التقويم الاقتصادي
              </button>
              <button 
                onClick={() => setActiveTab('community')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'community' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                المجتمع
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'education' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                التعليم
              </button>
            </div>

            <div className="flex items-center space-x-reverse space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="default" size="sm">
                تسجيل الدخول
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* المحتوى الرئيسي */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* القسم الترحيبي */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            منصة المال العربي
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            منصتك الشاملة للتداول والاستثمار في الأسواق العربية والعالمية. تابع الأسواق، احصل على التحليلات، وتعلم من الخبراء
          </p>
          <div className="flex justify-center space-x-reverse space-x-4">
            <Button size="lg">
              ابدأ التداول الآن
            </Button>
            <Button size="lg" variant="outline">
              تعلم المزيد
            </Button>
          </div>
        </div>

        {/* الأسواق الرئيسية */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="ml-2 h-6 w-6 text-green-400" />
            الأسواق العربية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((market, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-white">{market.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{market.value}</span>
                    <Badge 
                      variant={market.isPositive ? "default" : "destructive"}
                    >
                      {market.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* العملات المشفرة */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BarChart3 className="ml-2 h-6 w-6 text-yellow-400" />
            العملات المشفرة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cryptoData.map((crypto, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-white flex items-center justify-between">
                    {crypto.name}
                    <span className="text-sm text-gray-400">{crypto.symbol}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">{crypto.value}</span>
                    <div className="flex items-center">
                      {crypto.isPositive ? (
                        <TrendingUp className="h-4 w-4 text-green-400 ml-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-400 ml-1" />
                      )}
                      <span className={crypto.isPositive ? "text-green-400" : "text-red-400"}>
                        {crypto.change}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* الأخبار المالية */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="ml-2 h-6 w-6 text-purple-400" />
            آخر الأخبار المالية
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="space-y-4">
                {newsData.map((news, index) => (
                  <div key={index} className="flex justify-between items-start p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                    <div>
                      <h3 className="text-white font-medium mb-1">{news.title}</h3>
                      <p className="text-gray-400 text-sm">{news.time}</p>
                    </div>
                    <Badge variant="outline">
                      جديد
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* الميزات الرئيسية */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">لماذا منصة المال العربي؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">تحليلات متقدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  احصل على تحليلات فنية وأساسية شاملة من خبراء الأسواق العربية
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">مجتمع تفاعلي</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  انضم إلى مجتمع المتداولين العرب وشارك الخبرات والاستراتيجيات
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">تعليم شامل</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  تعلم التداول والاستثمار من الصفر مع دورات تعليمية متخصصة
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* الفوتر */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-400 ml-2" />
                <span className="text-lg font-bold text-white">منصة المال العربي</span>
              </div>
              <p className="text-gray-400">
                منصتك الموثوقة للتداول والاستثمار في الأسواق العربية والعالمية
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">الأسواق</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">الأسهم السعودية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسهم الإماراتية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">العملات المشفرة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الفوركس</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">الخدمات</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">التحليلات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التقويم الاقتصادي</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأدوات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التعليم</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الدعم الفني</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 منصة المال العربي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

