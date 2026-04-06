import React from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: '联系电话',
      content: '+86 400-888-8888',
      description: '工作时间内随时为您服务',
    },
    {
      icon: Mail,
      title: '邮箱地址',
      content: 'xxx@shuhhekeji.com.cn',
      description: '24小时内回复您的邮件',
    },
    {
      icon: MapPin,
      title: '公司地址',
      content:
        '深圳市南山区桃源街道平山社区留仙大道4168号众冠时代广场A座1703',
      description: '欢迎预约上门拜访',
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      description: '7x24小时应急支撑服务',
    },
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 list-none p-0 m-0">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <li key={index} className="h-full min-h-0">
                  <div className="h-full rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                    <div
                      className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm"
                      aria-hidden
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      {info.title}
                    </p>
                    <p className="text-blue-500 font-semibold text-[15px] sm:text-base mb-2 w-full break-words px-1 leading-relaxed">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
