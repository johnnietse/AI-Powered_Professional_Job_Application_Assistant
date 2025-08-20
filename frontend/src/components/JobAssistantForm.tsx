// // // // components/JobAssistantForm.tsx
// // // 'use client'

// // // import { useState } from 'react'
// // // import { useForm } from 'react-hook-form'
// // // import { zodResolver } from '@hookform/resolvers/zod'
// // // import { z } from 'zod'
// // // import { motion } from 'framer-motion'
// // // import { Upload, FileText, Building, FileEdit } from 'lucide-react'
// // // import * as LucideIcons from 'lucide-react'


// // // const formSchema = z.object({
// // //   job_description: z.string().min(1, 'Job description is required'),
// // //   company_name: z.string().min(1, 'Company name is required'),
// // //   tone: z.enum(['Professional', 'Technical', 'Creative', 'Leadership']),
// // //   resume: z.any().optional(),
// // // })

// // // type FormData = z.infer<typeof formSchema>

// // // interface JobAssistantFormProps {
// // //     onSubmitAction: (data: FormData) => void
// // // }

// // // export default function JobAssistantForm({ onSubmitAction }: JobAssistantFormProps) {
// // //   const [resumeFile, setResumeFile] = useState<File | null>(null)
// // //   const [isDragging, setIsDragging] = useState(false)
  
// // //   const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
// // //     resolver: zodResolver(formSchema),
// // //     defaultValues: {
// // //       tone: 'Professional',
// // //     }
// // //   })

// // //   const handleFileSelect = async (file: File) => {
// // //     if (file) {
// // //       setResumeFile(file)
// // //       const arrayBuffer = await file.arrayBuffer()
// // //       const base64 = btoa(
// // //         new Uint8Array(arrayBuffer).reduce(
// // //           (data, byte) => data + String.fromCharCode(byte),
// // //           ''
// // //         )
// // //       )
// // //       setValue('resume', {
// // //         filename: file.name,
// // //         content: base64
// // //       })
// // //     }
// // //   }

// // //   const handleDrop = (e: React.DragEvent) => {
// // //     e.preventDefault()
// // //     setIsDragging(false)
// // //     const files = e.dataTransfer.files
// // //     if (files.length > 0) {
// // //       handleFileSelect(files[0])
// // //     }
// // //   }

// // //   const handleDragOver = (e: React.DragEvent) => {
// // //     e.preventDefault()
// // //     setIsDragging(true)
// // //   }

// // //   const handleDragLeave = (e: React.DragEvent) => {
// // //     e.preventDefault()
// // //     setIsDragging(false)
// // //   }

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 20 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       className="bg-white rounded-2xl shadow-xl p-8"
// // //     >
// // //       <form onSubmit={handleSubmit(onSubmitAction)} className="space-y-6">
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">
// // //             Job Description *
// // //           </label>
// // //           <textarea
// // //             {...register('job_description')}
// // //             rows={6}
// // //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //             placeholder="Paste the job description here..."
// // //           />
// // //           {errors.job_description && (
// // //             <p className="mt-1 text-sm text-red-600">{errors.job_description.message}</p>
// // //           )}
// // //         </div>

// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">
// // //             Company Name *
// // //           </label>
// // //           <div className="relative">
// // //             <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
// // //             <input
// // //               {...register('company_name')}
// // //               type="text"
// // //               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //               placeholder="Enter company name"
// // //             />
// // //           </div>
// // //           {errors.company_name && (
// // //             <p className="mt-1 text-sm text-red-600">{errors.company_name.message}</p>
// // //           )}
// // //         </div>

// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">
// // //             Resume (PDF, DOCX, or TXT)
// // //           </label>
// // //           <div
// // //             onDrop={handleDrop}
// // //             onDragOver={handleDragOver}
// // //             onDragLeave={handleDragLeave}
// // //             className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
// // //               isDragging 
// // //                 ? 'border-blue-400 bg-blue-50' 
// // //                 : resumeFile 
// // //                 ? 'border-green-400 bg-green-50' 
// // //                 : 'border-gray-300 hover:border-gray-400'
// // //             }`}
// // //             onClick={() => document.getElementById('resume-upload')?.click()}
// // //           >
// // //             <input
// // //               id="resume-upload"
// // //               type="file"
// // //               accept=".pdf,.docx,.txt"
// // //               className="hidden"
// // //               onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
// // //             />
            
// // //             {resumeFile ? (
// // //               <>
// // //                 <FileText className="mx-auto h-12 w-12 text-green-500 mb-2" />
// // //                 <p className="text-sm font-medium text-green-900">{resumeFile.name}</p>
// // //                 <p className="text-xs text-green-600 mt-1">Click to change file</p>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
// // //                 <p className="text-sm font-medium text-gray-900">
// // //                   Drag and drop your resume, or click to browse
// // //                 </p>
// // //                 <p className="text-xs text-gray-500 mt-1">
// // //                   PDF, DOCX, or TXT files (Max 5MB)
// // //                 </p>
// // //               </>
// // //             )}
// // //           </div>
// // //         </div>

// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">
// // //             Writing Tone *
// // //           </label>
// // //           <select
// // //             {...register('tone')}
// // //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //           >
// // //             <option value="Professional">Professional</option>
// // //             <option value="Technical">Technical</option>
// // //             <option value="Creative">Creative</option>
// // //             <option value="Leadership">Leadership</option>
// // //           </select>
// // //         </div>

// // //         <motion.button
// // //           whileHover={{ scale: 1.02 }}
// // //           whileTap={{ scale: 0.98 }}
// // //           type="submit"
// // //           className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
// // //         >
// // //           <FileEdit className="inline-block w-5 h-5 mr-2" />
// // //           Generate Application Package
// // //         </motion.button>
// // //       </form>
// // //     </motion.div>
// // //   )
// // // }

// // // components/JobAssistantForm.tsx
// // 'use client'

// // import { useState } from 'react'
// // import { useForm } from 'react-hook-form'
// // import { zodResolver } from '@hookform/resolvers/zod'
// // import { z } from 'zod'
// // import { motion } from 'framer-motion'
// // import dynamic from 'next/dynamic'
// // import { FaUpload, FaFileAlt, FaBuilding, FaEdit } from 'react-icons/fa';

// // // Dynamically import icons to avoid SSR issues
// // const Upload = dynamic(() => import('lucide-react').then(mod => mod.Upload), { ssr: false });
// // const FileText = dynamic(() => import('lucide-react').then(mod => mod.FileText), { ssr: false });
// // const Building = dynamic(() => import('lucide-react').then(mod => mod.Building), { ssr: false });
// // const FileEdit = dynamic(() => import('lucide-react').then(mod => mod.FileEdit), { ssr: false });

// // const formSchema = z.object({
// //   job_description: z.string().min(1, 'Job description is required'),
// //   company_name: z.string().min(1, 'Company name is required'),
// //   tone: z.enum(['Professional', 'Technical', 'Creative', 'Leadership']),
// //   resume: z.any().optional(),
// // })

// // type FormData = z.infer<typeof formSchema>

// // interface JobAssistantFormProps {
// //   onSubmitAction: (data: FormData) => void
// // }

// // export default function JobAssistantForm({ onSubmitAction }: JobAssistantFormProps) {
// //   const [resumeFile, setResumeFile] = useState<File | null>(null)
// //   const [isDragging, setIsDragging] = useState(false)
// //   const [iconsLoaded, setIconsLoaded] = useState(false)
  
// //   // Load icons after component mounts
// //   useState(() => {
// //     setIconsLoaded(true);
// //   });

// //   const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
// //     resolver: zodResolver(formSchema),
// //     defaultValues: {
// //       tone: 'Professional',
// //     }
// //   })

