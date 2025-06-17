"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchModalProps {
  onClose: () => void
}

export default function SearchModal({ onClose }: SearchModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEsc)

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg w-full max-w-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="关闭"
        >
          <i className="ri-close-line ri-lg"></i>
        </button>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">搜索</h3>
        <div className="relative">
          <Input type="text" className="w-full px-4 py-3 pr-10" placeholder="请输入关键词搜索" autoFocus />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <i className="ri-search-line text-gray-500"></i>
          </button>
        </div>
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-500 mb-3">热门搜索</h4>
          <div className="flex flex-wrap gap-2">
            {["食品安全检测", "环境监测", "生物分析仪", "试剂盒", "技术服务"].map((term, index) => (
              <Button
                key={index}
                variant="outline"
                className="px-3 py-1 h-auto text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 border-0"
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
