import { Link, useLocation } from 'react-router-dom'
import { BarChart3, Globe, TrendingUp, Calendar, Users, BookOpen, Calculator, Home } from 'lucide-react'

function Layout({ children }) {
  const location = useLocation()

  const navigation = [
    { name: 'الرئيسية', href: '/', icon: Home },
    { name: 'لوحة التحكم', href: '/dashboard', icon: BarChart3 },
    { name: 'الأسواق', href: '/markets', icon: Globe },
    { name: 'التحليلات', href: '/analysis', icon: TrendingUp },
    { name: 'التقويم الاقتصادي', href: '/calendar', icon: Calendar },
    { name: 'المجتمع', href: '/community', icon: Users },
    { name: 'التعليم', href: '/education', icon: BookOpen },
    { name: 'الأدوات', href: '/tools', icon: Calculator },
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* شريط التنقل العلوي */}
      <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* الشعار */}
            <Link to="/" className="flex items-center space-x-reverse space-x-3">
              <BarChart3 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">منصة المال العربي</span>
            </Link>

            {/* روابط التنقل */}
            <div className="hidden md:flex items-center space-x-reverse space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon className="ml-2 h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* قائمة الجوال */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* قائمة التنقل للجوال */}
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon className="ml-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* المحتوى الرئيسي */}
      <main>
        {children}
      </main>

      {/* الفوتر */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* معلومات الموقع */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-reverse space-x-3 mb-4">
                <BarChart3 className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">منصة المال العربي</span>
              </div>
              <p className="text-gray-400 text-sm">
                منصتك الموثوقة للتداول والاستثمار في الأسواق العربية والعالمية
              </p>
            </div>

            {/* الأسواق */}
            <div>
              <h3 className="text-white font-semibold mb-4">الأسواق</h3>
              <ul className="space-y-2">
                <li><Link to="/markets" className="text-gray-400 hover:text-white text-sm transition-colors">الأسهم السعودية</Link></li>
                <li><Link to="/markets" className="text-gray-400 hover:text-white text-sm transition-colors">الأسهم الإماراتية</Link></li>
                <li><Link to="/markets" className="text-gray-400 hover:text-white text-sm transition-colors">العملات المشفرة</Link></li>
                <li><Link to="/markets" className="text-gray-400 hover:text-white text-sm transition-colors">الفوركس</Link></li>
              </ul>
            </div>

            {/* الخدمات */}
            <div>
              <h3 className="text-white font-semibold mb-4">الخدمات</h3>
              <ul className="space-y-2">
                <li><Link to="/analysis" className="text-gray-400 hover:text-white text-sm transition-colors">التحليلات</Link></li>
                <li><Link to="/calendar" className="text-gray-400 hover:text-white text-sm transition-colors">التقويم الاقتصادي</Link></li>
                <li><Link to="/tools" className="text-gray-400 hover:text-white text-sm transition-colors">الأدوات</Link></li>
                <li><Link to="/education" className="text-gray-400 hover:text-white text-sm transition-colors">التعليم</Link></li>
              </ul>
            </div>

            {/* تواصل معنا */}
            <div>
              <h3 className="text-white font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">من نحن</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">الدعم الفني</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">الشروط والأحكام</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 منصة المال العربي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

