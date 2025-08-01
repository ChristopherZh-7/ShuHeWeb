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
      content: "深圳市众冠时代广场A座1703",
      description: "欢迎预约上门拜访"
    },
    {
      icon: Clock,
      title: "工作时间",
      content: "周一至周五 9:00-18:00",
      description: "节假日提供紧急支持"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            有任何技术问题或需求，请随时联系我们的专业团队
          </p>
        </div>

                 <div className="max-w-4xl mx-auto">
           {/* Contact Information */}
           <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">联系方式</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               {contactInfo.map((info, index) => {
                 const IconComponent = info.icon
                 return (
                   <div key={index} className="flex items-start space-x-4">
                     <div className="flex-shrink-0">
                       <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                         <IconComponent className="h-6 w-6 text-white" />
                       </div>
                     </div>
                     <div>
                       <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                       <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                       <p className="text-gray-600 text-sm">{info.description}</p>
                     </div>
                   </div>
                 )
               })}
             </div>

             {/* Emergency Contact */}
             <div className="bg-blue-600 p-6 rounded-lg text-white text-center">
               <h4 className="text-lg font-bold mb-2">紧急联系</h4>
               <p className="mb-3">如遇紧急技术问题，请立即联系：</p>
               <div className="text-2xl font-bold">400-888-8888</div>
               <p className="text-sm opacity-90 mt-2">7x24小时技术支持热线</p>
             </div>
           </div>
         </div>
      </div>
    </section>
  )
}

export default Contact