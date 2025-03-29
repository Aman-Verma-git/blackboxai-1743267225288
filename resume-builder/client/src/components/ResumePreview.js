import React from 'react'

export default function ResumePreview({ resumeData, id }) {
  return (
    <div id={id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Resume Preview</h2>
      
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 min-h-[500px]">
        {resumeData.fullName ? (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h1 className="text-3xl font-bold">{resumeData.fullName}</h1>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                {resumeData.email && <span>{resumeData.email}</span>}
                {resumeData.phone && <span>{resumeData.phone}</span>}
                {resumeData.address && <span>{resumeData.address}</span>}
              </div>
            </div>

            {resumeData.summary && (
              <div>
                <h2 className="text-xl font-semibold border-b pb-2">Summary</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {resumeData.summary}
                </p>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold border-b pb-2">Experience</h2>
              {resumeData.experience?.length > 0 ? (
                resumeData.experience.map((exp, i) => (
                  <div key={i} className="mt-4">
                    <h3 className="font-medium">{exp.jobTitle}</h3>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{exp.company}</span>
                      <span>
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="mt-2 text-gray-500 italic">No experience added</p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Your resume preview will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}