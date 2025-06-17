import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function QuEChERSPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
     
        <div className="container relative z-20 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-[350px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">QuEChERS产品</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              快速、简便、廉价、高效、耐用且安全的新一代高效的前处理方法，专为食品（奶水果、蔬菜、肉类）、环境水样及土壤中的农药残留和兽药残留污染物检测而设计
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
                  QuEChERS是一种快速、简便、经济、高效、可靠且安全的样品前处理方法。其核心是通过分散固相萃取技术，快速分离目标物与干扰组分（如脂肪酸、色素、脂类），适用于多种国际标准。
                </p>
                <p>
                  我们的QuEChERS产品采用高品质材料，确保分析结果的准确性和可靠性，广泛应用于食品安全检测、环境监测等领域。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <CheckCircle className="h-6 w-6 text-teal-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">快速简便</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">经济高效</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">可靠安全</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-6 w-6 text-cyan-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">应用广泛</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/que.jpg"
                alt="QuEChERS产品展示"
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* 萃取盐包 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">萃取盐包</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">欧标萃取盐包</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">美标萃取盐包</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">日标萃取盐包</span>
                </div>
              </div>
            </div>

            {/* 净化管 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">净化管</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">PSA/C18</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">PSA/GCB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">PSA/C18/GCB</span>
                </div>
              </div>
            </div>

            {/* 陶瓷均质子 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">陶瓷均质子</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">2mm均质子</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">4mm均质子</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">5mm均质子</span>
                </div>
              </div>
            </div>

            {/* 多功能过滤器 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">多功能过滤器</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">PTFE滤膜</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">尼龙滤膜</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">PES滤膜</span>
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
                title: "农药残留检测",
                description: "适用于水果、蔬菜等农产品中农药残留的检测前处理。",
              },
              {
                title: "兽药残留检测",
                description: "用于畜禽产品中兽药残留的分析前处理。",
              },
              {
                title: "环境样品分析",
                description: "适用于水质、土壤等环境样品中污染物的分析。",
              },
              {
                title: "食品安全检测",
                description: "用于各类食品中有害物质的检测前处理。",
              },
              {
                title: "科研实验",
                description: "支持各类科研项目中的样品前处理需求。",
              },
              {
                title: "质量控制",
                description: "用于工业生产过程中的质量控制检测。",
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