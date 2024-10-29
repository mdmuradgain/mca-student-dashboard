import React, { useState, useEffect } from 'react'
import { Bell, BookOpen, Calendar, ChevronDown, FileText, Home, LogOut, Menu, Search, User, Book, ShoppingBag, CreditCard, Settings, Sun, Moon, MessageCircle, Award, Clock, DollarSign, CheckSquare, BarChart2 } from 'lucide-react'

// Mock data for dynamic content
const mockData = {
  learningActivities: [
    { id: 1, title: 'Complete Math Quiz', dueDate: '2024-05-20', status: 'Pending' },
    { id: 2, title: 'Submit Physics Lab Report', dueDate: '2024-05-22', status: 'Completed' },
    { id: 3, title: 'Watch Chemistry Lecture', dueDate: '2024-05-25', status: 'In Progress' },
  ],
  courses: [
    { id: 1, title: 'Advanced Mathematics', progress: 75, instructor: 'Dr. Smith' },
    { id: 2, title: 'Physics 101', progress: 60, instructor: 'Prof. Johnson' },
    { id: 3, title: 'Chemistry Basics', progress: 90, instructor: 'Dr. Williams' },
  ],
  products: [
    { id: 1, title: 'Study Guide: Mathematics', price: 19.99, image: './merit-care-logo.svg' },
    { id: 2, title: 'Physics Lab Kit', price: 49.99, image: './merit-care-logo.svg?height=100&width=100' },
    { id: 3, title: 'Online Course: Chemistry', price: 99.99, image: './merit-care-logo.svg?height=100&width=100' },
  ],
  paymentHistory: [
    { id: 1, date: '2024-05-01', description: 'Monthly Tuition', amount: 250.00, status: 'Paid' },
    { id: 2, date: '2024-04-15', description: 'Study Materials', amount: 50.00, status: 'Paid' },
    { id: 3, date: '2024-04-01', description: 'Monthly Tuition', amount: 250.00, status: 'Paid' },
  ],
  certificates: [
    { id: 1, title: 'Advanced Mathematics', date: '2024-04-30', grade: 'A' },
    { id: 2, title: 'Physics 101', date: '2024-03-15', grade: 'B+' },
  ],
  classRoutine: [
    { id: 1, day: 'Monday', time: '09:00 AM - 10:30 AM', subject: 'Mathematics', teacher: 'Dr. Smith' },
    { id: 2, day: 'Monday', time: '11:00 AM - 12:30 PM', subject: 'Physics', teacher: 'Prof. Johnson' },
    { id: 3, day: 'Tuesday', time: '09:00 AM - 10:30 AM', subject: 'Chemistry', teacher: 'Dr. Williams' },
    { id: 4, day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'Biology', teacher: 'Dr. Brown' },
  ],
  monthlyFeeStatements: [
    { id: 1, month: 'May 2024', tuitionFee: 250.00, libraryFee: 20.00, labFee: 30.00, totalFee: 300.00, status: 'Unpaid' },
    { id: 2, month: 'April 2024', tuitionFee: 250.00, libraryFee: 20.00, labFee: 30.00, totalFee: 300.00, status: 'Paid' },
    { id: 3, month: 'March 2024', tuitionFee: 250.00, libraryFee: 20.00, labFee: 30.00, totalFee: 300.00, status: 'Paid' },
  ],
  attendanceReport: [
    { id: 1, date: '2024-05-01', status: 'Present' },
    { id: 2, date: '2024-05-02', status: 'Present' },
    { id: 3, date: '2024-05-03', status: 'Absent' },
    { id: 4, date: '2024-05-04', status: 'Present' },
    { id: 5, date: '2024-05-05', status: 'Present' },
  ],
  monthWiseAttendance: [
    { id: 1, month: 'May 2024', totalDays: 22, presentDays: 20, absentDays: 2, percentage: 90.91 },
    { id: 2, month: 'April 2024', totalDays: 21, presentDays: 19, absentDays: 2, percentage: 90.48 },
    { id: 3, month: 'March 2024', totalDays: 23, presentDays: 22, absentDays: 1, percentage: 95.65 },
  ],
  examReports: [
    { id: 1, examName: 'Midterm Exam', subject: 'Mathematics', marks: 85, totalMarks: 100, grade: 'A' },
    { id: 2, examName: 'Midterm Exam', subject: 'Physics', marks: 78, totalMarks: 100, grade: 'B+' },
    { id: 3, examName: 'Midterm Exam', subject: 'Chemistry', marks: 92, totalMarks: 100, grade: 'A+' },
    { id: 4, examName: 'Final Exam', subject: 'Mathematics', marks: 88, totalMarks: 100, grade: 'A' },
    { id: 5, examName: 'Final Exam', subject: 'Physics', marks: 82, totalMarks: 100, grade: 'A-' },
    { id: 6, examName: 'Final Exam', subject: 'Chemistry', marks: 95, totalMarks: 100, grade: 'A+' },
  ],
}

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')
  const [theme, setTheme] = useState('dark')
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleChat = () => setIsChatOpen(!isChatOpen)

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className={`flex flex-col items-center justify-center h-32 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
          <h1 className="text-xl font-semibold text-center">Merit Care Academy</h1>
        </div>
        <nav className="mt-5">
          <NavItem icon={<Home size={20} />} text="Dashboard" active={activeSection === 'dashboard'} onClick={() => setActiveSection('dashboard')} theme={theme} />
          <NavItem icon={<Clock size={20} />} text="Class Routine" active={activeSection === 'routine'} onClick={() => setActiveSection('routine')} theme={theme} />
          <NavItem icon={<DollarSign size={20} />} text="Monthly Fee Statements" active={activeSection === 'fees'} onClick={() => setActiveSection('fees')} theme={theme} />
          <NavItem icon={<CheckSquare size={20} />} text="Attendance" active={activeSection === 'attendance'} onClick={() => setActiveSection('attendance')} theme={theme} />
          <NavItem icon={<BarChart2 size={20} />} text="Exam Reports" active={activeSection === 'exams'} onClick={() => setActiveSection('exams')} theme={theme} />
          <NavItem icon={<Book size={20} />} text="Learning Activities" active={activeSection === 'activities'} onClick={() => setActiveSection('activities')} theme={theme} />
          <NavItem icon={<BookOpen size={20} />} text="Courses" active={activeSection === 'courses'} onClick={() => setActiveSection('courses')} theme={theme} />
          <NavItem icon={<ShoppingBag size={20} />} text="Products" active={activeSection === 'products'} onClick={() => setActiveSection('products')} theme={theme} />
          <NavItem icon={<CreditCard size={20} />} text="Payment History" active={activeSection === 'payments'} onClick={() => setActiveSection('payments')} theme={theme} />
          <NavItem icon={<Award size={20} />} text="Certificates" active={activeSection === 'certificates'} onClick={() => setActiveSection('certificates')} theme={theme} />
          <NavItem icon={<Bell size={20} />} text="Notifications" active={activeSection === 'notifications'} onClick={() => setActiveSection('notifications')} theme={theme} />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className={`flex items-center justify-between p-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
          <div className="flex items-center">
            <button className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'} focus:outline-none lg:hidden mr-4`} onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="mr-4">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="relative mr-4">
              <Bell size={24} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            </div>
            <UserMenu theme={theme} />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className={`flex-1 overflow-x-hidden overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-6 py-8">
            <h3 className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} text-3xl font-bold mb-6`}>{getSectionTitle(activeSection)}</h3>
            
            {activeSection === 'dashboard' && <DashboardContent theme={theme} />}
            {activeSection === 'routine' && <ClassRoutine theme={theme} />}
            {activeSection === 'fees' && <MonthlyFeeStatements theme={theme} />}
            {activeSection === 'attendance' && <Attendance theme={theme} />}
            {activeSection === 'exams' && <ExamReports theme={theme} />}
            {activeSection === 'activities' && <LearningActivities theme={theme} />}
            {activeSection === 'courses' && <Courses theme={theme} />}
            {activeSection === 'products' && <Products theme={theme} />}
            {activeSection === 'payments' && <PaymentHistory theme={theme} />}
            {activeSection === 'certificates' && <Certificates theme={theme} />}
          </div>
        </main>

        {/* Chat Widget */}
        <div className={`fixed bottom-4 right-4 ${isChatOpen ? 'w-80 h-96' : 'w-16 h-16'} bg-indigo-600 rounded-lg shadow-lg transition-all duration-300 overflow-hidden`}>
          <button onClick={toggleChat} className="absolute top-2 right-2 text-white">
            {isChatOpen ? 'X' : <MessageCircle size={24} />}
          </button>
          {isChatOpen && (
            <div className="p-4 h-full flex flex-col">
              <h4 className="text-white font-semibold mb-2">Chat Support</h4>
              <div className="flex-1 bg-white rounded p-2 mb-2 overflow-y-auto">
                {/* Chat messages would go here */}
              </div>
              <input type="text" placeholder="Type a message..." className="w-full p-2 rounded" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, text, active = false, onClick, theme }) {
  return (
    <a href="#" onClick={onClick} className={`flex items-center mt-2 py-3 px-6 rounded-lg transition-all duration-200 ${
      active 
        ? theme === 'dark' ? 'bg-indigo-700 text-white' : 'bg-indigo-100 text-indigo-900'
        : theme === 'dark' ? 'text-gray-300 hover:bg-indigo-700 hover:text-white' : 'text-gray-600  hover:bg-indigo-100 hover:text-indigo-900'
    }`}>
      {icon}
      <span className="mx-3">{text}</span>
    </a>
  )
}

function UserMenu({ theme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>        <span className="ml-3 font-medium">Hasibul Islam</span>
        <ChevronDown size={20} className="ml-2 text-gray-400" />
      </button>
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-md overflow-hidden shadow-xl z-10`}>
          <a href="#" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Profile</a>
          <a href="#" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Edit Profile</a>
          <a href="#" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Settings</a>
          <a href="#" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Logout</a>
        </div>
      )}
    </div>
  )
}

function StatCard({ icon, title, value, color, theme }) {
  return (
    <div className={`rounded-lg shadow-lg ${color} p-6 transition-transform duration-300 hover:scale-105`}>
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-white bg-opacity-30">
          {icon}
        </div>
        <div className="mx-4">
          <h4 className="text-3xl font-semibold text-white">{value}</h4>
          <div className="text-white text-sm">{title}</div>
        </div>
      </div>
    </div>
  )
}

function DashboardContent({ theme }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<User size={24} />} title="Total Attendance" value="120" color="bg-gradient-to-r from-blue-500 to-blue-600" theme={theme} />
        <StatCard icon={<BookOpen size={24} />} title="Total Batch" value="5" color="bg-gradient-to-r from-green-500 to-green-600" theme={theme} />
        <StatCard icon={<FileText size={24} />} title="Total Exam" value="3" color="bg-gradient-to-r from-red-500 to-red-600" theme={theme} />
        <StatCard icon={<ChevronDown size={24} />} title="Average Mark" value="85%" color="bg-gradient-to-r from-yellow-500 to-yellow-600" theme={theme} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
          <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>News & Notices</h4>
          <div className="space-y-4">
            <NewsItem title="HLW Event" date="Tue May 14 2024" theme={theme} />
            <NewsItem title="HLW Notice" date="Tue May 14 2024" theme={theme} />
          </div>
        </div>

        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
          <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Upcoming Courses</h4>
          <div className="space-y-4">
            <CourseItem title="Advanced Mathematics" startDate="Jun 1, 2024" theme={theme} />
            <CourseItem title="Physics 101" startDate="Jun 15, 2024" theme={theme} />
          </div>
        </div>
      </div>

      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
        <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Featured Products</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockData.products.map(product => (
            <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  )
}

function NewsItem({ title, date, theme }) {
  return (
    <div className={`flex items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-3`}>
      <div className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-indigo-500' : 'bg-indigo-100'} flex items-center justify-center`}>
        <Bell size={20} className={theme === 'dark' ? 'text-white' : 'text-indigo-500'} />
      </div>
      <div className="ml-4 flex-grow">
        <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</p>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{date}</p>
      </div>
      <button className={`ml-auto ${theme === 'dark' ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-100 hover:bg-indigo-200'} text-white rounded-full px-4 py-1 text-sm transition-colors duration-200`}>
        Details
      </button>
    </div>
  )
}

