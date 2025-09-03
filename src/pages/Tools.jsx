import { useState } from 'react'
import { Calculator, DollarSign, TrendingUp, PieChart, Target, AlertTriangle } from 'lucide-react'

function Tools() {
  const [activeCalculator, setActiveCalculator] = useState('profit')
  
  // حاسبة الربح والخسارة
  const [profitCalc, setProfitCalc] = useState({
    buyPrice: '',
    sellPrice: '',
    quantity: '',
    commission: '0.15'
  })

  // حاسبة المخاطر
  const [riskCalc, setRiskCalc] = useState({
    capital: '',
    riskPercent: '2',
    entryPrice: '',
    stopLoss: ''
  })

  // محول العملات
  const [currencyCalc, setCurrencyCalc] = useState({
    amount: '',
    fromCurrency: 'USD',
    toCurrency: 'SAR'
  })

  const exchangeRates = {
    'USD': { 'SAR': 3.75, 'AED': 3.67, 'EGP': 30.85 },
    'SAR': { 'USD': 0.27, 'AED': 0.98, 'EGP': 8.23 },
    'AED': { 'USD': 0.27, 'SAR': 1.02, 'EGP': 8.41 },
    'EGP': { 'USD': 0.032, 'SAR': 0.12, 'AED': 0.12 }
  }

  const calculateProfit = () => {
    const buy = parseFloat(profitCalc.buyPrice) || 0
    const sell = parseFloat(profitCalc.sellPrice) || 0
    const qty = parseFloat(profitCalc.quantity) || 0
    const comm = parseFloat(profitCalc.commission) || 0

    const grossProfit = (sell - buy) * qty
    const totalCommission = (buy * qty + sell * qty) * (comm / 100)
    const netProfit = grossProfit - totalCommission
    const profitPercent = buy > 0 ? ((sell - buy) / buy) * 100 : 0

    return {
      grossProfit: grossProfit.toFixed(2),
      totalCommission: totalCommission.toFixed(2),
      netProfit: netProfit.toFixed(2),
      profitPercent: profitPercent.toFixed(2)
    }
  }

  const calculateRisk = () => {
    const capital = parseFloat(riskCalc.capital) || 0
    const riskPercent = parseFloat(riskCalc.riskPercent) || 0
    const entry = parseFloat(riskCalc.entryPrice) || 0
    const stopLoss = parseFloat(riskCalc.stopLoss) || 0

    const riskAmount = capital * (riskPercent / 100)
    const priceRisk = Math.abs(entry - stopLoss)
    const positionSize = priceRisk > 0 ? riskAmount / priceRisk : 0

    return {
      riskAmount: riskAmount.toFixed(2),
      positionSize: Math.floor(positionSize),
      priceRisk: priceRisk.toFixed(2)
    }
  }

  const convertCurrency = () => {
    const amount = parseFloat(currencyCalc.amount) || 0
    const rate = exchangeRates[currencyCalc.fromCurrency]?.[currencyCalc.toCurrency] || 1
    return (amount * rate).toFixed(2)
  }

  const tools = [
    {
      id: 'profit',
      name: 'حاسبة الربح والخسارة',
      icon: <Calculator className="h-6 w-6" />,
      description: 'احسب الربح أو الخسارة المتوقعة من صفقاتك'
    },
    {
      id: 'risk',
      name: 'حاسبة إدارة المخاطر',
      icon: <AlertTriangle className="h-6 w-6" />,
      description: 'حدد حجم المركز المناسب بناءً على مستوى المخاطرة'
    },
    {
      id: 'currency',
      name: 'محول العملات',
      icon: <DollarSign className="h-6 w-6" />,
      description: 'تحويل بين العملات العربية والعالمية'
    },
    {
      id: 'compound',
      name: 'حاسبة الفائدة المركبة',
      icon: <TrendingUp className="h-6 w-6" />,
      description: 'احسب نمو استثماراتك على المدى الطويل'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* العنوان الرئيسي */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Calculator className="ml-3 h-8 w-8 text-blue-400" />
            الأدوات المالية
          </h1>
          <p className="text-gray-300">مجموعة شاملة من الأدوات والحاسبات المالية لمساعدتك في اتخاذ قرارات استثمارية مدروسة</p>
        </div>

        {/* إحصائيات الأدوات */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الأدوات المتاحة</p>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-blue-400 text-sm">مجانية بالكامل</p>
              </div>
              <Calculator className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الحسابات اليوم</p>
                <p className="text-2xl font-bold text-white">1,247</p>
                <p className="text-green-400 text-sm">+156 جديدة</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">المستخدمون النشطون</p>
                <p className="text-2xl font-bold text-white">3,456</p>
                <p className="text-yellow-400 text-sm">هذا الشهر</p>
              </div>
              <PieChart className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">دقة الحسابات</p>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-purple-400 text-sm">موثوقة</p>
              </div>
              <Target className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* قائمة الأدوات */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">اختر الأداة</h2>
            <div className="space-y-2">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveCalculator(tool.id)}
                  className={`w-full text-right p-4 rounded-lg transition-colors ${
                    activeCalculator === tool.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800/50 border border-slate-700 text-gray-300 hover:bg-slate-800/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {tool.icon}
                    <div>
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-sm opacity-75">{tool.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* منطقة الحاسبة */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              {activeCalculator === 'profit' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Calculator className="ml-2 h-6 w-6 text-green-400" />
                    حاسبة الربح والخسارة
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">سعر الشراء</label>
                        <input
                          type="number"
                          value={profitCalc.buyPrice}
                          onChange={(e) => setProfitCalc({...profitCalc, buyPrice: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0.00"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">سعر البيع</label>
                        <input
                          type="number"
                          value={profitCalc.sellPrice}
                          onChange={(e) => setProfitCalc({...profitCalc, sellPrice: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0.00"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">الكمية</label>
                        <input
                          type="number"
                          value={profitCalc.quantity}
                          onChange={(e) => setProfitCalc({...profitCalc, quantity: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">العمولة (%)</label>
                        <input
                          type="number"
                          value={profitCalc.commission}
                          onChange={(e) => setProfitCalc({...profitCalc, commission: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0.15"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-4">النتائج</h3>
                      {(() => {
                        const results = calculateProfit()
                        return (
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">الربح الإجمالي:</span>
                              <span className={`font-bold ${parseFloat(results.grossProfit) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {results.grossProfit} ريال
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">إجمالي العمولة:</span>
                              <span className="text-red-400 font-bold">{results.totalCommission} ريال</span>
                            </div>
                            <div className="flex justify-between border-t border-slate-600 pt-3">
                              <span className="text-white font-bold">صافي الربح:</span>
                              <span className={`font-bold text-lg ${parseFloat(results.netProfit) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {results.netProfit} ريال
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">نسبة الربح:</span>
                              <span className={`font-bold ${parseFloat(results.profitPercent) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {results.profitPercent}%
                              </span>
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  </div>
                </div>
              )}

              {activeCalculator === 'risk' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <AlertTriangle className="ml-2 h-6 w-6 text-red-400" />
                    حاسبة إدارة المخاطر
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">رأس المال</label>
                        <input
                          type="number"
                          value={riskCalc.capital}
                          onChange={(e) => setRiskCalc({...riskCalc, capital: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="100000"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">نسبة المخاطرة (%)</label>
                        <input
                          type="number"
                          value={riskCalc.riskPercent}
                          onChange={(e) => setRiskCalc({...riskCalc, riskPercent: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="2"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">سعر الدخول</label>
                        <input
                          type="number"
                          value={riskCalc.entryPrice}
                          onChange={(e) => setRiskCalc({...riskCalc, entryPrice: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="100"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">وقف الخسارة</label>
                        <input
                          type="number"
                          value={riskCalc.stopLoss}
                          onChange={(e) => setRiskCalc({...riskCalc, stopLoss: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="95"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-4">النتائج</h3>
                      {(() => {
                        const results = calculateRisk()
                        return (
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">مبلغ المخاطرة:</span>
                              <span className="text-red-400 font-bold">{results.riskAmount} ريال</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">مخاطرة السعر:</span>
                              <span className="text-yellow-400 font-bold">{results.priceRisk} ريال</span>
                            </div>
                            <div className="flex justify-between border-t border-slate-600 pt-3">
                              <span className="text-white font-bold">حجم المركز:</span>
                              <span className="text-green-400 font-bold text-lg">{results.positionSize} سهم</span>
                            </div>
                            <div className="mt-4 p-3 bg-blue-600/20 rounded-lg">
                              <p className="text-blue-400 text-sm">
                                💡 نصيحة: لا تخاطر بأكثر من 2% من رأس مالك في صفقة واحدة
                              </p>
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  </div>
                </div>
              )}

              {activeCalculator === 'currency' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <DollarSign className="ml-2 h-6 w-6 text-yellow-400" />
                    محول العملات
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">المبلغ</label>
                        <input
                          type="number"
                          value={currencyCalc.amount}
                          onChange={(e) => setCurrencyCalc({...currencyCalc, amount: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="1000"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">من</label>
                        <select
                          value={currencyCalc.fromCurrency}
                          onChange={(e) => setCurrencyCalc({...currencyCalc, fromCurrency: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="USD">دولار أمريكي (USD)</option>
                          <option value="SAR">ريال سعودي (SAR)</option>
                          <option value="AED">درهم إماراتي (AED)</option>
                          <option value="EGP">جنيه مصري (EGP)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">إلى</label>
                        <select
                          value={currencyCalc.toCurrency}
                          onChange={(e) => setCurrencyCalc({...currencyCalc, toCurrency: e.target.value})}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="USD">دولار أمريكي (USD)</option>
                          <option value="SAR">ريال سعودي (SAR)</option>
                          <option value="AED">درهم إماراتي (AED)</option>
                          <option value="EGP">جنيه مصري (EGP)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-4">النتيجة</h3>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                          {convertCurrency()}
                        </div>
                        <div className="text-gray-400">
                          {currencyCalc.toCurrency}
                        </div>
                        <div className="mt-4 text-sm text-gray-400">
                          سعر الصرف: 1 {currencyCalc.fromCurrency} = {exchangeRates[currencyCalc.fromCurrency]?.[currencyCalc.toCurrency] || 1} {currencyCalc.toCurrency}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeCalculator === 'compound' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <TrendingUp className="ml-2 h-6 w-6 text-purple-400" />
                    حاسبة الفائدة المركبة
                  </h2>
                  
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🚧</div>
                    <h3 className="text-xl font-bold mb-2">قريباً</h3>
                    <p className="text-gray-400">سيتم إضافة هذه الأداة في التحديث القادم</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* نصائح مفيدة */}
        <div className="mt-12 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Target className="ml-2 h-6 w-6 text-blue-400" />
            نصائح مهمة لاستخدام الأدوات
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <AlertTriangle className="ml-2 h-5 w-5 text-red-400" />
                إدارة المخاطر
              </h3>
              <p className="text-gray-300 text-sm">
                لا تخاطر بأكثر من 1-2% من رأس مالك في صفقة واحدة. استخدم حاسبة المخاطر لتحديد حجم المركز المناسب.
              </p>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <Calculator className="ml-2 h-5 w-5 text-green-400" />
                دقة الحسابات
              </h3>
              <p className="text-gray-300 text-sm">
                تأكد من إدخال البيانات بدقة. راجع النتائج قبل اتخاذ أي قرار استثماري.
              </p>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <TrendingUp className="ml-2 h-5 w-5 text-blue-400" />
                التخطيط طويل المدى
              </h3>
              <p className="text-gray-300 text-sm">
                استخدم حاسبة الفائدة المركبة لفهم قوة الاستثمار طويل المدى والتخطيط للمستقبل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools

