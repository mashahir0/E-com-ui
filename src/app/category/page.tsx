'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1 })

  const categories = [
    { id: 'all', name: 'All Categories', color: 'from-blue-600 to-purple-600' },
    { id: 'clothing', name: 'Clothing', color: 'from-orange-500 to-red-500' },
    { id: 'shoes', name: 'Shoes', color: 'from-indigo-500 to-purple-500' },
    { id: 'electronics', name: 'Electronics', color: 'from-green-500 to-blue-500' }
  ]

  const categoryData = {
    clothing: [
      { id: 1, name: 'Casual T-Shirt', image: '/images/img4.png', price: '₹899', description: 'Comfortable cotton t-shirt for everyday wear' },
      { id: 2, name: 'Denim Jacket', image: '/images/img2.png', price: '₹2,499', description: 'Stylish denim jacket for casual wear' },
      { id: 3, name: 'Running Shorts', image: '/images/img6.png', price: '₹1,499', description: 'Lightweight running shorts for maximum comfort' },
      { id: 4, name: 'Fashion Item 1', image: '/images/img1.png', price: '₹1,999', description: 'Trendy fashion item for the modern look' },
      { id: 5, name: 'Fashion Item 2', image: '/images/img3.png', price: '₹3,299', description: 'Elegant fashion piece for special occasions' },
      { id: 6, name: 'Fashion Item 3', image: '/images/img5.png', price: '₹2,799', description: 'Contemporary style for the fashion-forward' }
    ],
    shoes: [
      { id: 1, name: 'Nike Air Max 270', image: '/images/shoes.png', price: '₹8,999', description: 'Comfortable running shoes with excellent cushioning' },
      { id: 2, name: 'Adidas Ultraboost', image: '/images/shoes2.png', price: '₹12,999', description: 'Premium running shoes for professional athletes' },
      { id: 3, name: 'Casual Sneakers', image: '/images/shoe3.png', price: '₹4,999', description: 'Stylish casual sneakers for everyday use' },
      { id: 4, name: 'Sports Shoes', image: '/images/shoe4.png', price: '₹6,499', description: 'High-performance sports shoes for athletes' },
      { id: 5, name: 'Formal Shoes', image: '/images/shoe5.png', price: '₹5,999', description: 'Elegant formal shoes for professional settings' }
    ],
    electronics: [
      { id: 1, name: 'Samsung Galaxy S21', image: '/images/img1.png', price: '₹49,999', description: 'Latest smartphone with advanced features' },
      { id: 2, name: 'iPhone 13 Pro', image: '/images/img3.png', price: '₹89,999', description: 'Professional grade smartphone with pro camera system' },
      { id: 3, name: 'Wireless Headphones', image: '/images/img5.png', price: '₹3,999', description: 'High-quality wireless headphones with noise cancellation' },
      { id: 4, name: 'Smart Device 1', image: '/images/electronics1.png', price: '₹15,999', description: 'Smart device for modern living' },
      { id: 5, name: 'Smart Device 2', image: '/images/electronics2.png', price: '₹22,999', description: 'Advanced smart device with cutting-edge technology' },
      { id: 6, name: 'Smart Device 3', image: '/images/electronics3.png', price: '₹18,999', description: 'Innovative smart device for productivity' },
      { id: 7, name: 'Smart Device 4', image: '/images/electronics4.png', price: '₹25,999', description: 'Premium smart device for professionals' }
    ]
  }

  const getAllItems = () => {
    return [
      ...categoryData.clothing.map(item => ({ ...item, category: 'clothing' })),
      ...categoryData.shoes.map(item => ({ ...item, category: 'shoes' })),
      ...categoryData.electronics.map(item => ({ ...item, category: 'electronics' }))
    ]
  }

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return getAllItems()
    }
    return categoryData[activeCategory as keyof typeof categoryData]?.map(item => ({ ...item, category: activeCategory })) || []
  }

  const filteredItems = getFilteredItems()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Collections
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover amazing products across our carefully curated categories. 
            From trendy fashion to cutting-edge electronics, find exactly what you&apos;re looking for.
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.category}-${item.id}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(item.image)}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      item.category === 'clothing' ? 'bg-orange-500' :
                      item.category === 'shoes' ? 'bg-indigo-500' :
                      'bg-green-500'
                    }`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-sm font-bold text-white">
                      {item.price}
                    </span>
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                    <Link href="/products">
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-blue-100">Try selecting a different category or check back later.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] rounded-lg overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Product"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default CategoryPage