// //   const handleFileSelect = async (file: File) => {
// //     if (file) {
// //       setResumeFile(file)
// //       const arrayBuffer = await file.arrayBuffer()
// //       const base64 = btoa(
// //         new Uint8Array(arrayBuffer).reduce(
// //           (data, byte) => data + String.fromCharCode(byte),
// //           ''
// //         )
// //       )
// //       setValue('resume', {
// //         filename: file.name,
// //         content: base64
// //       })
// //     }
// //   }

// //   const handleDrop = (e: React.DragEvent) => {
// //     e.preventDefault()
// //     setIsDragging(false)
// //     const files = e.dataTransfer.files
// //     if (files.length > 0) {
// //       handleFileSelect(files[0])
// //     }
// //   }

// //   const handleDragOver = (e: React.DragEvent) => {
// //     e.preventDefault()
// //     setIsDragging(true)
// //   }

// //   const handleDragLeave = (e: React.DragEvent) => {
// //     e.preventDefault()
// //     setIsDragging(false)
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="bg-white rounded-2xl shadow-xl p-8"
// //     >
// //       <form onSubmit={handleSubmit(onSubmitAction)} className="space-y-6">
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">
// //             Job Description *
// //           </label>
// //           <textarea
// //             {...register('job_description')}
// //             rows={6}
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //             placeholder="Paste the job description here..."
// //           />
// //           {errors.job_description && (
// //             <p className="mt-1 text-sm text-red-600">{errors.job_description.message}</p>
// //           )}
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">
// //             Company Name *
// //           </label>
// //           <div className="relative">
// //             {iconsLoaded && <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />}
// //             <input
// //               {...register('company_name')}
// //               type="text"
// //               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               placeholder="Enter company name"
// //             />
// //           </div>
// //           {errors.company_name && (
// //             <p className="mt-1 text-sm text-red-600">{errors.company_name.message}</p>
// //           )}
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">
// //             Resume (PDF, DOCX, or TXT)
// //           </label>
// //           <div
// //             onDrop={handleDrop}
// //             onDragOver={handleDragOver}
// //             onDragLeave={handleDragLeave}
// //             className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
// //               isDragging 
// //                 ? 'border-blue-400 bg-blue-50' 
// //                 : resumeFile 
// //                 ? 'border-green-400 bg-green-50' 
// //                 : 'border-gray-300 hover:border-gray-400'
// //             }`}
// //             onClick={() => document.getElementById('resume-upload')?.click()}
// //           >
// //             <input
// //               id="resume-upload"
// //               type="file"
// //               accept=".pdf,.docx,.txt"
// //               className="hidden"
// //               onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
// //             />
            
// //             {resumeFile ? (
// //               <>
// //                 {iconsLoaded && <FileText className="mx-auto h-12 w-12 text-green-500 mb-2" />}
// //                 <p className="text-sm font-medium text-green-900">{resumeFile.name}</p>
// //                 <p className="text-xs text-green-600 mt-1">Click to change file</p>
// //               </>
// //             ) : (
// //               <>
// //                 {iconsLoaded && <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />}
// //                 <p className="text-sm font-medium text-gray-900">
// //                   Drag and drop your resume, or click to browse
// //                 </p>
// //                 <p className="text-xs text-gray-500 mt-1">
// //                   PDF, DOCX, or TXT files (Max 5MB)
// //                 </p>
// //               </>
// //             )}
// //           </div>
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">
// //             Writing Tone *
// //           </label>
// //           <select
// //             {...register('tone')}
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //           >
// //             <option value="Professional">Professional</option>
// //             <option value="Technical">Technical</option>
// //             <option value="Creative">Creative</option>
// //             <option value="Leadership">Leadership</option>
// //           </select>
// //         </div>

