import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
     
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[300px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">产品与服务</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              立玖生物科技提供全面的生物技术产品和专业服务，满足不同领域的需求
            </p>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* 固相萃取柱（SPE） */}
            <div className="solution-card flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="md:w-2/5 overflow-hidden flex-shrink-0">
                <img
                  src="spe.png"
                  alt="固相萃取柱（SPE）"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">固相萃取柱（SPE）</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  提供各类物质和杂质分离纯化的固相萃取柱，适用于各种实验室和工业分离纯化需求。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">聚合物基质</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">硅胶基质 - 反相吸附</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">硅胶基质 - 正相吸附</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">无机吸附剂</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">复合型</p>
                  </div>
                </div>
                <Link
                  href="/products/spe"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* QuEChERS产品 */}
            <div className="solution-card flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="md:w-2/5 overflow-hidden flex-shrink-0">
                <img
                  src="que.jpg"
                  alt="QuEChERS产品"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">QuEChERS产品</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  包括萃取盐包、净化管和多功能过滤器，用于农残分析和多残留处理。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">萃取盐包</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">净化管</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">陶瓷均质子</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">多功能过滤器</p>
                  </div>
                </div>
                <Link
                  href="/products/quechers"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 离子色谱前处理柱 */}
            <div className="solution-card flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="md:w-2/5 overflow-hidden flex-shrink-0">
                <img
                  src="lzsp.png"
                  alt="离子色谱前处理柱"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">离子色谱前处理柱</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  提供各类离子色谱前处理柱，满足不同分析需求，确保分离效果。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">H柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">Na柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">RP柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">Ag柱</p>
                  </div>
                </div>
                <Link
                  href="/products/ic-pretreatment"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 真菌毒素免疫亲和柱 */}
            <div className="solution-card flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="md:w-2/5 overflow-hidden flex-shrink-0">
                <img
                  src="zjds.jpg"
                  alt="真菌毒素免疫亲和柱"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">真菌毒素免疫亲和柱</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  专业用于真菌毒素检测的免疫亲和柱，确保检测结果准确可靠。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">黄曲霉毒素</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">玉米赤霉烯酮（ZEA）</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">T-2毒素</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">呕吐毒素（DON）</p>
                  </div>
                </div>
                <Link
                  href="/products/mycotoxin"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 专用柱 */}
            <div className="solution-card flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="md:w-2/5 overflow-hidden flex-shrink-0">
                <img
                  src="zyz.jpg"
                  alt="专用柱"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">专用柱</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  提供各种专用柱，满足特定样品和分析需求。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">氨丙基专用柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">茶叶专用柱及分子印迹柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">茶叶专用柱（DPT）</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">抗氧化剂专用柱（AOX）</p>
                  </div>
                </div>
                <Link
                  href="/products/specialized"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 色谱柱 */}
            <div className="solution-card flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="md:w-2/5 overflow-hidden flex-shrink-0">
                <img
                  src="spz.jpg"
                  alt="色谱柱"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">色谱柱</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    提供各类高效液相色谱柱、气相色谱柱等产品，满足不同分析需求。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">DFS-C18色谱柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">CPR-C18色谱柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">SX-C18色谱柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">SXAQ-C18色谱柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">SXPR-C18色谱柱</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">SX-C8色谱柱</p>
                  </div>
                </div>
                <Link
                  href="/products/chromatography"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
