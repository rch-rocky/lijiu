import Image from "next/image"
import { ArrowRight, Award, CheckCircle, Users, Lightbulb, Target, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
      
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[300px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              关于立玖生物科技
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              专注于生物技术创新，致力于为全球客户提供高品质的生物技术产品和解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">公司概览</h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  立玖生物科技成立于2010年，是一家专注于生物技术研发与应用的高新技术企业。多年来，我们始终坚持"创新驱动，质量为本"的理念，致力于为客户提供高品质的生物技术产品和解决方案。
                </p>
                <p>
                  公司拥有现代化的研发中心和生产基地，汇聚了一批在生物技术领域具有丰富经验的专业人才。我们的核心团队由知名高校和研究机构的硕士和专家组成，在生物传感、分子诊断、蛋白质工程等领域拥有深厚的技术积累。
                </p>
                <p>
                  立玖生物科技的业务范围涵盖食品安全检测、环境监测和临床诊断三大领域，为政府部门、科研院所、医疗机构和企业客户提供全方位的技术支持和服务。
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sy.png"
                alt="立玖生物科技实验室"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
             
            </div>
          </div>
        </div>
      </section>


      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">企业文化与核心价值观</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">我们的企业文化和价值观指引着我们的每一步发展</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Lightbulb className="h-8 w-8 text-teal-600" />,
                title: "创新驱动",
                description: "不断探索和创新是我们的核心动力，我们致力于推动生物技术的发展和应用。",
              },
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: "质量为本",
                description: "严格的质量管理体系确保我们的产品和服务始终保持高标准和可靠性。",
              },
              {
                icon: <Users className="h-8 w-8 text-emerald-600" />,
                title: "客户至上",
                description: "以客户需求为中心，提供专业、高效的解决方案和服务，赢得客户的长期信任。",
              },
              {
                icon: <Award className="h-8 w-8 text-cyan-600" />,
                title: "诚信负责",
                description: "诚实守信，对社会、客户和员工负责，是我们企业经营的基本准则。",
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

    </div>
  )
}
