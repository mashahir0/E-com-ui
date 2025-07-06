'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface BreadcrumbsProps {
  items: string[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center space-x-2 text-sm text-gray-600"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <motion.div variants={itemVariants}>
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium">{item}</span>
            ) : (
              <Link
                href={index === 0 ? '/' : `#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </Link>
            )}
          </motion.div>
          
          {index < items.length - 1 && (
            <motion.svg
              variants={itemVariants}
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  )
}

export default Breadcrumbs
