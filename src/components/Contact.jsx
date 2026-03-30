import React from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "联系电话",
      content: "+86 400-888-8888",
      description: "工作时间内随时为您服务"
    },
    {
      icon: Mail,
      title: "邮箱地址",
      content: "xxx@shuhhekeji.com.cn",
      description: "24小时内回复您的邮件"
    },
    {
      icon: MapPin,
      title: "公司地址",
      content: "深圳市南山区桃源街道平山社区留仙大道4168号众冠时代广场A座1703",
      description: "欢迎预约上门拜访"
    },
    {
      icon: Clock,
      title: "工作时间",
      content: "周一至周五 9:00-18:00",
      description: "7x24小时应急支撑服务"
    }
  ]

  return (
    <section id="contact" className="section-y bg-white">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">联系我们</h2>
          <p className="section-desc">
            有任何技术问题或需求，请随时联系我们的专业团队
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-sm">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-blue-500 font-medium mb-1 break-all">{info.content}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{info.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
