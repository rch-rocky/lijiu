import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SpecializedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
     
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[300px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">专用柱</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              提供各种专用柱，满足特定样品和分析需求
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
                  专用柱是针对特定应用场景设计的分析柱，采用特殊填料和工艺，满足不同领域的分析需求。我们提供多种类型的专用柱，确保分析结果的准确性和可靠性。
                </p>
                <p>
                  我们的专用柱产品采用高品质材料，具有选择性好、分离效果好、使用寿命长等特点，广泛应用于食品安全检测、环境监测等领域。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <CheckCircle className="h-6 w-6 text-teal-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">高选择性</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">分离效果好</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">使用寿命长</p>
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
                src="/zyz.jpg"
                alt="专用柱产品展示"
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
            {/* 基础系列 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">基础系列</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">氨丙基专用柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">BAP苯并芘专用柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">DPT茶叶专用柱</span>
                </div>
              </div>
            </div>

            {/* 功能系列 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">功能系列</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">AOX抗氧化剂专用柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">偶氮染料检测柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">PA聚酰胺柱</span>
                </div>
              </div>
            </div>

            {/* 检测系列 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">检测系列</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SDR苏丹红专用柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">HON蜂蜜检测专用柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">PSA/Silica氧化硅检测柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">炔基采检测专用柱</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">DNPH专用柱</span>
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
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">广泛应用于多个领域的样品分析</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "食品安全检测",
                description: "用于食品中各类添加剂、染料等物质的检测分析。",
              },
              {
                title: "环境监测",
                description: "适用于环境样品中特定污染物的分析检测。",
              },
              {
                title: "药物分析",
                description: "应用于药物及其杂质的分离分析。",
              },
              {
                title: "化妆品检测",
                description: "用于化妆品中各类成分的分析检测。",
              },
              {
                title: "工业品分析",
                description: "适用于工业产品中特定成分的分析。",
              },
              {
                title: "科研实验",
                description: "支持各类科研项目中的特殊分析需求。",
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