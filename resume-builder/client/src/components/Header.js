import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaSun, FaMoon, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logout()
      navigate('/login')
      toast.success('Logged out successfully')
    } catch (error) {
      toast.error('Failed to log out')
    }
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary-500 dark:text-primary-300">
          Resume Builder
        </Link>
        <nav className="flex items-center space-x-6">
          {currentUser ? (
            <>
              <Link to="/builder" className="hover:text-primary-500 dark:hover:text-primary-300">
                Builder
              </Link>
              <Link to="/templates" className="hover:text-primary-500 dark:hover:text-primary-300">
                Templates
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-gray-700 flex items-center justify-center">
                    {currentUser.photoURL ? (
                      <img 
                        src={currentUser.photoURL} 
                        alt="Profile" 
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <FaUser className="text-primary-600 dark:text-primary-300" />
                    )}
                  </div>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setShowDropdown(false)}
                    >
                      <div className="flex items-center">
                        <FaUser className="mr-2" />
                        Profile
                      </div>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center">
                        <FaSignOutAlt className="mr-2" />
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-primary-500 dark:hover:text-primary-300">
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-3 py-1 rounded-md bg-primary-500 text-white hover:bg-primary-600"
              >
                Sign Up
              </Link>
            </>
          )}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}
