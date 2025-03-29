import React, { useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'

export default function ExperienceForm({ experience, setExperience }) {
  const [newExperience, setNewExperience] = useState({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const handleAddExperience = () => {
    if (newExperience.jobTitle && newExperience.company) {
      setExperience([...experience, newExperience])
      setNewExperience({
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
      })
    }
  }

  const handleRemoveExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      
      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{exp.jobTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {exp.company} • {exp.startDate} - {exp.endDate || 'Present'}
                </p>
              </div>
              <button
                onClick={() => handleRemoveExperience(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
            {exp.description && (
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              value={newExperience.jobTitle}
              onChange={(e) => setNewExperience({...newExperience, jobTitle: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Software Engineer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              value={newExperience.company}
              onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Tech Company Inc."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="month"
              value={newExperience.startDate}
              onChange={(e) => setNewExperience({...newExperience, startDate: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="month"
              value={newExperience.endDate}
              onChange={(e) => setNewExperience({...newExperience, endDate: e.target.value})}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Present (if current)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={newExperience.description}
            onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            rows="3"
            placeholder="Describe your responsibilities and achievements..."
          />
        </div>

        <button
          onClick={handleAddExperience}
          className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
        >
          <FaPlus /> Add Experience
        </button>
      </div>
    </div>
  )
}