'use client'

import { useState } from 'react'
import { stadiums } from '@/data/stadiums'
import Link from 'next/link'

const formats = ['Test', 'ODI', 'T20']
const conditions = ['Morning', 'Afternoon', 'Evening (Under Lights)']

function getOutput(stadium, format, condition) {
  if (!stadium) return null

  const s = stadiums.find((st) => st.slug === stadium)
  if (!s) return null

  // Dew risk
  let dewRisk = 'Low'
  if (s.dew >= 4 && condition === 'Evening (Under Lights)') dewRisk = 'Severe'
  else if (s.dew >= 3 && condition === 'Evening (Under Lights)') dewRisk = 'High'
  else if (s.dew >= 3) dewRisk = 'Moderate'

  // Crack risk
  let crackRisk = 'Low'
  if (s.cracks >= 4) crackRisk = 'High'
  else if (s.cracks >= 3) crackRisk = 'Moderate'

  // Pitch behavior
  let behavior = ''
  if (s.grassCover >= 4 && s.moisture >= 3) {
    behavior = 'Seam-friendly surface. Expect early movement with the new ball. Batters will need to build patience.'
  } else if (s.cracks >= 4 && s.moisture <= 2) {
    behavior = 'Dry and cracked surface. Spinners will be heavily involved. Variable bounce expected as the match progresses.'
  } else if (s.moisture >= 4) {
    behavior = 'High moisture content. Ball will swing and seam early. Dew may significantly affect evening sessions.'
  } else {
    behavior = 'Balanced surface. Good pace and carry early. Conditions will evolve as the match progresses.'
  }

  // Toss recommendation
  let toss = ''
  if (condition === 'Evening (Under Lights)' && s.dew >= 3) {
    toss = 'Bowl first — dew will make batting in the second innings significantly easier.'
  } else if (s.cracks >= 4) {
    toss = 'Bat first — surface will deteriorate and become increasingly difficult for batting later.'
  } else if (s.grassCover >= 4 && s.moisture >= 3 && condition === 'Morning') {
    toss = 'Bowl first — morning moisture and grass will assist seam bowlers heavily in the first session.'
  } else {
    toss = 'Bat first — surface is at its most consistent early in the match.'
  }

  // Advantage
  let advantage = ''
  if (s.grassCover >= 4 || s.moisture >= 4) advantage = 'Bowling'
  else if (s.cracks >= 4 && format === 'Test') advantage = 'Spin Bowling'
  else if (s.t20Avg1st >= 185 && format === 'T20') advantage = 'Batting'
  else advantage = 'Balanced'

  return { dewRisk, crackRisk, behavior, toss, advantage, name: s.name }
}

const riskColor = (level) => {
  if (level === 'Severe') return 'text-red-400'
  if (level === 'High') return 'text-orange-400'
  if (level === 'Moderate') return 'text-yellow-400'
  return 'text-green-400'
}

export default function ToolPage() {
  const [selectedStadium, setSelectedStadium] = useState('')
  const [selectedFormat, setSelectedFormat] = useState('')
  const [selectedCondition, setSelectedCondition] = useState('')

  const output = getOutput(selectedStadium, selectedFormat, selectedCondition)
  const allSelected = selectedStadium && selectedFormat && selectedCondition

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      {/* Header */}
      <div className="relative px-8 md:px-16 pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a4a3a] opacity-10 skew-x-6 transform" />
        <Link href="/">
          <p className="text-[#c45e1a] text-xs uppercase tracking-widest mb-6 hover:text-[#e06b1f] transition-colors">
            ← Back
          </p>
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          PITCH TOOL
        </h1>
        <p className="text-[#a09880] text-lg max-w-xl">
          Select a ground, format, and match conditions to get an
          analytical breakdown of expected pitch behavior.
        </p>
      </div>

      {/* Tool */}
      <div className="px-8 md:px-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Inputs */}
        <div>
          <p className="text-[#c45e1a] text-xs uppercase tracking-widest mb-6">
            Select Conditions
          </p>

          {/* Stadium */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-[#a09880] mb-2">
              Ground
            </label>
            <select
              value={selectedStadium}
              onChange={(e) => setSelectedStadium(e.target.value)}
              className="w-full bg-[#111111] border border-[#222222] text-[#f5f0e8] px-4 py-3 text-sm focus:outline-none focus:border-[#c45e1a] transition-colors"
            >
              <option value="">Select a ground...</option>
              {stadiums.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Format */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-[#a09880] mb-2">
              Format
            </label>
            <div className="flex gap-3">
              {formats.map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFormat(f)}
                  className={`flex-1 py-3 text-sm uppercase tracking-widest border transition-colors ${
                    selectedFormat === f
                      ? 'bg-[#c45e1a] border-[#c45e1a] text-white'
                      : 'bg-[#111111] border-[#222222] text-[#a09880] hover:border-[#c45e1a]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-[#a09880] mb-2">
              Match Conditions
            </label>
            <div className="flex flex-col gap-3">
              {conditions.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCondition(c)}
                  className={`py-3 px-4 text-sm uppercase tracking-widest border text-left transition-colors ${
                    selectedCondition === c
                      ? 'bg-[#c45e1a] border-[#c45e1a] text-white'
                      : 'bg-[#111111] border-[#222222] text-[#a09880] hover:border-[#c45e1a]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output */}
        <div>
          <p className="text-[#c45e1a] text-xs uppercase tracking-widest mb-6">
            Analysis
          </p>

          {!allSelected ? (
            <div className="bg-[#111111] border border-[#222222] p-8 h-64 flex items-center justify-center">
              <p className="text-[#a09880] text-sm text-center">
                Select a ground, format, and conditions to see the analysis.
              </p>
            </div>
          ) : (
            <div className="bg-[#111111] border border-[#c45e1a] p-8">

              <h2 className="text-xl font-bold mb-6 text-[#f5f0e8]">
                {output.name} — {selectedFormat} — {selectedCondition}
              </h2>

              {/* Advantage */}
              <div className="mb-6 bg-[#0a0a0a] border border-[#222222] p-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#a09880]">
                  Advantage
                </span>
                <span className="text-[#c45e1a] font-bold uppercase tracking-widest">
                  {output.advantage}
                </span>
              </div>

              {/* Risk indicators */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0a0a0a] border border-[#222222] p-4">
                  <p className="text-xs uppercase tracking-widest text-[#a09880] mb-1">
                    Dew Risk
                  </p>
                  <p className={`font-bold uppercase ${riskColor(output.dewRisk)}`}>
                    {output.dewRisk}
                  </p>
                </div>
                <div className="bg-[#0a0a0a] border border-[#222222] p-4">
                  <p className="text-xs uppercase tracking-widest text-[#a09880] mb-1">
                    Crack Risk
                  </p>
                  <p className={`font-bold uppercase ${riskColor(output.crackRisk)}`}>
                    {output.crackRisk}
                  </p>
                </div>
              </div>

              {/* Pitch behavior */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-[#a09880] mb-2">
                  Expected Pitch Behavior
                </p>
                <p className="text-[#f5f0e8] leading-relaxed text-sm">
                  {output.behavior}
                </p>
              </div>

              {/* Toss */}
              <div className="border-t border-[#222222] pt-6">
                <p className="text-xs uppercase tracking-widest text-[#a09880] mb-2">
                  Toss Recommendation
                </p>
                <p className="text-[#f5f0e8] leading-relaxed text-sm">
                  {output.toss}
                </p>
              </div>

            </div>
          )}
        </div>
      </div>

    </main>
  )
}
