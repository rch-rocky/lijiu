import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function PfoaSolutionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-1 lg:order-2 relative">
              <Image
                src="/2.jpg"
                alt="全氟辛酸方法研究"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-1">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 mb-4">
                全氟类化合物研究方案
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                解决全氟类化合物检测中的空白残留问题
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  立玖生物科技针对全氟类化合物检测方法研制过程中常见的空白残留问题，我们提供了系统性的解决方案，有效提高检测方法的准确性和可靠性。
                </p>
                <p>
                实验结果表明：在前处理其他耗材无全氟辛酸残留的基础上，控制全氟辛酸空白的问题优先选用玻璃材质的QuchERS耗材（品牌为立玖），效果显著提升。
                </p>
                <p>
                依据标准：GB 5009.253-2016《食品安全国家标准 动物源性食品中全氟辛烷磺酸（PFOS）和全氟辛酸（PFOA）的测定》
                </p>
                <p>
                  我们的解决方案从实验室环境控制、试剂纯化、样品前处理到数据校正等多个环节入手，有效降低空白值，提高检测方法的准确性和可靠性。
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">耗材空白全程可追溯</h3>
                    <p className="mt-1 text-gray-600">严选前处理过程中所涉及到耗材，从生产到客户使用，提供无全氟空白服务。</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">产品包装差异化</h3>
                    <p className="mt-1 text-gray-600">针对客户检测需求的差异化，立玖生物对产品包装进行升级，实现单一批次或批量检测的全程兼容。</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">试剂优化</h3>
                    <p className="mt-1 text-gray-600">特殊纯化处理的高纯试剂，降低背景干扰</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">操作规程</h3>
                    <p className="mt-1 text-gray-600">标准化操作流程，减少人为引入的污染</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">数据处理</h3>
                    <p className="mt-1 text-gray-600">专业的数据校正方法，提高结果可靠性</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}