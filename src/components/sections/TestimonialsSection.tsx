'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// Arrow button component
const ArrowButton = ({ 
  direction, 
  onClick, 
  disabled 
}: { 
  direction: 'left' | 'right'
  onClick: () => void
  disabled: boolean 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
        hover:bg-white/20 transition-all duration-300 disabled:opacity-50 
        disabled:cursor-not-allowed group`}
    >
      <svg
        className={`w-5 h-5 text-white transition-transform duration-300 
          group-hover:scale-110 ${direction === 'left' ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  )
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      image: "/images/avatar1.jpg", // You can replace with actual images
      text: "Absolutely love the quality of products here! The shoes I bought are incredibly comfortable and stylish. Fast shipping and excellent customer service.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Professional",
      text: "The electronics selection is top-notch. I got my new laptop here and the price was unbeatable. Highly recommend for anyone looking for quality tech.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Style Blogger",
      text: "This is my go-to place for trendy clothing. The pieces are always on-trend and the quality is amazing. Customer service team is super helpful!",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Fitness Trainer",
      text: "The athletic wear I purchased exceeded my expectations. Great fit, comfortable material, and it holds up perfectly during intense workouts.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Interior Designer",
      text: "Found some beautiful home accessories here. The quality is exceptional and the prices are reasonable. Will definitely shop here again!",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Business Executive",
      text: "Professional attire that actually looks and feels great. The suits I bought here have received countless compliments. Outstanding quality!",
      rating: 5
    }
  ]

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }

  const totalSlides = Math.ceil(testimonials.length / itemsPerView.desktop)
  const maxIndex = testimonials.length - itemsPerView.desktop

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div variants={itemVariants} className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {testimonials.slice(currentIndex, currentIndex + itemsPerView.desktop).map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    {/* Star Rating */}
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-200 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
              <ArrowButton
                direction="left"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
              <ArrowButton
                direction="right"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection