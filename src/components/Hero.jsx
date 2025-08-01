import React from 'react'
import { ArrowRight, Shield, Lock, Eye } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          戍合科技
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          专注于企业数字化转型与网络安全
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2">
            <span>了解更多</span>
            <ArrowRight className="h-4 w-4" />
          </button>
                     <a href="#contact" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-blue-600 transition-all duration-200">
             联系我们
           </a>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300">
              <Lock className="h-6 w-6 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">数据安全</h3>
              <p className="text-white/80 text-sm">企业级数据保护</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300">
              <Eye className="h-6 w-6 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">智能监控</h3>
              <p className="text-white/80 text-sm">实时威胁检测</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300">
              <Shield className="h-6 w-6 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">安全防护</h3>
              <p className="text-white/80 text-sm">全方位安全体系</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero