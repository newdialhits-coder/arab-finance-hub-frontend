import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Activity } from 'lucide-react'

function Dashboard() {
  const [marketData, setMarketData] = useState([])
  const [cryptoData, setCryptoData] = useState([])
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
            const markets = Object.values(marketResult.data);
            setMarketData(markets);
          }
        }

        // Fetch Crypto Data
        const cryptoResponse = await fetch(`${API_BASE_URL}/api/markets/crypto`);
        if (cryptoResponse.ok) {
          const cryptoResult = await cryptoResponse.json();
          if (cryptoResult.success && cryptoResult.data) {
            const cryptos = Object.values(cryptoResult.data);
            setCryptoData(cryptos);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          <p className="text-xl mt-4">جاري تحميل لوحة التحكم...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* العنوان الرئيسي */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <BarChart3 className="ml-3 h-8 w-8 text-blue-400" />
            لوحة التحكم
          </h1>
          <p className="text-gray-300">نظرة شاملة على محفظتك والأسواق المالية</p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">إجمالي المحفظة</p>
                <p className="text-2xl font-bold text-white">$125,430</p>
                <p className="text-green-400 text-sm">+2.5% اليوم</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الربح/الخسارة</p>
                <p className="text-2xl font-bold text-green-400">+$3,250</p>
                <p className="text-green-400 text-sm">+2.67%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">عدد الاستثمارات</p>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-blue-400 text-sm">في 4 أسواق</p>
              </div>
              <Activity className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">أفضل أداء</p>
                <p className="text-2xl font-bold text-white">AAPL</p>
                <p className="text-green-400 text-sm">+15.2%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* الأسواق العربية */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="ml-2 h-6 w-6 text-green-400" />
            الأسواق العربية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((market, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-white">{market.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">{market.current_value.toLocaleString()}</span>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    market.is_positive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {market.is_positive ? '+' : ''}{market.change_percent.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* العملات المشفرة */}
        <div className="mb-8">
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
                  <span className="text-xl font-bold text-white">${crypto.current_value.toLocaleString()}</span>
                  <div className="flex items-center">
                    {crypto.is_positive ? (
                      <TrendingUp className="h-4 w-4 text-green-400 ml-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400 ml-1" />
                    )}
                    <span className={crypto.is_positive ? "text-green-400" : "text-red-400"}>
                      {crypto.is_positive ? '+' : ''}{crypto.change_percent.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* رسم بياني مؤقت */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">أداء المحفظة</h2>
          <div className="h-64 flex items-center justify-center bg-slate-700/50 rounded-lg">
            <p className="text-gray-400">سيتم إضافة الرسوم البيانية في المرحلة التالية</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

