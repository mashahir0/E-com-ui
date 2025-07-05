'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ElectronicsCategory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })

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
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              className="text-xl text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover the latest in technology with our premium electronics collection. 
              From smartphones to laptops, we have everything you need to stay connected and productive.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ElectronicsCategory