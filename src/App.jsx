import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { TrendingUp, TrendingDown, BarChart3, Calendar, Users, BookOpen, Search, Bell } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  // بيانات وهمية للأسواق
  const marketData = [
    { name: 'السوق السعودي (تاسي)', value: '12,345.67', change: '+2.34%', isPositive: true },
    { name: 'سوق دبي المالي', value: '3,456.78', change: '-1.23%', isPositive: false },
    { name: 'بورصة مصر', value: '1,234.56', change: '+0.89%', isPositive: true },
    { name: 'سوق الكويت', value: '7,890.12', change: '+1.45%', isPositive: true },
  ]

  const cryptoData = [
    { name: 'بيتكوين', symbol: 'BTC', value: '$67,234', change: '+3.45%', isPositive: true },
    { name: 'إيثريوم', symbol: 'ETH', value: '$3,456', change: '-2.12%', isPositive: false },
    { name: 'ريبل', symbol: 'XRP', value: '$0.67', change: '+5.67%', isPositive: true },
  ]

  const newsData = [
    { title: 'البنك المركزي السعودي يرفع أسعار الفائدة', time: 'منذ ساعتين' },
    { title: 'أرامكو تعلن عن أرباح قياسية للربع الثالث', time: 'منذ 4 ساعات' },
    { title: 'صندوق الاستثمارات العامة يستثمر في التكنولوجيا', time: 'منذ 6 ساعات' },
  ]

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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              ابدأ التداول الآن
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
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
                      className={market.isPositive ? "bg-green-600" : "bg-red-600"}
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
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
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

