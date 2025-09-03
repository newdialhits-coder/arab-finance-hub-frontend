import { useState } from 'react'
import { BookOpen, Play, Download, Clock, Star, Users, Award, TrendingUp } from 'lucide-react'

function Education() {
  const [activeCategory, setActiveCategory] = useState('basics')

  const courses = [
    {
      id: 1,
      title: "أساسيات الاستثمار في الأسهم",
      description: "تعلم المفاهيم الأساسية للاستثمار في أسواق الأسهم العربية والعالمية",
      level: "مبتدئ",
      duration: "4 ساعات",
      lessons: 12,
      students: 2847,
      rating: 4.8,
      price: "مجاني",
      category: "basics",
      image: "📈"
    },
    {
      id: 2,
      title: "التحليل الفني للمتداولين",
      description: "دورة شاملة في التحليل الفني وقراءة الرسوم البيانية",
      level: "متوسط",
      duration: "6 ساعات",
      lessons: 18,
      students: 1923,
      rating: 4.9,
      price: "99 ريال",
      category: "technical",
      image: "📊"
    },
    {
      id: 3,
      title: "العملات المشفرة للمبتدئين",
      description: "فهم عالم العملات المشفرة وكيفية الاستثمار بأمان",
      level: "مبتدئ",
      duration: "3 ساعات",
      lessons: 10,
      students: 3156,
      rating: 4.7,
      price: "مجاني",
      category: "crypto",
      image: "₿"
    },
    {
      id: 4,
      title: "إدارة المخاطر في التداول",
      description: "استراتيجيات حماية رأس المال وإدارة المخاطر",
      level: "متقدم",
      duration: "5 ساعات",
      lessons: 15,
      students: 1456,
      rating: 4.9,
      price: "149 ريال",
      category: "risk",
      image: "🛡️"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "كيفية قراءة القوائم المالية للشركات",
      readTime: "8 دقائق",
      category: "التحليل الأساسي",
      date: "2025-09-01"
    },
    {
      id: 2,
      title: "أفضل استراتيجيات التداول اليومي",
      readTime: "12 دقيقة",
      category: "استراتيجيات التداول",
      date: "2025-08-30"
    },
    {
      id: 3,
      title: "فهم مؤشرات الاقتصاد الكلي",
      readTime: "15 دقيقة",
      category: "الاقتصاد",
      date: "2025-08-28"
    }
  ];

  const glossary = [
    {
      term: "السوق الصاعد (Bull Market)",
      definition: "فترة زمنية يشهد فيها السوق ارتفاعاً مستمراً في الأسعار"
    },
    {
      term: "السوق الهابط (Bear Market)",
      definition: "فترة زمنية يشهد فيها السوق انخفاضاً مستمراً في الأسعار"
    },
    {
      term: "نسبة السعر إلى الربح (P/E)",
      definition: "مؤشر يقيس سعر السهم مقارنة بأرباح الشركة لكل سهم"
    }
  ];

  const filteredCourses = courses.filter(course => 
    activeCategory === 'all' || course.category === activeCategory
  );

  const getLevelColor = (level) => {
    switch (level) {
      case 'مبتدئ': return 'bg-green-600 text-white';
      case 'متوسط': return 'bg-yellow-600 text-white';
      case 'متقدم': return 'bg-red-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* العنوان الرئيسي */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <BookOpen className="ml-3 h-8 w-8 text-blue-400" />
            المركز التعليمي
          </h1>
          <p className="text-gray-300">تعلم الاستثمار والتداول من الصفر إلى الاحتراف مع خبراء الأسواق العربية</p>
        </div>

        {/* إحصائيات التعليم */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الدورات المتاحة</p>
                <p className="text-2xl font-bold text-white">24</p>
                <p className="text-blue-400 text-sm">+3 جديدة</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">الطلاب المسجلون</p>
                <p className="text-2xl font-bold text-white">12,847</p>
                <p className="text-green-400 text-sm">+456 هذا الشهر</p>
              </div>
              <Users className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">ساعات التعلم</p>
                <p className="text-2xl font-bold text-white">156</p>
                <p className="text-yellow-400 text-sm">محتوى شامل</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">معدل التقييم</p>
                <p className="text-2xl font-bold text-white">4.8</p>
                <p className="text-purple-400 text-sm">من 5 نجوم</p>
              </div>
              <Star className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* فلاتر الدورات */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">الدورات التعليمية</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 border border-slate-700 text-gray-300 hover:bg-slate-800/70'
              }`}
            >
              جميع الدورات
            </button>
            <button
              onClick={() => setActiveCategory('basics')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'basics'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 border border-slate-700 text-gray-300 hover:bg-slate-800/70'
              }`}
            >
              الأساسيات
            </button>
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'technical'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 border border-slate-700 text-gray-300 hover:bg-slate-800/70'
              }`}
            >
              التحليل الفني
            </button>
            <button
              onClick={() => setActiveCategory('crypto')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'crypto'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 border border-slate-700 text-gray-300 hover:bg-slate-800/70'
              }`}
            >
              العملات المشفرة
            </button>
            <button
              onClick={() => setActiveCategory('risk')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'risk'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 border border-slate-700 text-gray-300 hover:bg-slate-800/70'
              }`}
            >
              إدارة المخاطر
            </button>
          </div>

          {/* قائمة الدورات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-colors">
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{course.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white flex-1">{course.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Clock className="ml-1 h-4 w-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Play className="ml-1 h-4 w-4" />
                        {course.lessons} درس
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-white text-sm">{course.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{course.students.toLocaleString()} طالب</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-lg">{course.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
                      ابدأ التعلم
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* المقالات التعليمية */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="ml-2 h-6 w-6 text-green-400" />
              المقالات التعليمية
            </h2>
            
            <div className="space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold text-lg">{article.title}</h3>
                    <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="ml-1 h-4 w-4" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white hover:bg-slate-800/70 transition-colors">
              عرض جميع المقالات
            </button>
          </div>

          {/* قاموس المصطلحات */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="ml-2 h-6 w-6 text-purple-400" />
              قاموس المصطلحات المالية
            </h2>
            
            <div className="space-y-4">
              {glossary.map((item, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-2">{item.term}</h3>
                  <p className="text-gray-300 text-sm">{item.definition}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white hover:bg-slate-800/70 transition-colors">
              عرض القاموس الكامل
            </button>
          </div>
        </div>

        {/* مسار التعلم المقترح */}
        <div className="mt-12 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="ml-2 h-6 w-6 text-blue-400" />
            مسار التعلم المقترح للمبتدئين
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                1️⃣
              </div>
              <h3 className="text-white font-semibold mb-2">الأساسيات</h3>
              <p className="text-gray-400 text-sm">تعلم مفاهيم الاستثمار الأساسية</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                2️⃣
              </div>
              <h3 className="text-white font-semibold mb-2">التحليل</h3>
              <p className="text-gray-400 text-sm">فهم التحليل الفني والأساسي</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                3️⃣
              </div>
              <h3 className="text-white font-semibold mb-2">الممارسة</h3>
              <p className="text-gray-400 text-sm">تطبيق المعرفة في التداول التجريبي</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                4️⃣
              </div>
              <h3 className="text-white font-semibold mb-2">الاحتراف</h3>
              <p className="text-gray-400 text-sm">استراتيجيات متقدمة وإدارة المخاطر</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education

