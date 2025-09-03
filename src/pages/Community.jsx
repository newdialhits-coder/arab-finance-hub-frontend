import { useState } from 'react'
import { Users, MessageCircle, TrendingUp, Star, ThumbsUp, Share2, Clock } from 'lucide-react'

function Community() {
  const [activeTab, setActiveTab] = useState('discussions')

  const discussions = [
    {
      id: 1,
      title: "ما رأيكم في أداء السوق السعودي هذا الأسبوع؟",
      author: "أحمد المالكي",
      avatar: "👨‍💼",
      time: "منذ ساعتين",
      replies: 23,
      likes: 45,
      category: "الأسواق العربية",
      preview: "يبدو أن السوق يظهر إشارات إيجابية مع كسر مستوى المقاومة..."
    },
    {
      id: 2,
      title: "استراتيجية التداول في العملات المشفرة للمبتدئين",
      author: "سارة أحمد",
      avatar: "👩‍💻",
      time: "منذ 4 ساعات",
      replies: 67,
      likes: 128,
      category: "العملات المشفرة",
      preview: "أشارك معكم استراتيجية بسيطة وفعالة للمبتدئين في تداول الكريبتو..."
    },
    {
      id: 3,
      title: "تحليل فني لسهم أرامكو - نظرة طويلة المدى",
      author: "محمد الخبير",
      avatar: "📊",
      time: "منذ 6 ساعات",
      replies: 34,
      likes: 89,
      category: "التحليل الفني",
      preview: "بناءً على التحليل الفني، أتوقع أن يصل سهم أرامكو إلى..."
    }
  ];

  const topTraders = [
    {
      name: "خالد المستثمر",
      avatar: "🏆",
      rank: 1,
      profit: "+45.2%",
      followers: 1250,
      posts: 89
    },
    {
      name: "فاطمة التاجرة",
      avatar: "💎",
      rank: 2,
      profit: "+38.7%",
      followers: 980,
      posts: 67
    },
    {
      name: "عبدالله المحلل",
      avatar: "📈",
      rank: 3,
      profit: "+32.1%",
      followers: 756,
      posts: 123
    }
  ];

  const signals = [
    {
      id: 1,
      symbol: "TASI",
      action: "شراء",
      price: "11,500",
      target: "12,200",
      author: "محمد الخبير",
      time: "منذ 30 دقيقة",
      accuracy: "85%"
    },
    {
      id: 2,
      symbol: "BTC",
      action: "احتفاظ",
      price: "$62,000",
      target: "$68,000",
      author: "سارة أحمد",
      time: "منذ ساعة",
      accuracy: "78%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* العنوان الرئيسي */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Users className="ml-3 h-8 w-8 text-blue-400" />
            مجتمع المتداولين العرب
          </h1>
          <p className="text-gray-300">انضم إلى مجتمع المتداولين والمستثمرين العرب وشارك الخبرات والاستراتيجيات</p>
        </div>

        {/* إحصائيات المجتمع */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الأعضاء النشطون</p>
                <p className="text-2xl font-bold text-white">2,847</p>
                <p className="text-green-400 text-sm">+127 هذا الأسبوع</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">المناقشات اليوم</p>
                <p className="text-2xl font-bold text-white">156</p>
                <p className="text-blue-400 text-sm">+23 جديدة</p>
              </div>
              <MessageCircle className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الإشارات المشاركة</p>
                <p className="text-2xl font-bold text-white">89</p>
                <p className="text-yellow-400 text-sm">دقة 82%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">أفضل المتداولين</p>
                <p className="text-2xl font-bold text-white">50</p>
                <p className="text-purple-400 text-sm">ربح +30%</p>
              </div>
              <Star className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* تبويبات المحتوى */}
        <div className="mb-8">
          <div className="flex space-x-reverse space-x-1 bg-slate-800/50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'discussions'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <MessageCircle className="ml-2 h-4 w-4" />
              المناقشات
            </button>
            <button
              onClick={() => setActiveTab('signals')}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'signals'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <TrendingUp className="ml-2 h-4 w-4" />
              الإشارات
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'leaderboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Star className="ml-2 h-4 w-4" />
              لوحة الشرف
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-2">
            {activeTab === 'discussions' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">أحدث المناقشات</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
                    إنشاء مناقشة جديدة
                  </button>
                </div>
                
                <div className="space-y-6">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{discussion.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-white">{discussion.title}</h3>
                            <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
                              {discussion.category}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-3">{discussion.preview}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>{discussion.author}</span>
                              <span className="flex items-center">
                                <Clock className="ml-1 h-4 w-4" />
                                {discussion.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                                <ThumbsUp className="h-4 w-4" />
                                {discussion.likes}
                              </button>
                              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                                <MessageCircle className="h-4 w-4" />
                                {discussion.replies}
                              </button>
                              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                                <Share2 className="h-4 w-4" />
                                مشاركة
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'signals' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">إشارات التداول</h2>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition-colors">
                    مشاركة إشارة
                  </button>
                </div>
                
                <div className="space-y-4">
                  {signals.map((signal) => (
                    <div key={signal.id} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{signal.symbol}</h3>
                            <span className={`px-3 py-1 rounded font-medium ${
                              signal.action === 'شراء' ? 'bg-green-600 text-white' :
                              signal.action === 'بيع' ? 'bg-red-600 text-white' :
                              'bg-yellow-600 text-white'
                            }`}>
                              {signal.action}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">السعر الحالي: </span>
                              <span className="text-white font-medium">{signal.price}</span>
                            </div>
                            <div>
                              <span className="text-gray-400">الهدف: </span>
                              <span className="text-green-400 font-medium">{signal.target}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold">{signal.accuracy}</div>
                          <div className="text-gray-400 text-sm">دقة</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>بواسطة: {signal.author}</span>
                        <span>{signal.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">لوحة الشرف - أفضل المتداولين</h2>
                
                <div className="space-y-4">
                  {topTraders.map((trader) => (
                    <div key={trader.rank} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                            trader.rank === 1 ? 'bg-yellow-600' :
                            trader.rank === 2 ? 'bg-gray-400' :
                            'bg-orange-600'
                          }`}>
                            {trader.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-bold">#{trader.rank}</span>
                              <span className="text-white font-semibold">{trader.name}</span>
                            </div>
                            <div className="text-gray-400 text-sm">
                              {trader.followers} متابع • {trader.posts} منشور
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-green-400 font-bold text-xl">{trader.profit}</div>
                          <div className="text-gray-400 text-sm">الربح الإجمالي</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* الشريط الجانبي */}
          <div className="space-y-6">
            {/* أفضل المتداولين */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Star className="ml-2 h-5 w-5 text-yellow-400" />
                أفضل المتداولين هذا الشهر
              </h3>
              <div className="space-y-3">
                {topTraders.slice(0, 3).map((trader) => (
                  <div key={trader.rank} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{trader.avatar}</span>
                      <span className="text-white text-sm">{trader.name}</span>
                    </div>
                    <span className="text-green-400 text-sm font-medium">{trader.profit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* إحصائيات سريعة */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">إحصائيات سريعة</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">المناقشات النشطة</span>
                  <span className="text-white font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">الإشارات اليوم</span>
                  <span className="text-white font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">متوسط الدقة</span>
                  <span className="text-green-400 font-medium">82%</span>
                </div>
              </div>
            </div>

            {/* قواعد المجتمع */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">قواعد المجتمع</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• احترم الآراء المختلفة</li>
                <li>• شارك المعلومات الموثقة فقط</li>
                <li>• لا تقدم نصائح مالية شخصية</li>
                <li>• تجنب الترويج المباشر</li>
                <li>• استخدم لغة مهذبة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community

