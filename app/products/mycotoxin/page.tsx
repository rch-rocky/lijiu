import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MycotoxinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
     
        <div className="container relative z-20 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-[350px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">真菌毒素免疫亲和柱</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              专业用于真菌毒素检测的免疫亲和柱，确保检测结果准确可靠
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">产品概述</h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  真菌毒素免疫亲和柱是专门用于食品和饲料中真菌毒素检测的前处理产品。通过特异性抗体与目标毒素的选择性结合，实现样品中真菌毒素的高效富集和纯化。
                </p>
                <p>
                  我们的免疫亲和柱采用高品质抗体，具有特异性强、回收率高、重现性好等特点，确保检测结果的准确性和可靠性。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <CheckCircle className="h-6 w-6 text-teal-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">高特异性</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">高回收率</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">重现性好</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-6 w-6 text-cyan-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">操作简便</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/zjds.jpg"
                alt="真菌毒素免疫亲和柱展示"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
             
            </div>
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">产品系列</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">全面的产品系列，满足多样化的分析需求</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 黄曲霉毒素系列 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">黄曲霉毒素系列</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">黄曲霉毒素Total</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">黄曲霉毒素B1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">黄曲霉毒素M1</span>
                </div>
              </div>
            </div>

            {/* 其他毒素系列 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">其他毒素系列</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">玉米赤霉烯酮（ZEA）</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">T-2毒素</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">呕吐毒素（DON）</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">赭曲霉毒素A（OTA）</span>
                </div>
              </div>
            </div>

            {/* 多功能系列 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">多功能系列</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">多功能净化柱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">应用领域</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">广泛应用于多个领域的样品前处理</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "粮食检测",
                description: "用于各类谷物中真菌毒素的检测分析。",
              },
              {
                title: "饲料检测",
                description: "适用于动物饲料中真菌毒素的检测。",
              },
              {
                title: "食品安全",
                description: "应用于食品中真菌毒素的检测分析。",
              },
              {
                title: "乳制品检测",
                description: "用于牛奶等乳制品中真菌毒素的检测。",
              },
              {
                title: "坚果检测",
                description: "适用于各类坚果及其制品中真菌毒素的检测。",
              },
              {
                title: "科研实验",
                description: "支持各类科研项目中的真菌毒素分析需求。",
              },
            ].map((application, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}