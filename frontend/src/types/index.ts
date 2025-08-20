// types/index.ts
export interface AtsScore {
    score: number
    missing_keywords: string[]
    strengths: string[]
    weaknesses: string[]
  }
  
  export interface CompanyInsights {
    Rating: string
    CEO_Approval: string
    Interview_Difficulty: string
    Top_Values: string[]
  }
  
  export interface ApplicationData {
    cover_letter: string
    variations: string[]
    resume_summary: string
    company_research: string
    ats_score: AtsScore
    company_insights: CompanyInsights
  }
  
  export interface JobFormData {
    job_description: string
    company_name: string
    tone: 'Professional' | 'Technical' | 'Creative' | 'Leadership'
    resume: {
      filename: string
      content: string
    } | null
  }