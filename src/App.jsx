import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, BarChart3, Calendar, Search, Bell } from 'lucide-react'
import './App.css'

function App() {
  const [marketData, setMarketData] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true)

  const API_BASE_URL = 'https://arab-finance-hub-backend.onrender.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Market Data
        const marketResponse = await fetch(`${API_BASE_URL}/api/markets/arab`);
        if (marketResponse.ok) {
          const marketResult = await marketResponse.json();
          if (marketResult.success && marketResult.data) {
            const markets = Object.values(marketResult.data).map(market => ({
              name: market.name,
              value: market.current_value.toLocaleString(),
              change: `${market.change_percent > 0 ? '+' : ''}${market.change_percent.toFixed(2)}%`,
              isPositive: market.is_positive
            }));
            setMarketData(markets);
          }
        }

        // Fetch Crypto Data
        const cryptoResponse = await fetch(`${API_BASE_URL}/api/markets/crypto`);
        if (cryptoResponse.ok) {
          const cryptoResult = await cryptoResponse.json();
          if (cryptoResult.success && cryptoResult.data) {
            const cryptos = Object.values(cryptoResult.data).map(crypto => ({
              name: crypto.name,
              symbol: crypto.symbol,
              value: `$${crypto.current_value.toLocaleString()}`,
              change: `${crypto.change_percent > 0 ? '+' : ''}${crypto.change_percent.toFixed(2)}%`,
              isPositive: crypto.is_positive
            }));
            setCryptoData(cryptos);
          }
        }

        // Fetch News Data
        const newsResponse = await fetch(`${API_BASE_URL}/api/news/financial`);
        if (newsResponse.ok) {
          const newsResult = await newsResponse.json();
          if (newsResult.success && newsResult.data) {
            const news = newsResult.data.map(item => ({
              title: item.title,
              time: new Date(item.published_at).toLocaleString('ar-SA')
            }));
            setNewsData(news);
          }
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* شريط التنقل العلوي */}
      <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-400 ml-2" />
              <span className="text-xl font-bold">منصة المال العربي</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-reverse space-x-6">
              <button className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">
                لوحة التحكم
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">
                الأسواق
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">
                التحليلات
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">
                التقويم الاقتصادي
              </button>
            </div>

            <div className="flex items-center space-x-reverse space-x-4">
              <button className="p-2 text-gray-300 hover:text-white">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white">
                <Bell className="h-4 w-4" />
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                تسجيل الدخول
              </button>
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
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium">
              ابدأ التداول الآن
            </button>
            <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg text-lg font-medium">
              تعلم المزيد
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            <p className="text-xl mt-4">جاري تحميل البيانات...</p>
          </div>
        ) : (
          <>
            {/* الأسواق العربية */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="ml-2 h-6 w-6 text-green-400" />
                الأسواق العربية
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketData.map((market, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                    <h3 className="text-lg font-semibold mb-2 text-white">{market.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-white">{market.value}</span>
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        market.isPositive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                      }`}>
                        {market.change}
                      </span>
                    </div>
                  </div>
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
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-white">{crypto.name}</h3>
                      <span className="text-sm text-gray-400">{crypto.symbol}</span>
                    </div>
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
                  </div>
                ))}
              </div>
            </section>

            {/* الأخبار المالية */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="ml-2 h-6 w-6 text-purple-400" />
                آخر الأخبار المالية
              </h2>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="space-y-4">
                  {newsData.map((news, index) => (
                    <div key={index} className="flex justify-between items-start p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                      <div>
                        <h3 className="text-white font-medium mb-1">{news.title}</h3>
                        <p className="text-gray-400 text-sm">{news.time}</p>
                      </div>
                      <span className="px-2 py-1 border border-gray-600 text-gray-300 rounded text-xs">
                        جديد
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* الميزات الرئيسية */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">لماذا منصة المال العربي؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">تحليلات متقدمة</h3>
              <p className="text-gray-300">
                احصل على تحليلات فنية وأساسية شاملة من خبراء الأسواق العربية
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">مجتمع تفاعلي</h3>
              <p className="text-gray-300">
                انضم إلى مجتمع المتداولين العرب وشارك الخبرات والاستراتيجيات
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <Calendar className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">تعليم شامل</h3>
              <p className="text-gray-300">
                تعلم التداول والاستثمار من الصفر مع دورات تعليمية متخصصة
              </p>
            </div>
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

