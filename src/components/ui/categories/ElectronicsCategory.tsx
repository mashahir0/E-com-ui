'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ElectronicsCategory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const electronicsItems = [
    {
      id: 1,
      name: 'Samsung Galaxy S21',
      image: '/images/img1.png',
      price: '₹49,999',
      description: 'Latest smartphone with advanced features and stunning display',
      category: 'Smartphones'
    },
    {
      id: 2,
      name: 'iPhone 13 Pro',
      image: '/images/img3.png',
      price: '₹89,999',
      description: 'Professional grade smartphone with pro camera system',
      category: 'Smartphones'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      image: '/images/img5.png',
      price: '₹3,999',
      description: 'High-quality wireless headphones with noise cancellation',
      category: 'Audio'
    },
    {
      id: 4,
      name: 'Smart Device 1',
      image: '/images/electronics1.png',
      price: '₹15,999',
      description: 'Smart device for modern living with IoT capabilities',
      category: 'Smart Home'
    },
    {
      id: 5,
      name: 'Smart Device 2',
      image: '/images/electronics2.png',
      price: '₹22,999',
      description: 'Advanced smart device with cutting-edge technology',
      category: 'Gadgets'
    },
    {
      id: 6,
      name: 'Smart Device 3',
      image: '/images/electronics3.png',
      price: '₹18,999',
      description: 'Innovative smart device for productivity and efficiency',
      category: 'Computing'
    },
    {
      id: 7,
      name: 'Smart Device 4',
      image: '/images/electronics4.png',
      price: '₹25,999',
      description: 'Premium smart device for professionals and enthusiasts',
      category: 'Professional'
    }
  ]

  return (
    <div>
      {/* Electronics Section */}
      <section ref={ref} id="electronics" className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-orange-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
            animate={isInView ? { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
            animate={isInView ? { scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
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
            Electronics Collection
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            <motion.p 
              className="text-xl text-blue-100 leading-relaxed mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover the latest in technology with our premium electronics collection. 
              From smartphones to smart home devices, we have everything you need to stay connected and productive.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {electronicsItems.map((item, index) => (
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
                      <span className="px-3 py-1 bg-green-500/80 backdrop-blur-md rounded-full text-xs font-medium text-white">
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
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">{item.price}</span>
                      <Link href="/products">
                        <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
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
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xl font-bold rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore All Electronics
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

export default ElectronicsCategory