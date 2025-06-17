'use client'

import * as React from 'react'
import { RiHospitalFill, RiGovernmentFill, RiBuildingFill, RiFlaskFill, RiPlantFill, RiSchoolFill } from 'react-icons/ri'

export function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">合作客户</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们为众多行业领先企业和机构提供专业的生物科技产品和服务。
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <RiHospitalFill className="text-gray-700 text-2xl" />
            </div>
            <div className="text-center text-gray-700 font-medium">
              北京协和医院
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <RiGovernmentFill className="text-gray-700 text-2xl" />
            </div>
            <div className="text-center text-gray-700 font-medium">
              国家食品安全中心
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <RiBuildingFill className="text-gray-700 text-2xl" />
            </div>
            <div className="text-center text-gray-700 font-medium">中粮集团</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <RiFlaskFill className="text-gray-700 text-2xl" />
            </div>
            <div className="text-center text-gray-700 font-medium">
              上海医药研究院
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <RiPlantFill className="text-gray-700 text-2xl" />
            </div>
            <div className="text-center text-gray-700 font-medium">
              绿色环保联盟
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <RiSchoolFill className="text-gray-700 text-2xl" />
            </div>
            <div className="text-center text-gray-700 font-medium">
              清华大学生命科学院
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}