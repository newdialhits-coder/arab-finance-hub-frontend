import { useState } from 'react'
import { Calendar, Clock, AlertTriangle, TrendingUp, Globe } from 'lucide-react'

function EconomicCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const economicEvents = [
    {
      id: 1,
      title: "قرار البنك المركزي السعودي بشأن أسعار الفائدة",
      time: "14:00",
      date: "2025-09-03",
      country: "السعودية",
      importance: "high",
      impact: "عالي",
      previous: "5.50%",
      forecast: "5.75%",
      actual: null,
      description: "اجتماع لجنة السياسة النقدية لتحديد أسعار الفائدة الأساسية"
    },
    {
      id: 2,
      title: "بيانات التضخم الشهرية - الإمارات",
      time: "10:30",
      date: "2025-09-04",
      country: "الإمارات",
      importance: "medium",
      impact: "متوسط",
      previous: "2.1%",
      forecast: "2.3%",
      actual: null,
      description: "معدل التضخم السنوي لشهر أغسطس 2025"
    },
    {
      id: 3,
      title: "إعلان أرباح شركة أرامكو السعودية",
      time: "16:00",
      date: "2025-09-05",
      country: "السعودية",
      importance: "high",
      impact: "عالي",
      previous: "32.6B",
      forecast: "35.2B",
      actual: null,
      description: "النتائج المالية للربع الثالث من عام 2025"
    },
    {
      id: 4,
      title: "بيانات الناتج المحلي الإجمالي - مصر",
      time: "12:00",
      date: "2025-09-06",
      country: "مصر",
      importance: "high",
      impact: "عالي",
      previous: "3.8%",
      forecast: "4.1%",
      actual: null,
      description: "نمو الناتج المحلي الإجمالي للربع الثاني 2025"
    },
    {
      id: 5,
      title: "مؤشر مديري المشتريات - الكويت",
      time: "09:00",
      date: "2025-09-07",
      country: "الكويت",
      importance: "medium",
      impact: "متوسط",
      previous: "52.3",
      forecast: "53.1",
      actual: null,
      description: "مؤشر النشاط الاقتصادي في القطاع غير النفطي"
    }
  ];

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high': return 'bg-red-600 text-white';
      case 'medium': return 'bg-yellow-600 text-white';
      case 'low': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getCountryFlag = (country) => {
    const flags = {
      'السعودية': '🇸🇦',
      'الإمارات': '🇦🇪',
      'مصر': '🇪🇬',
      'الكويت': '🇰🇼',
      'قطر': '🇶🇦',
      'البحرين': '🇧🇭',
      'عمان': '🇴🇲'
    };
    return flags[country] || '🌍';
  };

  const filteredEvents = economicEvents.filter(event => 
    event.date >= selectedDate
  ).sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* العنوان الرئيسي */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Calendar className="ml-3 h-8 w-8 text-blue-400" />
            التقويم الاقتصادي
          </h1>
          <p className="text-gray-300">تابع أهم الأحداث والبيانات الاقتصادية التي تؤثر على الأسواق العربية</p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">أحداث اليوم</p>
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-blue-400 text-sm">2 عالية الأهمية</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">هذا الأسبوع</p>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-yellow-400 text-sm">5 متوسطة الأهمية</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">أحداث عالية الأهمية</p>
                <p className="text-2xl font-bold text-red-400">7</p>
                <p className="text-red-400 text-sm">تأثير قوي متوقع</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الدول المشاركة</p>
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-green-400 text-sm">أسواق عربية</p>
              </div>
              <Globe className="h-8 w-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* فلتر التاريخ */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-3">
              <label className="text-white font-medium">اختر التاريخ:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                اليوم
              </button>
              <button className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-white rounded-lg hover:bg-slate-800/70 transition-colors">
                هذا الأسبوع
              </button>
              <button className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-white rounded-lg hover:bg-slate-800/70 transition-colors">
                هذا الشهر
              </button>
            </div>
          </div>
        </div>

        {/* قائمة الأحداث */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Clock className="ml-2 h-6 w-6 text-blue-400" />
            الأحداث القادمة
          </h2>
          
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* معلومات التوقيت والأهمية */}
                  <div className="flex items-center gap-4 lg:w-1/4">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">
                        {new Date(event.date).toLocaleDateString('ar-SA', { day: '2-digit' })}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {new Date(event.date).toLocaleDateString('ar-SA', { month: 'short' })}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">{event.time}</div>
                      <div className="text-gray-400 text-sm">
                        {getCountryFlag(event.country)} {event.country}
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getImportanceColor(event.importance)}`}>
                      {event.impact}
                    </span>
                  </div>

                  {/* تفاصيل الحدث */}
                  <div className="flex-1 lg:w-1/2">
                    <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                  </div>

                  {/* البيانات والتوقعات */}
                  <div className="lg:w-1/4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-gray-400 text-xs">السابق</div>
                        <div className="text-white font-medium text-sm">{event.previous}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs">المتوقع</div>
                        <div className="text-yellow-400 font-medium text-sm">{event.forecast}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs">الفعلي</div>
                        <div className="text-green-400 font-medium text-sm">
                          {event.actual || '--'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* تأثير الأحداث على الأسواق */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="ml-2 h-6 w-6 text-green-400" />
            تأثير الأحداث على الأسواق
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">قرارات البنوك المركزية</h3>
              <p className="text-gray-300 text-sm mb-3">
                تؤثر بشكل مباشر على أسعار الفائدة وحركة رؤوس الأموال
              </p>
              <div className="flex items-center text-red-400 text-sm">
                <AlertTriangle className="ml-1 h-4 w-4" />
                تأثير عالي
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">بيانات التضخم</h3>
              <p className="text-gray-300 text-sm mb-3">
                تحدد اتجاه السياسة النقدية وتوقعات أسعار الفائدة
              </p>
              <div className="flex items-center text-yellow-400 text-sm">
                <AlertTriangle className="ml-1 h-4 w-4" />
                تأثير متوسط
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">أرباح الشركات</h3>
              <p className="text-gray-300 text-sm mb-3">
                تحرك أسعار الأسهم الفردية وقطاعات السوق
              </p>
              <div className="flex items-center text-green-400 text-sm">
                <TrendingUp className="ml-1 h-4 w-4" />
                تأثير قطاعي
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EconomicCalendar

