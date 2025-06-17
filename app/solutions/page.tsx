import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Microscope, FlaskRoundIcon as Flask, Beaker } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
       
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[300px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">解决方案</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              立玖生物科技提供专业的生物技术解决方案，满足食品安全检测和药物残留分析等领域的专业需求
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的解决方案</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              立玖生物科技针对不同领域的需求，提供专业、高效的解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Card className="border-2 border-teal-100 transition-all hover:border-teal-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-teal-700" />
                </div>
                <CardTitle className="text-2xl font-bold">针式过滤器在金刚烷胺残留检测中的应用</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  针对金刚烷胺残留检测中的样品前处理问题，我们开发了专用针式过滤器解决方案，提高检测效率和准确性。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">高效去除样品杂质</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">提高检测灵敏度</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">简化操作流程</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">降低检测成本</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-teal-600 hover:bg-teal-700 w-full">
                  <Link href="/solutions/filter-solution">
                    了解详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-blue-100 transition-all hover:border-blue-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Flask className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-2xl font-bold">全氟类化合物方法研制中空白残留问题的研究 </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  针对全氟类化合物检测方法研制过程中常见的空白残留问题，我们提供了系统性的解决方案，有效提高检测方法的准确性和可靠性。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">耗材空白全程可追溯</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">产品包装差异化</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">试剂纯化技术</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">数据校正方法</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                  <Link href="/solutions/pfoa-solution">
                    了解详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>


           
            <Card className="border-2 border-emerald-100 transition-all hover:border-emerald-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Beaker className="h-6 w-6 text-emerald-700" />
                </div>
                <CardTitle className="text-2xl font-bold">药物残留检测溶剂解决方案</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  针对GB 31658.17-2021标准中药物残留检测的液相色谱-串联质谱法，我们提供专业的溶剂解决方案，满足标准要求并提高检测效率。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">标准兼容溶剂配方</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">提高萃取效率</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">降低基质干扰</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">产品包装差异化</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  <Link href="/solutions/solvent-solution">
                    了解详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-2 border-purple-100 transition-all hover:border-purple-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Beaker className="h-6 w-6 text-purple-700" />
                </div>
                <CardTitle className="text-2xl font-bold">防乳化包在样品前处理中的应用</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  针对样品前处理过程中的乳化问题，我们提供专业的防乳化包解决方案，有效提高样品处理效率和检测准确性。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">产品包装差异化</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">内外标回收率高</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">简化操作流程</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">高效去除样品杂质</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 w-full">
                  <Link href="/solutions/Anti-emulsification-solution">
                    了解详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
