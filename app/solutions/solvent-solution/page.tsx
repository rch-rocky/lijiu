import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function SolventSolutionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
                溶剂解决方案
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                GB 31658.17-2021标准药物残留检测专用溶剂
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  立玖生物科技针对GB 31658.17-2021《动物源食品中兽药残留检测 液相色谱-串联质谱法》标准，开发了专用溶剂解决方案，满足标准要求并提高检测效率。
                </p>
                <p>
                  我们的溶剂解决方案经过严格验证，能有效提高目标化合物的萃取效率，降低基质干扰，提高方法的灵敏度和稳定性，广泛应用于食品安全检测实验室和质检机构。
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">标准兼容</h3>
                    <p className="mt-1 text-gray-600">完全符合GB 31658.17-2021标准要求</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-700" />
                </div>
                <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">产品包装差异化</h3>
                    <p className="mt-1 text-gray-600">针对客户检测需求的差异化，立玖生物对产品包装进行升级，实现单一批次或批量检测的全程兼容。</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">高效萃取</h3>
                    <p className="mt-1 text-gray-600">优化的溶剂配方，提高目标化合物萃取效率</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">低基质干扰</h3>
                    <p className="mt-1 text-gray-600">有效抑制基质干扰，提高检测灵敏度</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">方法稳定性</h3>
                    <p className="mt-1 text-gray-600">确保检测结果的稳定性和可靠性</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/3.jpg"
                alt="药物残留检测溶剂解决方案"
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