// //         <motion.button
// //           whileHover={{ scale: 1.02 }}
// //           whileTap={{ scale: 0.98 }}
// //           type="submit"
// //           className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
// //         >
// //           {iconsLoaded && <FileEdit className="inline-block w-5 h-5 mr-2" />}
// //           Generate Application Package
// //         </motion.button>
// //       </form>
// //     </motion.div>
// //   )
// // }


// // components/JobAssistantForm.tsx
// 'use client'

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { motion } from 'framer-motion'
// // import { FaUpload, FaFileAlt, FaBuilding, FaEdit } from 'react-icons/fa'
// import dynamic from 'next/dynamic'

// const FaUpload = dynamic(() => import('react-icons/fa').then(mod => mod.FaUpload), { ssr: false })
// const FaFileAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaFileAlt), { ssr: false })
// const FaBuilding = dynamic(() => import('react-icons/fa').then(mod => mod.FaBuilding), { ssr: false })
// const FaEdit = dynamic(() => import('react-icons/fa').then(mod => mod.FaEdit), { ssr: false })


// const formSchema = z.object({
//   job_description: z.string().min(1, 'Job description is required'),
//   company_name: z.string().min(1, 'Company name is required'),
//   tone: z.enum(['Professional', 'Technical', 'Creative', 'Leadership']),
//   resume: z.any().optional(),
// })

// type FormData = z.infer<typeof formSchema>

// interface JobAssistantFormProps {
//   onSubmitAction: (data: FormData) => void
// }

// export default function JobAssistantForm({ onSubmitAction }: JobAssistantFormProps) {
//   const [resumeFile, setResumeFile] = useState<File | null>(null)
//   const [isDragging, setIsDragging] = useState(false)
  
//   const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       tone: 'Professional',
//     }
//   })

//   const handleFileSelect = async (file: File) => {
//     if (file) {
//       setResumeFile(file)
//       const arrayBuffer = await file.arrayBuffer()
//       const base64 = btoa(
//         new Uint8Array(arrayBuffer).reduce(
//           (data, byte) => data + String.fromCharCode(byte),
//           ''
//         )
//       )
//       setValue('resume', {
//         filename: file.name,
//         content: base64
//       })
//     }
//   }

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault()
//     setIsDragging(false)
//     const files = e.dataTransfer.files
//     if (files.length > 0) {
//       handleFileSelect(files[0])
//     }
//   }

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault()
//     setIsDragging(true)
//   }

//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault()
//     setIsDragging(false)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-2xl shadow-xl p-8"
//     >
//       <form onSubmit={handleSubmit(onSubmitAction)} className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Job Description *
//           </label>
//           <textarea
//             {...register('job_description')}
//             rows={6}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Paste the job description here..."
//           />
//           {errors.job_description && (
//             <p className="mt-1 text-sm text-red-600">{errors.job_description.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Company Name *
//           </label>
//           <div className="relative">
//             <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <input
//               {...register('company_name')}
//               type="text"
//               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter company name"
//             />
//           </div>
//           {errors.company_name && (
//             <p className="mt-1 text-sm text-red-600">{errors.company_name.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Resume (PDF, DOCX, or TXT)
//           </label>
//           <div
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
//               isDragging 
//                 ? 'border-blue-400 bg-blue-50' 
//                 : resumeFile 
//                 ? 'border-green-400 bg-green-50' 
//                 : 'border-gray-300 hover:border-gray-400'
//             }`}
//             onClick={() => document.getElementById('resume-upload')?.click()}
//           >
//             <input
//               id="resume-upload"
//               type="file"
//               accept=".pdf,.docx,.txt"
//               className="hidden"
//               onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
//             />
            
