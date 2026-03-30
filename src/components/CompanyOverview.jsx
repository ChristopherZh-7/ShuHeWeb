import React from 'react'

const columns = [
  {
    num: '01',
    title: '公司荣誉',
    lines: [
      '2024年：创新型中小企业',
      '2024年：科创型中小企业',
      '2025年：国家高新技术企业',
    ],
  },
  {
    num: '02',
    title: '公司资质',
    lines: [
      'ISO20000、ISO27701、ISO27001',
      'CCRC 风险评估',
      'CCRC 安全运维',
    ],
  },
  {
    num: '03',
    title: '公司知识产权',
    lines: [
      '软著申请落地 21 项，涵盖网络安全、数据安全、AI 智能体相关领域',
    ],
  },
]

const CompanyOverview = () => {
  return (
    <div id="overview" className="mt-16 md:mt-20 lg:mt-24">
      <div className="subsection-head">
        <h3 className="subsection-title max-w-3xl mx-auto leading-snug">
          荣誉认定、体系资质与知识产权一览
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {columns.map((col) => (
          <div
            key={col.num}
            className="card-surface p-5 sm:p-6 flex flex-col h-full"
          >
            <div className="flex items-start gap-3 mb-3 sm:mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500 text-white text-xs font-bold shrink-0">
                {col.num}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug pt-1">
                {col.title}
              </h4>
            </div>
            <ul className="space-y-2.5">
              {col.lines.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyOverview
