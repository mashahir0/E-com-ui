'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FilterProps {
  filters: {
    categories: string[]
    brands: string[]
    ratings: string[]
    priceRanges: string[]
  }
  onFilterChange: (filterType: keyof {
    categories: string[]
    brands: string[]
    ratings: string[]
    priceRanges: string[]
  }, value: string) => void
  onClearFilters?: () => void
}

const SidebarFilter: React.FC<FilterProps> = ({ filters, onFilterChange, onClearFilters }) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    ratings: true,
    priceRanges: true
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const filterSections: Array<{
    id: keyof typeof filters
    title: string
    options: string[]
  }> = [
    {
      id: 'categories',
      title: 'Category',
      options: ['Shoes', 'Electronics', 'Clothing']
    },
    {
      id: 'brands',
      title: 'Brand',
      options: ['Nike', 'Adidas', 'Samsung', 'Apple']
    },
    {
      id: 'ratings',
      title: 'Rating',
      options: ['4', '3', '2', '1']
    },
    {
      id: 'priceRanges',
      title: 'Price Range',
      options: ['0-1000', '1000-5000', '5000+']
    }
  ]

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>
      
      <div className="space-y-6">
        {filterSections.map((section) => (
          <div key={section.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full text-left mb-3 group"
            >
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {section.title}
              </h3>
              <motion.svg
                className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors"
                animate={{ rotate: expandedSections[section.id as keyof typeof expandedSections] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Section Content */}
            <AnimatePresence>
              {expandedSections[section.id as keyof typeof expandedSections] && (
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-2"
                >
                  {section.options.map((option, index) => (
                    <motion.div
                      key={option}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={`${section.id}-${option}`}
                        checked={filters[section.id as keyof typeof filters].includes(option)}
                        onChange={() => onFilterChange(section.id, option)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor={`${section.id}-${option}`}
                        className="ml-3 text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        {section.id === 'ratings' ? `${option}+ Stars` : 
                         section.id === 'priceRanges' ? 
                           option === '0-1000' ? '₹0 - ₹1,000' :
                           option === '1000-5000' ? '₹1,000 - ₹5,000' :
                           '₹5,000+' : option}
                      </label>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Clear Filters Button */}
      {Object.values(filters).some(filter => filter.length > 0) && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onClearFilters}
          className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Clear All Filters
        </motion.button>
      )}
    </div>
  )
}

export default SidebarFilter
