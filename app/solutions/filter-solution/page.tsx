import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function FilterSolutionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-800 mb-4">
                针式过滤器解决方案
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                提高金刚烷胺残留检测效率与准确性
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                立玞生物科技针对标准GB 31660.5-2019《食品安全国家标准 动物性食品中金刚烷胺残留量的测定 液相色谱-串联质谱法》金刚烷胺残留检测中的样品前处理问题，开发了专用针式过滤器解决方案。该方案采用创新材料和结构设计，能有效去除样品中的杂质干扰，提高检测的灵敏度和准确性。
                </p>
                <p>
                实验结果表明：针式过滤器有效的降低了鸡肉和猪肉基质对金刚烷胺的基质效应，主体表现为基质中沉淀物颗粒变小，基质中脂质和小分子蛋白等小分子聚集效应减弱。
                </p>
                <p>
                  我们的针式过滤器解决方案广泛应用于食品安全检测实验室、质检机构和生产企业，帮助客户提高检测效率，降低检测成本，确保检测结果的可靠性。
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-teal-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">高效去除样品杂质</h3>
                    <p className="mt-1 text-gray-600">采用特殊材料，有效去除样品中的干扰物质</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-teal-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">提高检测灵敏度</h3>
                    <p className="mt-1 text-gray-600">优化结构设计，提高检测的灵敏度和准确性</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-teal-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">简化操作流程</h3>
                    <p className="mt-1 text-gray-600">人体工程学设计，操作简便，提高工作效率</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-teal-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">降低检测成本</h3>
                    <p className="mt-1 text-gray-600">通过优化流程和材料，有效降低检测成本</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/1.jpg"
                alt="针式过滤器解决方案"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
                标准方法
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>针式过滤器的使用在以下标准中对基质清除具有明显的作用：</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>农业部1077号公告-1-2008《水产品中17种磺胺类及15种喹诺酮类药物残留量的测定 液相色谱-串联质谱法》</li>
                  <li>GB/T 20366-2006《动物源产品中喹诺酮类残留量的测定 液相色谱-串联质谱法》</li>
                  <li>GB/T 21311-2007《动物源性食品中硝基呋喃类药物代谢物残留量检测方法 高效液相色谱/串联质谱法》</li>
                  <li>GB/T 20756-2006《可食动物肌肉、肝脏和水产品中氯霉素、甲砜霉素和氟苯尼考残留量的测定 液相色谱-串联质谱法》</li>
                  <li>GB/T 22338-2008《动物源性食品中氯霉素类药物残留量测定》</li>
                  <li>GB 31660.5-2019《食品安全国家标准 动物性食品中金刚烷胺残留量的测定 液相色谱-串联质谱法》</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/针式.png"
                alt="针式过滤器实物图"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}