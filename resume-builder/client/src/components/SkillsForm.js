import React, { useState } from 'react'
import { FaPlus, FaTrash, FaCode } from 'react-icons/fa'

export default function SkillsForm({ skills, setSkills }) {
  const [newSkill, setNewSkill] = useState('')
  const [skillLevel, setSkillLevel] = useState('intermediate')

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { name: newSkill.trim(), level: skillLevel }])
      setNewSkill('')
      setSkillLevel('intermediate')
    }
  }

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  const getLevelColor = (level) => {
    switch(level) {
      case 'beginner': return 'bg-blue-100 text-blue-800'
      case 'intermediate': return 'bg-green-100 text-green-800'
      case 'advanced': return 'bg-purple-100 text-purple-800'
      case 'expert': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaCode className="text-blue-500" />
        Skills
      </h2>
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between items-center border rounded-lg p-3">
            <div className="flex items-center gap-3">
              <span className="font-medium">{skill.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
              </span>
            </div>
            <button
              onClick={() => handleRemoveSkill(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Skill Name</label>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="JavaScript, Photoshop, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Skill Level</label>
            <select
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleAddSkill}
          className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
        >
          <FaPlus /> Add Skill
        </button>
      </div>
    </div>
  )
}