import React from 'react'
import { Search, Shield, Users, BookOpen, AlertTriangle, Globe } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "渗透测试",
      description: "专业的渗透测试服务，发现系统漏洞，提供详细的安全评估报告",
      features: ["Web应用测试", "网络渗透测试", "移动应用测试", "社会工程学测试"]
    },
    {
      icon: Shield,
      title: "安全防护",
      description: "全方位的安全防护解决方案，保护您的数字资产免受网络攻击",
      features: ["防火墙配置", "入侵检测系统", "DDoS防护", "恶意软件防护"]
    },
    {
      icon: AlertTriangle,
      title: "应急响应",
      description: "快速响应安全事件，最小化损失，恢复业务正常运行",
      features: ["事件调查分析", "损失评估", "系统恢复", "证据保全"]
    },
    {
      icon: Users,
      title: "安全咨询",
      description: "专业的安全咨询服务，帮助企业建立完善的安全管理体系",
      features: ["安全策略制定", "风险评估", "合规性审计", "安全架构设计"]
    },
    {
      icon: BookOpen,
      title: "安全培训",
      description: "提升团队安全意识，培养专业的网络安全人才",
      features: ["安全意识培训", "技术技能培训", "认证考试辅导", "定制化课程"]
    },
    {
      icon: Globe,
      title: "云安全",
      description: "云环境安全解决方案，保护您的云上资产和数据安全",
      features: ["云安全评估", "云配置管理", "云监控部署", "云安全合规"]
    }
  ]

  return (
    <section id="services" className="section-y bg-white">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">我们的服务</h2>
          <p className="section-desc">
            为客户提供全方位的数字化转型与网络安全解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="card-surface p-6 flex flex-col h-full"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-[15px] sm:text-base">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            )
          })}
        </div>

        <div className="mt-14 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">需要定制化解决方案？</h3>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-xl mx-auto">
              我们的专家团队随时为您提供专业的技术咨询服务
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              立即联系我们
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
