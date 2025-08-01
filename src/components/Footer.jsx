import React from 'react'
import { Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: '首页', href: '#home' },
    { name: '服务', href: '#services' },
    { name: '关于我们', href: '#about' },
    { name: '联系我们', href: '#contact' }
  ]

  const services = [
    { name: '渗透测试', href: '#' },
    { name: '安全防护', href: '#' },
    { name: '应急响应', href: '#' },
    { name: '安全咨询', href: '#' },
    { name: '安全培训', href: '#' },
    { name: '云安全', href: '#' }
  ]

  const resources = [
    { name: '安全博客', href: '#' },
    { name: '白皮书', href: '#' },
    { name: '案例研究', href: '#' },
    { name: '技术文档', href: '#' },
    { name: '安全工具', href: '#' },
    { name: '漏洞库', href: '#' }
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-white" />
              <span className="font-semibold text-xl">戍合科技</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed font-light">
              专业的技术服务提供商，致力于为企业提供全方位的数字化转型解决方案。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
                           <div className="flex items-center space-x-3">
               <Phone className="h-4 w-4 text-white" />
               <span className="text-gray-400">+86 400-888-9999</span>
             </div>
             <div className="flex items-center space-x-3">
               <Mail className="h-4 w-4 text-white" />
               <span className="text-gray-400">contact@shuhe-tech.com</span>
             </div>
             <div className="flex items-center space-x-3">
               <MapPin className="h-4 w-4 text-white" />
               <span className="text-gray-400">北京市朝阳区xxx大厦18层</span>
             </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">资源中心</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center lg:mx-0 lg:text-left">
            <h3 className="text-lg font-semibold mb-4">订阅安全资讯</h3>
            <p className="text-gray-400 mb-4">获取最新的网络安全动态和威胁情报</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
              />
                             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200">
                 订阅
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
                         <div className="text-gray-400 text-sm mb-4 md:mb-0">
               © 2024 戍合科技有限公司. 保留所有权利.
             </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
          
          {/* Additional Links */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors duration-200">服务条款</a>
              <a href="#" className="hover:text-white transition-colors duration-200">法律声明</a>
              <a href="#" className="hover:text-white transition-colors duration-200">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer