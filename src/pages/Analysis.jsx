import { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, TrendingDown, Target, FileText, Calendar } from 'lucide-react'

function Analysis() {
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true)

  const API_BASE_URL = 'https://arab-finance-hub-backend.onrender.com';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsResponse = await fetch(`${API_BASE_URL}/api/news/financial`);
        if (newsResponse.ok) {
          const newsResult = await newsResponse.json();
          if (newsResult.success && newsResult.data) {
            setNewsData(newsResult.data);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const analysisData = [
    {
      title: "تحليل السوق السعودي - نظرة أسبوعية",
      type: "تحليل فني",
      summary: "يظهر السوق السعودي إشارات إيجابية مع كسر مستوى المقاومة عند 11,500 نقطة",
      recommendation: "شراء",
      confidence: 85,
      date: "2025-09-03"
    },
    {
      title: "تحليل أرامكو - الربع الثالث 2025",
      type: "تحليل أساسي",
      summary: "أرباح قوية متوقعة مع ارتفاع أسعار النفط وزيادة الإنتاج",
      recommendation: "احتفاظ",
      confidence: 78,
      date: "2025-09-02"
    },
    {
      title: "العملات المشفرة - اتجاه صاعد محتمل",
      type: "تحليل فني",
      summary: "البيتكوين يختبر مستوى المقاومة الرئيسي عند $70,000",
      recommendation: "شراء",
      confidence: 72,
      date: "2025-09-01"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          <p className="text-xl mt-4">جاري تحميل التحليلات...</p>
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
            التحليلات المالية
          </h1>
          <p className="text-gray-300">تحليلات فنية وأساسية شاملة من خبراء الأسواق العربية</p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">التحليلات اليوم</p>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-blue-400 text-sm">+3 جديدة</p>
              </div>
              <FileText className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">توصيات الشراء</p>
                <p className="text-2xl font-bold text-green-400">8</p>
                <p className="text-green-400 text-sm">67% من التحليلات</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">توصيات البيع</p>
                <p className="text-2xl font-bold text-red-400">2</p>
                <p className="text-red-400 text-sm">17% من التحليلات</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">دقة التوقعات</p>
                <p className="text-2xl font-bold text-white">84%</p>
                <p className="text-green-400 text-sm">آخر 30 يوم</p>
              </div>
              <Target className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* التحليلات الحديثة */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="ml-2 h-6 w-6 text-blue-400" />
            أحدث التحليلات
          </h2>
          
          <div className="space-y-6">
            {analysisData.map((analysis, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{analysis.title}</h3>
                      <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
                        {analysis.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{analysis.summary}</p>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded font-medium ${
                        analysis.recommendation === 'شراء' ? 'bg-green-600 text-white' :
                        analysis.recommendation === 'بيع' ? 'bg-red-600 text-white' :
                        'bg-yellow-600 text-white'
                      }`}>
                        {analysis.recommendation}
                      </span>
                      <span className="text-gray-400 text-sm">
                        مستوى الثقة: {analysis.confidence}%
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar className="ml-1 h-4 w-4" />
                        {analysis.date}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      analysis.confidence >= 80 ? 'bg-green-600' :
                      analysis.confidence >= 60 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}>
                      <span className="text-white font-bold">{analysis.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الأخبار المؤثرة */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="ml-2 h-6 w-6 text-purple-400" />
            الأخبار المؤثرة على الأسواق
          </h2>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="space-y-4">
              {newsData.slice(0, 5).map((news, index) => (
                <div key={index} className="flex justify-between items-start p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{news.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{news.summary}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-xs">
                        {new Date(news.published_at).toLocaleString('ar-SA')}
                      </span>
                      <span className="text-gray-400 text-xs">{news.source}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        news.importance === 'high' ? 'bg-red-600 text-white' :
                        news.importance === 'medium' ? 'bg-yellow-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {news.importance === 'high' ? 'عالي الأهمية' :
                         news.importance === 'medium' ? 'متوسط الأهمية' :
                         'منخفض الأهمية'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* رسم بياني مؤقت */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">مؤشرات التحليل الفني</h2>
          <div className="h-64 flex items-center justify-center bg-slate-700/50 rounded-lg">
            <p className="text-gray-400">سيتم إضافة الرسوم البيانية التفاعلية في المرحلة التالية</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis

