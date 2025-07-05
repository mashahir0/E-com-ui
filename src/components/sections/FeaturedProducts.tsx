'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Card from '@/components/ui/Card'

const FeaturedProducts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Running Shoes",
      price: 129.99,
      image: "/images/img1.png",
      description: "Ultra-lightweight running shoes with advanced cushioning technology for maximum comfort during long runs."
    },
    {
      id: 2,
      name: "Casual Sneakers",
      price: 89.99,
      image: "/images/img2.png",
      description: "Stylish and comfortable everyday sneakers perfect for casual wear and light activities."
    },
    {
      id: 3,
      name: "Athletic Training Shoes",
      price: 149.99,
      image: "/images/img3.png",
      description: "High-performance training shoes designed for gym workouts and cross-training activities."
    },
    {
      id: 4,
      name: "Hiking Boots",
      price: 179.99,
      image: "/images/img4.png",
      description: "Durable hiking boots with waterproof technology and superior traction for outdoor adventures."
    },
    {
      id: 5,
      name: "Basketball Shoes",
      price: 159.99,
      image: "/images/img5.png",
      description: "Professional basketball shoes with ankle support and responsive cushioning for court performance."
    },
    {
      id: 6,
      name: "Fashion Sneakers",
      price: 99.99,
      image: "/images/img6.png",
      description: "Trendy fashion sneakers that combine style and comfort for everyday urban wear."
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" id='products'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium footwear designed for style, comfort, and performance
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
            >
              <Card
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts