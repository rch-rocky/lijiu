import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react"

import { Partners } from "@/components/partners"
import { RiMicroscopeLine, RiTestTubeLine, RiCustomerService2Line } from "react-icons/ri"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20 lg:pt-48 lg:pb-32"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0) 100%), url('https://readdy.ai/api/search-image?query=Modern%20laboratory%20with%20scientific%20equipment%2C%20researchers%20in%20white%20coats%20working%20with%20advanced%20biotechnology%20instruments%2C%20clean%20and%20bright%20environment%20with%20blue%20and%20green%20accents%2C%20high-tech%20microscopes%20and%20analysis%20devices%2C%20professional%20scientific%20setting&width=1920&height=1080&seq=1&orientation=landscape')`,
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              领先的生物科技
              <br />
              解决方案提供商
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              立玖生物科技致力于为医疗、农业、环保等领域提供创新的生物技术解决方案，以科技推动健康与可持续发展。
            </p>
            <div className="flex flex-wrap gap-4">
            <Button
                size="lg"
                variant="outline"
                className="rounded-button border-primary text-primary hover:bg-gray-50"
                asChild
              >
                <Link href="/about">
                  了解更多
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-button border-primary text-primary hover:bg-gray-50"
                asChild
              >
                <Link href="/contact">
                  联系我们
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 业务优势 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的业务优势</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              立玖生物科技凭借先进的技术、专业的团队和完善的服务体系，为客户提供全方位的生物科技解决方案。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6">
                <RiMicroscopeLine className="text-primary ri-2x" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">尖端研发能力</h3>
              <p className="text-gray-600">
                拥有一流的研发团队和实验室设施，持续进行技术创新和产品研发，保持行业领先地位。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-full mx-auto mb-6">
                <RiTestTubeLine className="text-secondary ri-2x" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">精准检测技术</h3>
              <p className="text-gray-600">
                采用国际先进的检测方法和标准，确保检测结果准确可靠，满足不同领域的精准需求。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6">
                <RiCustomerService2Line className="text-primary ri-2x" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">全程技术支持</h3>
              <p className="text-gray-600">
                提供从方案设计、技术培训到售后服务的全流程专业支持，确保客户顺利应用我们的产品和服务。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">专业解决方案</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              立玖生物科技为不同行业和应用场景提供定制化的生物技术解决方案，满足多样化需求。
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="solution-card flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="md:w-2/5 overflow-hidden flex-shrink-0">
                <img
                  src="https://readdy.ai/api/search-image?query=Food%20safety%20testing%20laboratory%20with%20modern%20equipment%2C%20scientists%20analyzing%20food%20samples%2C%20clean%20environment%20with%20blue%20and%20green%20color%20scheme%2C%20professional%20scientific%20instruments%20for%20detecting%20contaminants&width=600&height=400&seq=2&orientation=landscape"
                  alt="食品安全检测解决方案"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">食品安全检测解决方案</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  提供食品中农药残留、重金属、微生物等有害物质的快速精准检测方案，保障食品安全。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">针式过滤器在金刚烷胺残留检测中的应用</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">全氟辛酸 (PFOA) 方法研制中空白残留问题的研究</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">GB 31658.17-2021 药物残留检测的液相色谱-串联质谱法溶剂解决方案</p>
                  </div>
                </div>
                <Link
                  href="/solutions"
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

      {/* Products & Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">产品与服务</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              立玖生物科技提供全系列生物科技产品和专业技术服务，满足客户多样化需求
            </p>
          </div>

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
                    <p className="ml-3 text-gray-600">高效分离纯化能力</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">优异的选择性和重现性</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">广泛的应用领域</p>
                  </div>
                </div>
                <Link
                  href="/products"
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
                    <p className="ml-3 text-gray-600">快速简便的样品前处理</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">高效去除基质干扰</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">适用于多种样品类型</p>
                  </div>
                </div>
                <Link
                  href="/products"
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
                  src="lzsp.jpg"
                  alt="离子色谱前处理柱"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">离子色谱前处理柱</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  提供Na+、NH4+、K+、Ag+、Ba+和C18等多种离子色谱前处理柱，满足不同分析需求。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">高效离子交换</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">优异的分离效果</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">稳定可靠的性能</p>
                  </div>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              asChild
              className="rounded-button border-primary text-primary hover:bg-gray-50"
            >
              <Link href="/products">
                查看全部产品
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* 合作客户 */}
      <Partners />

      

      {/* Online Chat Button */}
      
    </div>
  )
}
