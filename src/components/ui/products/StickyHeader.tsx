'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface StickyHeaderProps {
  cartItemsCount: number
  onCartClick: () => void
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ cartItemsCount, onCartClick }) => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'Categories', href: '/category' },
    { name: 'Contact', href: '/#contact' }
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-200"
              >
                LOGO
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Cart Icon */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              
              {/* Cart Badge */}
              {cartItemsCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                >
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </motion.div>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              variants={itemVariants}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default StickyHeader
