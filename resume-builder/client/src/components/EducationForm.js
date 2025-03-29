import React, { useState } from 'react'
import { FaPlus, FaTrash, FaGraduationCap } from 'react-icons/fa'

export default function EducationForm({ education, setEducation }) {
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setEducation([...education, newEducation])
      setNewEducation({
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: ''
      })
    }
  }

  const handleRemoveEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaGraduationCap className="text-blue-500" />
        Education
      </h2>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{edu.degree}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {edu.institution} • {edu.field}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </p>
              </div>
              <button
                onClick={() => handleRemoveEducation(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
            {edu.description && (
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Institution</label>
            <input
              type="text"
              value={newEducation.institution}
              onChange={(e) => setNewEducation({...newEducation, institution: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="University Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Degree</label>
            <input
              type="text"
              value={newEducation.degree}
              onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Bachelor of Science"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Field of Study</label>
          <input
            type="text"
            value={newEducation.field}
            onChange={(e) => setNewEducation({...newEducation, field: e.target.value})}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Computer Science"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="month"
              value={newEducation.startDate}
              onChange={(e) => setNewEducation({...newEducation, startDate: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="month"
              value={newEducation.endDate}
              onChange={(e) => setNewEducation({...newEducation, endDate: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Present (if current)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={newEducation.description}
            onChange={(e) => setNewEducation({...newEducation, description: e.target.value})}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            rows="2"
            placeholder="Notable achievements or coursework..."
          />
        </div>

        <button
          onClick={handleAddEducation}
          className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
        >
          <FaPlus /> Add Education
        </button>
      </div>
    </div>
  )
}