import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ChromatographyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
     
        <div className="container relative z-20 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-[350px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">色谱柱</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              我们提供多种高品质色谱柱产品，满足您的不同分析需求。
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
                  色谱柱是色谱分析中的核心部件，用于分离和检测复合混合物中的各个组分。我们提供高品质的色谱柱产品，满足不同领域的分析需求。
                </p>
                <p>
                  我们的色谱柱产品采用高品质填料，具有分离效率高、选择性好、耐用性强等特点，广泛应用于食品安全检测、环境监测、药物分析等领域。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <CheckCircle className="h-6 w-6 text-teal-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">高分离效率</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">高选择性</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-900">耐用性强</p>
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
                src="/spz.jpg"
                alt="色谱柱产品展示"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的色谱柱产品</h2>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[  // Array of all products
              "DFS-C18 - 通用型C18柱",
              "CPR-C18 - 高性能C18柱",
              "SX-C18 - 反相色谱柱",
              "SX-C8 - 反相色谱柱",
              "SX-C4 - 反相色谱柱",
              "SXAQ-C18 - 水溶性色谱柱",
              "SXPR-C18 - 水溶性色谱柱",
              "SXRD-C30 - 长链反相色谱柱",
              "SXNH2 - 氨基色谱柱",
              "SX蜂蜜柱 - 氨基色谱柱",
              "SX-SiO2 - 硅胶柱",
              "SXPhenyl - 苯基柱",
              "SXODS-H - 特殊应用柱",
              "SX-CN - 特殊应用柱",
              "SX-PAH - 特殊应用柱",
              "SXPolo-RP - 特殊应用柱",
              "SX-PFP - 特殊应用柱",
              "SXRU-C18 - 特殊应用柱",
              "SX流动相吸附柱 - 特殊应用柱",
              "SX制备柱 - 特殊应用柱",
              "SX-Phenyl-Ether - 特殊应用柱",
              "SXRX-C18 - 高效离子交换柱",
              "SXXY-C18 - 高效离子交换柱",
              "SXXY-C8 - 专业分离柱",
              "SXXD-C18 - 专业分离柱",
              "SXXR-C18 - 特殊应用柱",
              "SXXY-Sugar-Ca - 糖类分析柱",
              "SXXY-Sugar-H - 糖类分析柱",
              "SXSCX - 阳离子交换柱",
              "SXSAX - 阴离子交换柱",
              "SXSEC体积排阻柱 - 特殊应用柱",
              "SXHILIC-Amide - 特殊应用柱",
            ].map((product, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{product}</span>
              </div>
            ))}
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
                description: "用于食品中各类添加剂、农药残留等物质的分析检测。",
              },
              {
                title: "环境监测",
                description: "适用于环境样品中污染物的分离分析。",
              },
              {
                title: "药物分析",
                description: "应用于药物及其代谢物的分离纯化。",
              },
              {
                title: "生物样品分析",
                description: "用于生物样品中目标物质的分离检测。",
              },
              {
                title: "工业品分析",
                description: "适用于工业产品中各组分的分离分析。",
              },
              {
                title: "科研实验",
                description: "支持各类科研项目中的分离分析需求。",
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