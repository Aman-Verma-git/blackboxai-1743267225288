import React, { useState } from 'react'
import ResumeForm from '../components/ResumeForm'
import ResumePreview from '../components/ResumePreview'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import SkillsForm from '../components/SkillsForm'
import ExportButton from '../components/ExportButton'

const initialResumeData = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  linkedin: '',
  github: '',
  summary: '',
  experience: [],
  education: [],
  skills: []
}

export default function BuilderPage() {
  const [resumeData, setResumeData] = useState(initialResumeData)

  const updateExperience = (newExperience) => {
    setResumeData({...resumeData, experience: newExperience})
  }

  const updateEducation = (newEducation) => {
    setResumeData({...resumeData, education: newEducation})
  }

  const updateSkills = (newSkills) => {
    setResumeData({...resumeData, skills: newSkills})
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Resume Builder</h1>
        <ExportButton targetElementId="resume-preview" fileName={`${resumeData.fullName || 'resume'}`} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ResumeForm 
            resumeData={resumeData} 
            setResumeData={setResumeData} 
          />
          <ExperienceForm 
            experience={resumeData.experience}
            setExperience={updateExperience}
          />
          <EducationForm 
            education={resumeData.education}
            setEducation={updateEducation}
          />
          <SkillsForm 
            skills={resumeData.skills}
            setSkills={updateSkills}
          />
        </div>
        <ResumePreview resumeData={resumeData} id="resume-preview" />
      </div>
    </div>
  )
}
