import { useState, useEffect } from 'react'
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
        const marketResult = await marketResponse.json();
        setMarketData(marketResult);

        // Fetch Crypto Data
        const cryptoResponse = await fetch(`${API_BASE_URL}/api/markets/crypto`);
        const cryptoResult = await cryptoResponse.json();
        setCryptoData(cryptoResult);

        // Fetch News Data
        const newsResponse = await fetch(`${API_BASE_URL}/api/news/financial`);
        const newsResult = await newsResponse.json();
        setNewsData(newsResult);

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
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">منصة المال العربي</h1>
        
        <div className="text-center mb-12">
          <p className="text-xl mb-4">منصتك الشاملة للتداول والاستثمار في الأسواق العربية والعالمية</p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
              ابدأ التداول الآن
            </button>
            <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2 rounded-lg">
              تعلم المزيد
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center">
            <p className="text-xl">جاري تحميل البيانات...</p>
          </div>
        ) : (
          <>
            {/* الأسواق العربية */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">الأسواق العربية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketData.map((market, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                    <h3 className="text-lg font-semibold mb-2">{market.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">{market.value}</span>
                      <span className={`px-2 py-1 rounded text-sm ${market.isPositive ? 'bg-green-600' : 'bg-red-600'}`}>
                        {market.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* العملات المشفرة */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">العملات المشفرة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cryptoData.map((crypto, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{crypto.name}</h3>
                      <span className="text-sm text-gray-400">{crypto.symbol}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">{crypto.value}</span>
                      <span className={crypto.isPositive ? "text-green-400" : "text-red-400"}>
                        {crypto.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* الأخبار المالية */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">آخر الأخبار المالية</h2>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="space-y-4">
                  {newsData.map((news, index) => (
                    <div key={index} className="flex justify-between items-start p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                      <div>
                        <h3 className="font-medium mb-1">{news.title}</h3>
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

        {/* الميزات */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">لماذا منصة المال العربي؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">تحليلات متقدمة</h3>
              <p className="text-gray-300">
                احصل على تحليلات فنية وأساسية شاملة من خبراء الأسواق العربية
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">مجتمع تفاعلي</h3>
              <p className="text-gray-300">
                انضم إلى مجتمع المتداولين العرب وشارك الخبرات والاستراتيجيات
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">تعليم شامل</h3>
              <p className="text-gray-300">
                تعلم التداول والاستثمار من الصفر مع دورات تعليمية متخصصة
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* الفوتر */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 منصة المال العربي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

