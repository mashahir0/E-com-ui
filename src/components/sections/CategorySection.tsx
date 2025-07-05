'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  id: string
  title: string
  image: string
  description: string
  itemCount: number
  delay: number
  isInView: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, title, image, description, itemCount, delay, isInView }) => {
  const handleClick = () => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      {/* Category Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-sm font-medium text-white">
          {itemCount} Items
        </div>
      </div>

      {/* Category Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-blue-100 mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Action Button */}
        <motion.div
          className="flex items-center justify-between"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-blue-300 font-medium group-hover:text-blue-200 transition-colors duration-300">
            Explore {title}
          </span>
          
          <motion.svg
            className="w-5 h-5 text-blue-300 group-hover:text-blue-200 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

const CategorySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })

  const categories = [
    {
      id: 'shoes',
      title: 'Shoes',
      image: '/images/shoes.png',
      description: 'Discover our premium collection of footwear including running shoes, sneakers, boots, and more.',
      itemCount: 24
    },
    {
      id: 'electronics',
      title: 'Electronics',
      image: '/images/img1.png',
      description: 'Explore the latest gadgets, smartphones, laptops, and electronic accessories.',
      itemCount: 18
    },
    {
      id: 'clothing',
      title: 'Clothing',
      image: '/images/img2.png',
      description: 'Browse through trendy fashion items, casual wear, and professional attire.',
      itemCount: 32
    }
  ]

  return (
    <section ref={ref} id='category' className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={isInView ? { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={isInView ? { scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
          animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our diverse collection of products organized by categories for easy navigation
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
              description={category.description}
              itemCount={category.itemCount}
              delay={index * 0.2}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View All Categories Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={'/category'}>
              View All Categories
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CategorySection