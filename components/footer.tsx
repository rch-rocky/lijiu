import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Image src="/logo.png" alt="立玖生物科技" width={40} height={40} className="mr-2" />
              <div className="text-lg font-medium">立玖生物科技</div>
            </div>
            <p className="text-gray-400 mb-6">
              立玖生物科技致力于为医疗、农业、环保等领域提供创新的生物技术解决方案，以科技推动健康与可持续发展。
            </p>
            <div className="flex space-x-4">
              
              
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  解决方案
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  产品服务
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">上海市浦东新区川宏路508号410室</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">15900911517</span>
              </li>
             
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">周一至周五 9:00-18:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">关注我们</h3>
            <p className="text-gray-400 mb-4">关注我们的公司网站，获取最新的公司动态和行业资讯。</p>
         
            
            
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">© 立玖生物科技有限公司. 保留所有权利.</div>
           
          </div>
        </div>
      </div>
    </footer>
  )
}
