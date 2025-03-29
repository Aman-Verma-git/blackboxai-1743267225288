import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
      </div>
    </footer>
  )
}