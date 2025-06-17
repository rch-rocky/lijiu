import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SpePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
     
        <div className="container relative z-20 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-[350px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">固相萃取柱（SPE）</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              提供各类物质和杂质分离纯化的固相萃取柱，适用于各种实验室和工业分离纯化需求
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
                  固相萃取（SPE）是一种样品前处理技术，通过固定相和流动相之间的选择性相互作用，实现样品中目标物与杂质的分离。我们提供多种类型的固相萃取柱，满足不同应用场景的需求。
                </p>
                <p>
                  我们的SPE产品采用高品质吸附材料，具有选择性好、回收率高、重现性好等特点，广泛应用于食品安全检测、环境监测、药物分析等领域。
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
                  <p className="ml-4 text-lg font-medium text-gray-900">应用广泛</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/spe.png"
                alt="SPE产品展示"
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
            {/* 聚合物基质 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">聚合物基质</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-HLB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-MCX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-WCX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-MAX</span>

                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-WAX</span>
                </div>
              </div>
            </div>

            {/* 硅胶基质 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">硅胶基质</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-C18</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-C18A</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-C18N</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-CN</span>
                </div>
                
<div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-SAX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-SCX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-PRS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-PBA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-PH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-C8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-Silica</span>

                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-Diol</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-NH2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-PSA</span>
                </div>
              </div>
            </div>

            {/* 无机吸附剂 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">无机吸附剂</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-Florisil</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-GCB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-GCB/NH2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-GCB/PSA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-Alumina-A</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-Alumina-B</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-Alumina-N</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-Drying</span>
                </div>
              </div>
            </div>

            {/* 复合型 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">复合型</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-C8/SAX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">SPE-C8/SCX</span>
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
                title: "食品安全检测",
                description: "用于食品中农药残留、兽药残留、真菌毒素等有害物质的检测前处理。",
              },
              {
                title: "环境监测",
                description: "适用于水质、土壤、空气等环境样品中污染物的富集和净化。",
              },
              {
                title: "药物分析",
                description: "应用于药物及其代谢物的分离纯化和浓缩。",
              },
              {
                title: "生物样品处理",
                description: "用于血液、尿液等生物样品中目标物质的提取和净化。",
              },
              {
                title: "工业过程控制",
                description: "在工业生产过程中的杂质去除和产品纯化。",
              },
              {
                title: "科学研究",
                description: "支持各类科研项目中的样品前处理需求。",
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