function CourseItem({ title, startDate, theme }) {
  return (
    <div className={`flex items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-3`}>
      <div className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-green-500' : 'bg-green-100'} flex items-center justify-center`}>
        <BookOpen size={20} className={theme === 'dark' ? 'text-white' : 'text-green-500'} />
      </div>
      <div className="ml-4 flex-grow">
        <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</p>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Starts: {startDate}</p>
      </div>
      <button className={`ml-auto ${theme === 'dark' ? 'bg-green-500 hover:bg-green-600' : 'bg-green-100 hover:bg-green-200'} text-white rounded-full px-4 py-1 text-sm transition-colors duration-200`}>
        Enroll
      </button>
    </div>
  )
}

function ProductCard({ title, price, image, theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg`}>
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded" />
      <h5 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h5>
      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>${price.toFixed(2)}</p>
      <button className={`mt-3 ${theme === 'dark' ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-100 hover:bg-indigo-200'} text-white px-4 py-2 rounded-full text-sm transition-colors duration-200`}>
        Add to Cart
      </button>
    </div>
  )
}

function ClassRoutine({ theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Class Routine</h4>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <th className="p-2 text-left">Day</th>
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-left">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {mockData.classRoutine.map(routine => (
              <tr key={routine.id} className={`${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
                <td className="p-2">{routine.day}</td>
                <td className="p-2">{routine.time}</td>
                <td className="p-2">{routine.subject}</td>
                <td className="p-2">{routine.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function MonthlyFeeStatements({ theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Monthly Fee Statements</h4>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <th className="p-2 text-left">Month</th>
              <th className="p-2 text-left">Tuition Fee</th>
              <th className="p-2 text-left">Library Fee</th>
              <th className="p-2 text-left">Lab Fee</th>
              <th className="p-2 text-left">Total Fee</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.monthlyFeeStatements.map(statement => (
              <tr key={statement.id} className={`${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
                <td className="p-2">{statement.month}</td>
                <td className="p-2">${statement.tuitionFee.toFixed(2)}</td>
                <td className="p-2">${statement.libraryFee.toFixed(2)}</td>
                <td className="p-2">${statement.labFee.toFixed(2)}</td>
                <td className="p-2">${statement.totalFee.toFixed(2)}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${statement.status === 'Paid' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {statement.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Attendance({ theme }) {
  const [activeTab, setActiveTab] = useState('report')

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Attendance</h4>
      <div className="mb-4">
        <button
          onClick={() => setActiveTab('report')}
          className={`mr-4 px-4 py-2 rounded-lg ${activeTab === 'report' ? 'bg-indigo-500 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
        >
          Attendance Report
        </button>
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'monthly' ? 'bg-indigo-500 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
        >
          Month-wise Attendance
        </button>
      </div>
      {activeTab === 'report' ? <AttendanceReport theme={theme} /> : <MonthWiseAttendance theme={theme} />}
    </div>
  )
}

function AttendanceReport({ theme }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.attendanceReport.map(record => (
            <tr key={record.id} className={`${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
              <td className="p-2">{record.date}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-full text-xs ${record.status === 'Present' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {record.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MonthWiseAttendance({ theme }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <th className="p-2 text-left">Month</th>
            <th className="p-2 text-left">Total Days</th>
            <th className="p-2 text-left">Present Days</th>
            <th className="p-2 text-left">Absent Days</th>
            <th className="p-2 text-left">Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {mockData.monthWiseAttendance.map(record => (
            <tr key={record.id} className={`${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
              <td className="p-2">{record.month}</td>
              <td className="p-2">{record.totalDays}</td>
              <td className="p-2">{record.presentDays}</td>
              <td className="p-2">{record.absentDays}</td>
              <td className="p-2">{record.percentage.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ExamReports({ theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Exam Reports</h4>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <th className="p-2 text-left">Exam Name</th>
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-left">Marks</th>
              <th className="p-2 text-left">Total Marks</th>
              <th className="p-2 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            {mockData.examReports.map(report => (
              <tr key={report.id} className={`${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
                <td className="p-2">{report.examName}</td>
                <td className="p-2">{report.subject}</td>
                <td className="p-2">{report.marks}</td>
                <td className="p-2">{report.totalMarks}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${report.grade === 'A+' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                    {report.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function LearningActivities({ theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Learning Activities</h4>
      <div className="space-y-4">
        {mockData.learningActivities.map(activity => (
          <ActivityItem key={activity.id} title={activity.title} dueDate={activity.dueDate} status={activity.status} theme={theme} />
        ))}
      </div>
    </div>
  )
}

function ActivityItem({ title, dueDate, status, theme }) {
  const statusColor = status === 'Completed' ? 'green' : status === 'In Progress' ? 'yellow' : 'red'
  return (
    <div className={`flex items-center justify-between ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-4`}>
      <div>
        <h5 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h5>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Due: {dueDate}</p>
      </div>
      <div className="flex items-center">
        <span className={`px-2 py-1 rounded-full text-xs ${theme === 'dark' ? `bg-${statusColor}-800 text-${statusColor}-200` : `bg-${statusColor}-200 text-${statusColor}-800`}`}>
          {status}
        </span>
        <button className={`ml-4 ${theme === 'dark' ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-100 hover:bg-indigo-200'} text-white rounded-full px-4 py-1 text-sm transition-colors duration-200`}>
          View
        </button>
      </div>
    </div>
  )
}

function Courses({ theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>My Courses</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.courses.map(course => (
          <CourseCard key={course.id} title={course.title} progress={course.progress} instructor={course.instructor} theme={theme} />
        ))}
      </div>
    </div>
  )
}

function CourseCard({ title, progress, instructor, theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg`}>
      <h5 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h5>
      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Instructor: {instructor}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-600">
        <div className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="flex justify-between items-center">
        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{progress}% Complete</span>
        <button className={`${theme === 'dark' ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-100 hover:bg-indigo-200'} text-white rounded-full px-4 py-1 text-sm transition-colors duration-200`}>
          Continue
        </button>
      </div>
    </div>
  )
}

function Products({ theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Products</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.products.map(product => (
          <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} theme={theme} />
        ))}
      </div>
    </div>
  )
}

function PaymentHistory({ theme }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Payment History</h4>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.paymentHistory.map(payment => (
              <tr key={payment.id} className={`${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
                <td className="p-2">{payment.date}</td>
                <td className="p-2">{payment.description}</td>
                <td className="p-2">${payment.amount.toFixed(2)}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${payment.status === 'Paid' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Certificates({ theme }) {
  const [generatingCertificate, setGeneratingCertificate] = useState(false)

  const generateCertificate = (title) => {
    setGeneratingCertificate(true)
    // Simulate certificate generation
    setTimeout(() => {
      setGeneratingCertificate(false)
      alert(`Certificate for ${title} has been generated and is ready for download.`)
    }, 2000)
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Certificates</h4>
      <div className="space-y-4">
        {mockData.certificates.map(cert => (
          <div key={cert.id} className={`flex items-center justify-between ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-4`}>
            <div>
              <h5 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h5>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Date: {cert.date} | Grade: {cert.grade}</p>
            </div>
            <button
              onClick={() => generateCertificate(cert.title)}
              disabled={generatingCertificate}
              className={`${theme === 'dark' ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-100 hover:bg-indigo-200'} text-white rounded-full px-4 py-2 text-sm transition-colors duration-200`}
            >
              {generatingCertificate ? 'Generating...' : 'Generate Certificate'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function getSectionTitle(section) {
  const titles = {
    dashboard: 'Dashboard',
    routine: 'Class Routine',
    fees: 'Monthly Fee Statements',
    attendance: 'Attendance',
    exams: 'Exam Reports',
    activities: 'Learning Activities',
    courses: 'My Courses',
    products: 'Products',
    payments: 'Payment History',
    certificates: 'Certificates',
    notifications: 'Notifications'
  }
  return titles[section] || 'Dashboard'
}