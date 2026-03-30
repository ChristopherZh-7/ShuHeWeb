import React from 'react'
import CompanyOverview from './CompanyOverview'

const About = () => {
  const team = [
    {
      name: "安全服务团队",
      role: "专业安全服务",
      description: "提供渗透测试、安全评估、应急响应等专业安全服务",
      avatar: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "安全运营团队",
      role: "安全运营管理",
      description: "负责安全监控、威胁检测、安全运营等日常安全管理工作",
      avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "数据安全团队",
      role: "数据安全保护",
      description: "专注于数据加密、隐私保护、数据合规等数据安全领域",
      avatar: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <section id="about" className="section-y bg-slate-50">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">关于戍合科技</h2>
          <p className="section-desc">
            戍合科技采用管家式服务模式：由专属顾问与工程师团队长期跟进，主动巡检、快速响应，从安全策略、建设落地到日常运营与应急处置全程托管，让企业像拥有一位可靠的安全管家，省心、透明、可持续。
          </p>
        </div>

        {/* 叙事优先：使命与价值主张 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-0">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">我们的使命</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              以戍边使命保卫用户网络空间安全——这是戍合科技的初心，也是我们一切工作的出发点。
              我们将这份责任落实到每一次巡检、每一次响应与每一次方案交付之中，以专业与可靠守护客户的数字资产与业务连续性。
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              戍合科技成立于2022年，团队由经验丰富的安全与工程专家组成。面对持续演进的威胁环境，我们坚持以客户为中心，以管家式服务贯穿策略、建设与运营，与客户并肩构筑可信赖的安全防线。
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                <span className="text-gray-700">以戍边使命统领安全服务与交付标准</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                <span className="text-gray-700">管家式陪伴：主动巡检、持续改进、透明可预期</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                <span className="text-gray-700">7x24 值守与应急响应能力</span>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
              <h4 className="text-xl sm:text-2xl font-bold mb-5">为什么选择我们？</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                  <div>
                    <h5 className="font-semibold mb-1">专业资质</h5>
                    <p className="text-blue-100 text-sm leading-relaxed">团队拥有多项国际技术认证</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                  <div>
                    <h5 className="font-semibold mb-1">实战经验</h5>
                    <p className="text-blue-100 text-sm leading-relaxed">处理过各种复杂的技术挑战</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                  <div>
                    <h5 className="font-semibold mb-1">定制服务</h5>
                    <p className="text-blue-100 text-sm leading-relaxed">根据客户需求提供个性化方案</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CompanyOverview />

        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="subsection-head">
            <h3 className="subsection-title mb-3">专业团队</h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              三个专业团队，全方位保障企业安全
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-surface p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-gray-100">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
                <div className="text-blue-500 font-semibold mb-3 text-sm sm:text-base">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
