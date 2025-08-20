// components/ResultsDisplay.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Download, 
  FileText, 
  BarChart3, 
  Building, 
  ChevronLeft,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'
import { ApplicationData } from '../types'
import AtsScoreChart from './AtsScoreChart'

interface ResultsDisplayProps {
  data: ApplicationData
  onReset: () => void
}

export default function ResultsDisplay({ data, onReset }: ResultsDisplayProps) {
  const [activeTab, setActiveTab] = useState('coverLetter')
  const [selectedVariation, setSelectedVariation] = useState(0)

  const handleDownload = async (format: 'docx' | 'txt') => {
    try {
      if (format === 'docx') {
        const response = await fetch('/api/download/cover-letter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: data.variations[selectedVariation]
          }),
        })
        
        if (response.ok) {
          const blob = await response.blob()
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'cover_letter.docx'
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
          document.body.removeChild(a)
        }
      } else {
        const blob = new Blob([data.variations[selectedVariation]], { type: 'text/plain' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'cover_letter.txt'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const tabs = [
    { id: 'coverLetter', label: 'Cover Letter', icon: FileText },
    { id: 'resumeAnalysis', label: 'Resume Analysis', icon: BarChart3 },
    { id: 'companyResearch', label: 'Company Research', icon: Building },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={onReset}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Form
          </button>
          
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'coverLetter' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Cover Letter</h3>
              <div className="flex space-x-2">
                <select
                  value={selectedVariation}
                  onChange={(e) => setSelectedVariation(Number(e.target.value))}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value={0}>Technical Focus</option>
                  <option value={1}>Cultural Fit</option>
                  <option value={2}>Leadership</option>
                </select>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload('docx')}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    DOCX
                  </button>
                  <button
                    onClick={() => handleDownload('txt')}
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    TXT
                  </button>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none border border-gray-200 rounded-lg p-6">
              {data.variations[selectedVariation].split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resumeAnalysis' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Resume Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-4">ATS Score</h4>
                <AtsScoreChart score={data.ats_score.score} />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Your resume matches {data.ats_score.score}% of job requirements
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Strengths</h4>
                  <ul className="space-y-2">
                    {data.ats_score.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Improvement Areas</h4>
                  <ul className="space-y-2">
                    {data.ats_score.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-center">
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-sm">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Missing Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {data.ats_score.missing_keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Professional Summary</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">{data.resume_summary}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'companyResearch' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Company Research</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {data.company_insights.Rating}
                </div>
                <div className="text-sm text-gray-600">Overall Rating</div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {data.company_insights.CEO_Approval}
                </div>
                <div className="text-sm text-gray-600">CEO Approval</div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {data.company_insights.Interview_Difficulty}
                </div>
                <div className="text-sm text-gray-600">Interview Difficulty</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Top Company Values</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {data.company_insights.Top_Values.map((value, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Detailed Research</h4>
              <div className="prose max-w-none bg-gray-50 border border-gray-200 rounded-lg p-4">
                {data.company_research.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-sm">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}