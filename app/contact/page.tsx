"use client"

import { useRef, useEffect } from "react"
import type React from "react"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 加载高德地图
    const loadAMap = async () => {
      // 动态加载高德地图JS API
      const script = document.createElement('script');
      script.src = 'https://webapi.amap.com/maps?v=2.0&key=30c2bee9d014f884784177a525f563c2';
      script.async = true;
      
      // 创建Promise等待脚本加载完成
      const scriptLoaded = new Promise<void>((resolve) => {
        script.onload = () => resolve();
      });
      
      document.head.appendChild(script);
      
      // 等待脚本加载完成
      await scriptLoaded;
      
      // 初始化地图
      if (mapRef.current && window.AMap) {
        // 创建地图实例
        const map = new window.AMap.Map(mapRef.current, {
          zoom: 16,
          center: [121.601615, 31.209571],
          resizeEnable: true
        });
        
        // 创建标记点
        const marker = new window.AMap.Marker({
          position: [121.601615, 31.209571],
          title: '立玖生物科技'
        });
        
        // 将标记点添加到地图
        map.add(marker);
        
        // 创建信息窗体
        const infoWindow = new window.AMap.InfoWindow({
          content: "<div style='padding:10px;'><strong>立玖生物科技</strong><br/>上海市浦东新区川宏路508号410室</div>",
          offset: new window.AMap.Pixel(0, -30)
        });
        
        // 点击标记时打开信息窗体
        marker.on('click', () => {
          infoWindow.open(map, marker.getPosition());
        });
        
        // 默认打开信息窗体
        infoWindow.open(map, marker.getPosition());
      }
    };
    
    loadAMap();
    
    // 清理函数
    return () => {
      // 清理工作（如果需要）
    };
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10" />
        
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[300px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">联系我们</h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              无论您有任何问题、建议或合作意向，我们都期待与您沟通交流
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Map */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <MapPin className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">公司地址</h3>
                  <p className="mt-2 text-gray-600">欢迎前来参观我们的办公室</p>
                  <p className="mt-1 text-lg font-medium text-teal-700">上海市浦东新区川宏路508号410室</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">电话咨询</h3>
                  <p className="mt-2 text-gray-600">我们的客服团队随时为您提供帮助</p>
                  <p className="mt-1 text-lg font-medium text-blue-700">15900911517</p>
                  <p className="mt-2 text-sm text-gray-500">工作时间: 周一至周五 9:00-18:00</p>
                  <p className="text-sm text-gray-500">周六、周日休息</p>
                </div>
              </div>

              
            </div>

            {/* Map */}
            <div className="h-[350px] w-full rounded-lg overflow-hidden shadow-lg">
              <div ref={mapRef} className="w-full h-full">
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <p className="text-gray-600">地图加载中...</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
