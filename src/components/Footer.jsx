import React from 'react'

const Footer = () => {
  const legal = [
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: '法律声明', href: '#' },
  ]

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="section-inner py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <p className="text-center sm:text-left">
            © 2024 戍合科技有限公司. 保留所有权利.
          </p>
          <nav className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
