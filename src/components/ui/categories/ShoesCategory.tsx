'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ShoesCategory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const shoesItems = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      image: '/images/shoes.png',
      price: '₹8,999',
      description: 'Comfortable running shoes with excellent cushioning and breathable design',
      category: 'Running'
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      image: '/images/shoes2.png',
      price: '₹12,999',
      description: 'Premium running shoes for professional athletes with superior performance',
      category: 'Athletic'
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      image: '/images/shoe3.png',
      price: '₹4,999',
      description: 'Stylish casual sneakers for everyday use with modern design',
      category: 'Casual'
    },
    {
      id: 4,
      name: 'Sports Shoes',
      image: '/images/shoe4.png',
      price: '₹6,499',
      description: 'High-performance sports shoes for athletes and fitness enthusiasts',
      category: 'Sports'
    },
    {
      id: 5,
      name: 'Formal Shoes',
      image: '/images/shoe5.png',
      price: '₹5,999',
      description: 'Elegant formal shoes for professional settings and special occasions',
      category: 'Formal'
    }
  ]

  return (
    <div>
      {/* Shoes Section */}
      <section ref={ref} id="shoes" className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"
            animate={isInView ? { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={isInView ? { scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
            animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] } : {}}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Shoes Collection
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            <motion.p 
              className="text-xl text-blue-100 leading-relaxed mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Step into style with our premium footwear collection. From athletic performance to casual comfort, 
              discover shoes that match your lifestyle and elevate your look.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shoesItems.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
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
                      <span className="px-3 py-1 bg-indigo-500/80 backdrop-blur-md rounded-full text-xs font-medium text-white">
                        {item.category}
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
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">{item.price}</span>
                      <Link href="/products">
                        <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/products">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl font-bold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore All Shoes
                </button>
              </Link>
            </motion.div>
          </div>
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

export default ShoesCategory