//             {resumeFile ? (
//               <>
//                 <FaFileAlt className="mx-auto h-12 w-12 text-green-500 mb-2" />
//                 <p className="text-sm font-medium text-green-900">{resumeFile.name}</p>
//                 <p className="text-xs text-green-600 mt-1">Click to change file</p>
//               </>
//             ) : (
//               <>
//                 <FaUpload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
//                 <p className="text-sm font-medium text-gray-900">
//                   Drag and drop your resume, or click to browse
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   PDF, DOCX, or TXT files (Max 5MB)
//                 </p>
//               </>
//             )}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Writing Tone *
//           </label>
//           <select
//             {...register('tone')}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           >
//             <option value="Professional">Professional</option>
//             <option value="Technical">Technical</option>
//             <option value="Creative">Creative</option>
//             <option value="Leadership">Leadership</option>
//           </select>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
//         >
//           <FaEdit className="inline-block w-5 h-5 mr-2" />
//           Generate Application Package
//         </motion.button>
//       </form>
//     </motion.div>
//   )
// }


// components/JobAssistantForm.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
// import { FaUpload, FaFileAlt, FaBuilding, FaEdit } from 'react-icons/fa'

// At the top of your component file, replace the icon imports with:
import dynamic from 'next/dynamic';

const FaUpload = dynamic(() => import('react-icons/fa').then(mod => mod.FaUpload), { ssr: false });
const FaFileAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaFileAlt), { ssr: false });
const FaBuilding = dynamic(() => import('react-icons/fa').then(mod => mod.FaBuilding), { ssr: false });
const FaEdit = dynamic(() => import('react-icons/fa').then(mod => mod.FaEdit), { ssr: false });



const formSchema = z.object({
  job_description: z.string().min(1, 'Job description is required'),
  company_name: z.string().min(1, 'Company name is required'),
  tone: z.enum(['Professional', 'Technical', 'Creative', 'Leadership']),
  resume: z.any().optional(),
})

type FormData = z.infer<typeof formSchema>

interface JobAssistantFormProps {
  onSubmitAction: (data: FormData) => void
}

export default function JobAssistantForm({ onSubmitAction }: JobAssistantFormProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tone: 'Professional',
    }
  })

  const handleFileSelect = async (file: File) => {
    if (file) {
      setResumeFile(file)
      const arrayBuffer = await file.arrayBuffer()
      const base64 = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      )
      setValue('resume', {
        filename: file.name,
        content: base64
      })
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <form onSubmit={handleSubmit(onSubmitAction)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description *
          </label>
          <textarea
            {...register('job_description')}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Paste the job description here..."
          />
          {errors.job_description && (
            <p className="mt-1 text-sm text-red-600">{errors.job_description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <div className="relative">
            <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              {...register('company_name')}
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter company name"
            />
          </div>
          {errors.company_name && (
            <p className="mt-1 text-sm text-red-600">{errors.company_name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resume (PDF, DOCX, or TXT)
          </label>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
              isDragging 
                ? 'border-blue-400 bg-blue-50' 
                : resumeFile 
                ? 'border-green-400 bg-green-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => document.getElementById('resume-upload')?.click()}
          >
            <input
              id="resume-upload"
              type="file"
              accept=".pdf,.docx,.txt"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
            />
            
            {resumeFile ? (
              <>
                <FaFileAlt className="mx-auto h-12 w-12 text-green-500 mb-2" />
                <p className="text-sm font-medium text-green-900">{resumeFile.name}</p>
                <p className="text-xs text-green-600 mt-1">Click to change file</p>
              </>
            ) : (
              <>
                <FaUpload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm font-medium text-gray-900">
                  Drag and drop your resume, or click to browse
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOCX, or TXT files (Max 5MB)
                </p>
              </>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Writing Tone *
          </label>
          <select
            {...register('tone')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Professional">Professional</option>
            <option value="Technical">Technical</option>
            <option value="Creative">Creative</option>
            <option value="Leadership">Leadership</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        >
          <FaEdit className="inline-block w-5 h-5 mr-2" />
          Generate Application Package
        </motion.button>
      </form>
    </motion.div>
  )
}