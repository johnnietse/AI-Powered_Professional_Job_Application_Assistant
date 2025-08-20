// components/AtsScoreChart.tsx
'use client'

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

interface AtsScoreChartProps {
  score: number
}

export default function AtsScoreChart({ score }: AtsScoreChartProps) {
  const data = [
    {
      score: score,
      fill: score >= 80 ? '#10B981' : score >= 60 ? '#F59E0B' : '#EF4444'
    }
  ]

  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadialBarChart
        innerRadius="70%"
        outerRadius="100%"
        barSize={16}
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          background
          dataKey="score"
          cornerRadius={8}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold"
          fill="#1F2937"
        >
          {score}%
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}