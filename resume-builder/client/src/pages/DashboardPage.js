import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { FaPlus, FaFileAlt, FaChartLine, FaUser } from 'react-icons/fa'

export default function DashboardPage() {
  const { currentUser } = useAuth()

  // Mock data - will be replaced with real data from backend
  const recentResumes = [
    { id: 1, title: 'Software Engineer Resume', lastEdited: '2 hours ago' },
    { id: 2, title: 'UX Designer Resume', lastEdited: '1 day ago' },
    { id: 3, title: 'Product Manager Resume', lastEdited: '3 days ago' }
  ]

  const stats = [
    { name: 'Total Resumes', value: 5, icon: FaFileAlt, color: 'text-blue-500' },
    { name: 'Templates Used', value: 3, icon: FaFileAlt, color: 'text-green-500' },
    { name: 'Downloads', value: 12, icon: FaChartLine, color: 'text-purple-500' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
              <FaUser className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {currentUser?.displayName || 'User'}!
            </h1>
            <p className="text-gray-600">
              {currentUser?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full bg-opacity-10 ${stat.color.replace('text', 'bg')} mr-4`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/builder"
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
              <FaPlus className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">New Resume</span>
          </Link>
          <Link
            to="/templates"
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-full bg-green-100 text-green-600 mb-2">
              <FaFileAlt className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">Browse Templates</span>
          </Link>
          {/* Add more quick action cards as needed */}
        </div>
      </div>

      {/* Recent Resumes */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Recent Resumes</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {recentResumes.map((resume) => (
              <li key={resume.id}>
                <Link to={`/builder?resume=${resume.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-primary-600 truncate">
                        {resume.title}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {resume.lastEdited}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}