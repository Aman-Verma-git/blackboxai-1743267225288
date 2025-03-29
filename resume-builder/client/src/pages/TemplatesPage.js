import React from 'react'
import { FaFileAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const templates = [
  {
    id: 1,
    name: 'Professional',
    icon: <FaBriefcase className="text-blue-500 text-4xl" />,
    description: 'Clean and modern design for corporate professionals'
  },
  {
    id: 2,
    name: 'Academic',
    icon: <FaGraduationCap className="text-green-500 text-4xl" />,
    description: 'Traditional layout perfect for students and academics'
  },
  {
    id: 3, 
    name: 'Creative',
    icon: <FaFileAlt className="text-purple-500 text-4xl" />,
    description: 'Modern design for creative professionals'
  }
]

export default function TemplatesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Choose a Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map(template => (
          <div key={template.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              {template.icon}
              <h2 className="text-xl font-semibold mt-4">{template.name}</h2>
              <p className="text-gray-600 mt-2">{template.description}</p>
              <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors">
                Select Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}