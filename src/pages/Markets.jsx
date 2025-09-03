import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Search, Filter, Globe, Coins } from 'lucide-react'

function Markets() {
  const [marketData, setMarketData] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('arab')
  const [searchTerm, setSearchTerm] = useState('')

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
          <p className="text-xl mt-4">جاري تحميل بيانات الأسواق...</p>
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
            <Globe className="ml-3 h-8 w-8 text-blue-400" />
            الأسواق المالية
          </h1>
          <p className="text-gray-300">تابع أحدث أسعار الأسهم والعملات المشفرة في الأسواق العربية والعالمية</p>
        </div>

        {/* شريط البحث والفلاتر */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="ابحث عن سهم أو عملة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white hover:bg-slate-800/70 transition-colors">
            <Filter className="ml-2 h-5 w-5" />
            فلترة
          </button>
        </div>

        {/* تبويبات الأسواق */}
        <div className="mb-8">
          <div className="flex space-x-reverse space-x-1 bg-slate-800/50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('arab')}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'arab'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Globe className="ml-2 h-4 w-4" />
              الأسواق العربية
            </button>
            <button
              onClick={() => setActiveTab('crypto')}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'crypto'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Coins className="ml-2 h-4 w-4" />
              العملات المشفرة
            </button>
          </div>
        </div>

        {/* محتوى الأسواق */}
        {activeTab === 'arab' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <TrendingUp className="ml-2 h-6 w-6 text-green-400" />
              الأسواق العربية
            </h2>
            
            {/* جدول الأسواق العربية */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">السوق</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">السعر الحالي</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">التغيير</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">النسبة</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">آخر تحديث</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {marketData.map((market, index) => (
                      <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-white font-medium">{market.name}</div>
                            <div className="text-gray-400 text-sm">{market.symbol}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-white font-bold">
                          {market.current_value.toLocaleString()} {market.currency}
                        </td>
                        <td className={`px-6 py-4 font-medium ${market.is_positive ? 'text-green-400' : 'text-red-400'}`}>
                          {market.is_positive ? '+' : ''}{market.change_value.toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium ${
                            market.is_positive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                          }`}>
                            {market.is_positive ? (
                              <TrendingUp className="ml-1 h-3 w-3" />
                            ) : (
                              <TrendingDown className="ml-1 h-3 w-3" />
                            )}
                            {market.is_positive ? '+' : ''}{market.change_percent.toFixed(2)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400 text-sm">
                          {new Date(market.last_updated).toLocaleString('ar-SA')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'crypto' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Coins className="ml-2 h-6 w-6 text-yellow-400" />
              العملات المشفرة
            </h2>
            
            {/* جدول العملات المشفرة */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">العملة</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">السعر الحالي</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">التغيير</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">النسبة</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">آخر تحديث</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {cryptoData.map((crypto, index) => (
                      <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-white font-medium">{crypto.name}</div>
                            <div className="text-gray-400 text-sm">{crypto.symbol}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-white font-bold">
                          ${crypto.current_value.toLocaleString()}
                        </td>
                        <td className={`px-6 py-4 font-medium ${crypto.is_positive ? 'text-green-400' : 'text-red-400'}`}>
                          {crypto.is_positive ? '+' : ''}${crypto.change_value.toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium ${
                            crypto.is_positive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                          }`}>
                            {crypto.is_positive ? (
                              <TrendingUp className="ml-1 h-3 w-3" />
                            ) : (
                              <TrendingDown className="ml-1 h-3 w-3" />
                            )}
                            {crypto.is_positive ? '+' : ''}{crypto.change_percent.toFixed(2)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400 text-sm">
                          {new Date(crypto.last_updated).toLocaleString('ar-SA')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Markets

