import React from 'react'
import { Award, Users, Clock, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { number: "100+", label: "成功项目", icon: Target },
    { number: "30+", label: "专业团队", icon: Users },
    { number: "3+", label: "服务年限", icon: Clock },
    { number: "20+", label: "行业认证", icon: Award }
  ]

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            关于戍合科技
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们是一支专业的技术团队，致力于为企业提供最优质的数字化转型解决方案
          </p>
        </div>

        {/* Company Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">我们的使命</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              戍合科技成立于2022，专注于为企业提供全方位的数字化转型服务。
              我们相信，在数字化时代，技术创新是企业发展的核心驱动力。
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              我们的团队由经验丰富的技术专家组成，拥有多年的实战经验和深厚的技术功底。
              我们始终保持对最新技术趋势的敏锐洞察，为客户提供前瞻性的解决方案。
            </p>
            
                         <div className="space-y-4">
               <div className="flex items-center">
                 <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                 <span className="text-gray-700">专业的技术团队和丰富的实战经验</span>
               </div>
               <div className="flex items-center">
                 <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                 <span className="text-gray-700">覆盖全行业的数字化转型解决方案</span>
               </div>
               <div className="flex items-center">
                 <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                 <span className="text-gray-700">7x24小时全天候技术支持服务</span>
               </div>
             </div>
          </div>
          
                     <div className="relative">
             <div className="bg-blue-600 rounded-lg p-6 text-white">
               <h4 className="text-2xl font-bold mb-4">为什么选择我们？</h4>
               <div className="space-y-3">
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <div>
                     <h5 className="font-semibold mb-1">专业资质</h5>
                     <p className="text-blue-100 text-sm">团队拥有多项国际技术认证</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <div>
                     <h5 className="font-semibold mb-1">实战经验</h5>
                     <p className="text-blue-100 text-sm">处理过各种复杂的技术挑战</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <div>
                     <h5 className="font-semibold mb-1">定制服务</h5>
                     <p className="text-blue-100 text-sm">根据客户需求提供个性化方案</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                                 <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                   <div className="flex justify-center mb-4">
                     <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                       <IconComponent className="h-6 w-6 text-white" />
                     </div>
                   </div>
                   <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                   <div className="text-gray-600">{stat.label}</div>
                 </div>
              </div>
            )
          })}
        </div>

        {/* Team Section */}
                 <div className="text-center mb-12">
           <h3 className="text-3xl font-bold text-gray-900 mb-4">专业团队</h3>
           <p className="text-lg text-gray-600">三个专业团队，全方位保障企业安全</p>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
                         <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
               <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-gray-200">
                 <img 
                   src={member.avatar} 
                   alt={member.name}
                   className="w-full h-full object-cover"
                 />
               </div>
               <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
               <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
               <p className="text-gray-600 text-sm">{member.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About