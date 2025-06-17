import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AntiEmulsificationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-800 mb-4">
                防乳化包解决方案
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                有效解决乙酸乙酯与水相间乳化问题
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  立玖生物科技针对GB 31656.13-2021《食品安全国家标准 水产品中硝基呋喃类代谢物多残留的测定 液相色谱-串联质谱法》中检测过程中常见的乙酸乙酯与水相乳化问题，研发推出防乳化包D08-Z1264，有效提高内外标回收率，提升检测效率与结果稳定性。
                </p>
                <p>
                  防乳化包通过独特设计与优质材料，有效防止乳化现象发生，简化样品前处理流程，适配不同批次及规模的检测需求，适用于食品安全检测实验室、监管机构与企业实验室。
                </p>
              </div>
              <div className="mt-8 space-y-4">
  <div className="flex items-start">
    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
      <CheckCircle className="h-4 w-4 text-teal-700" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium text-gray-900">产品包装差异化</h3>
      <p className="mt-1 text-gray-600">
        针对客户检测需求差异化，立玖生物对产品包装进行升级，实现单一批次或批量检测的全程兼容。
      </p>
    </div>
  </div>
  <div className="flex items-start">
    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
      <CheckCircle className="h-4 w-4 text-teal-700" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium text-gray-900">内外标回收率高</h3>
      <p className="mt-1 text-gray-600">
        优化配方设计，有效提升内标与外标的检测回收率，确保数据准确稳定。
      </p>
    </div>
  </div>
  <div className="flex items-start">
    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
      <CheckCircle className="h-4 w-4 text-teal-700" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium text-gray-900">简化操作流程</h3>
      <p className="mt-1 text-gray-600">
        操作简便，流程缩短，降低人工干预，提高实验室检测效率。
      </p>
    </div>
  </div>
  <div className="flex items-start">
    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
      <CheckCircle className="h-4 w-4 text-teal-700" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium text-gray-900">高效去除样品杂质</h3>
      <p className="mt-1 text-gray-600">
        材料设计优化，能有效清除干扰杂质，提高样品前处理纯净度。
      </p>
    </div>
  </div>
</div>

            </div>
            <div className="relative">
              <Image
                src="/4.jpg"
                alt="防乳化包效果图"
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
                适用标准方法
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>防乳化包适用于以下检测标准，广泛应用于食品安全检测中：</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>GB 31656.13-2021 食品安全国家标准 水产品中硝基呋喃类代谢物多残留的测定 液相色谱-串联质谱法</li>
                  <li>GB/T 21311-2007 动物源性食品中硝基呋喃类代谢物残留量检测方法</li>
                  <li>GB/T 20752-2006 猪肉、牛肉、鸡肉、猪肝和水产品中硝基呋喃类代谢物残留量的测定</li>
                  <li>农业部783号公告-1-2006 水产品中硝基呋喃类代谢物残留量的测定</li>
                  <li>农业部781号公告-4-2006 动物源食品中硝基呋喃类代谢物残留量的测定</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/乳化.png"
                alt="防乳化效果对比图"
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
