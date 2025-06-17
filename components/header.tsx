"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import SearchModal from "@/components/search-modal"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="立玖生物科技" width={40} height={40} className="mr-2" />
            <div className="text-lg font-medium text-gray-800">立玖生物科技</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link
            href="/"
            className={`nav-link relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-primary transition-colors ${pathname === "/" ? "text-primary font-medium after:w-full" : "text-gray-700 hover:text-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"}`}
          >
            首页
          </Link>
          <Link
            href="/solutions"
            className={`nav-link relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-primary transition-colors ${pathname.startsWith("/solutions") ? "text-primary font-medium after:w-full" : "text-gray-700 hover:text-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"}`}
          >
            解决方案
          </Link>
          <Link
            href="/products"
            className={`nav-link relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-primary transition-colors ${pathname === "/products" ? "text-primary font-medium after:w-full" : "text-gray-700 hover:text-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"}`}
          >
            产品服务
          </Link>
         
          <Link
            href="/meeting"
            className={`nav-link relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-primary transition-colors ${pathname === "/meeting" ? "text-primary font-medium after:w-full" : "text-gray-700 hover:text-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"}`}
          >
            在线会议
          </Link>
          <Link
            href="/about"
            className={`nav-link relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-primary transition-colors ${pathname === "/about" ? "text-primary font-medium after:w-full" : "text-gray-700 hover:text-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"}`}
          >
            关于我们
          </Link>
          <Link
            href="/contact"
            className={`nav-link relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-primary transition-colors ${pathname === "/contact" ? "text-primary font-medium after:w-full" : "text-gray-700 hover:text-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"}`}
          >
            联系我们
          </Link>
        </nav>

       

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors mr-2"
            onClick={() => setIsSearchOpen(true)}
            aria-label="搜索"
          >
            <i className="ri-search-line text-gray-600 ri-lg"></i>
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <i className="ri-menu-line text-gray-700 ri-lg"></i>
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="立玖生物科技" width={32} height={32} className="mr-2" />
                    <span className="text-lg font-bold">立玖生物科技</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className={`text-base font-medium transition-colors py-2 ${pathname === "/" ? "text-primary" : "text-gray-700 hover:text-primary"}`}>
                    首页
                  </Link>
                  <Link
                    href="/solutions"
                    className={`text-base font-medium transition-colors py-2 ${pathname.startsWith("/solutions") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                  >
                    解决方案
                  </Link>
                  <Link
                    href="/products"
                    className={`text-base font-medium transition-colors py-2 ${pathname === "/products" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                  >
                    产品服务
                  </Link>
                  <Link
                    href="/live"
                    className={`text-base font-medium transition-colors py-2 ${pathname === "/live" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                  >
                    在线直播
                  </Link>
                  <Link
                    href="/meeting"
                    className={`text-base font-medium transition-colors py-2 ${pathname === "/meeting" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                  >
                    在线会议
                  </Link>
                  <Link
                    href="/about"
                    className={`text-base font-medium transition-colors py-2 ${pathname === "/about" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                  >
                    关于我们
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-base font-medium transition-colors py-2 ${pathname === "/contact" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                  >
                    联系我们
                  </Link>
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                        <span>中文</span>
                        <i className="ri-arrow-down-s-line ml-1 ri-lg"></i>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </header>
  )
}
