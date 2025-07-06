'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  image: string
  price: number
  category: string
  brand: string
  rating: number
  description: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating) 
                ? 'text-yellow-400 fill-current' 
                : index < rating 
                ? 'text-yellow-400 fill-current opacity-60'
                : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3 }
        }}
      >
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Category Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              {product.category}
            </span>
          </div>

          {/* Brand Badge */}
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
              {product.brand}
            </span>
          </div>

          {/* Quick Add Button */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-2 left-2 right-2"
              >
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className=" items-center justify-between mb-3">
            <StarRating rating={product.rating} />
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-10"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">Added to cart!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductCard
