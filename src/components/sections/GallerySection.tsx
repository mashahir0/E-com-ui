'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const GallerySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const galleryImages = [
    {
      id: 1,
      src: '/images/img1.png',
      alt: 'Lifestyle fashion photography',
      title: 'Urban Style',
      category: 'Fashion'
    },
    {
      id: 2,
      src: '/images/img2.png',
      alt: 'Modern lifestyle photography',
      title: 'Contemporary Living',
      category: 'Lifestyle'
    },
    {
      id: 3,
      src: '/images/img3.png',
      alt: 'Fashion and accessories',
      title: 'Accessories Collection',
      category: 'Accessories'
    },
    {
      id: 4,
      src: '/images/img4.png',
      alt: 'Street style photography',
      title: 'Street Fashion',
      category: 'Fashion'
    },
    {
      id: 5,
      src: '/images/img5.png',
      alt: 'Minimalist lifestyle',
      title: 'Minimalist Design',
      category: 'Lifestyle'
    },
    {
      id: 6,
      src: '/images/img6.png',
      alt: 'Fashion editorial',
      title: 'Editorial Style',
      category: 'Fashion'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative h-[70vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 container mx-auto px-4 h-full flex flex-col"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center py-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Lifestyle Gallery
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Discover our curated collection of lifestyle and fashion photography
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
                ${index === 1 || index === 4 ? 'md:row-span-2' : ''}
                ${index === 2 ? 'lg:col-span-2' : ''}
                hover:bg-white/10 transition-all duration-300`}
            >
              {/* Image Container */}
                             <motion.div
                 variants={imageVariants}
                 whileHover="hover"
                 className="relative h-full overflow-hidden"
               >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {image.category}
                    </p>
                  </div>
                </div>

                {/* Hover Shadow Effect */}
                <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/30">
                  {image.category}
                </span>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center py-3"
        >
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm">
            View Full Gallery
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GallerySection