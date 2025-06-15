"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigationItems = [
  { name: "PROJECTS", href: "/projects" },
  { name: "ABOUT", href: "/about" },
  { name: "CASE STUDIES", href: "/case-studies" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-80 lg:overflow-y-auto lg:bg-white lg:border-r lg:border-gray-200"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center py-8 px-6 group">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image src="/yoma-icon.png" alt="YOMA" width={60} height={60} className="mr-4" />
            </motion.div>
            <span className="text-4xl font-light tracking-wider text-gray-800 group-hover:text-pink-500 transition-colors duration-300">
              YOMA
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 px-6 pb-4">
            <ul className="space-y-1">
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      pathname === item.href
                        ? "text-pink-500 bg-pink-50"
                        : "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
                    }`}
                  >
                    {item.name}
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="px-6 py-4 text-xs text-gray-400">© 2025 YOMA MEDIA. All rights reserved.</div>
        </div>
      </motion.div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between p-4 border-b border-gray-200 bg-white"
        >
          <Link href="/" className="flex items-center">
            <Image src="/yoma-icon.png" alt="YOMA" width={40} height={40} className="mr-3" />
            <span className="text-2xl font-light tracking-wider text-gray-800">YOMA</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200 bg-white overflow-hidden"
            >
              <nav className="px-4 py-2">
                <ul className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          pathname === item.href
                            ? "text-pink-500 bg-pink-50"
                            : "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="lg:pl-80">
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.main>
      </div>
    </div>
  )
}
