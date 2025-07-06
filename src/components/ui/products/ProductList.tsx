'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

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

interface ProductListProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-gray-500 text-lg">
          No products found matching your criteria.
        </div>
        <div className="text-gray-400 text-sm mt-2">
          Try adjusting your filters or search terms.
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
          transition={{ delay: index * 0.1 }}
        >
          <ProductCard 
            product={product}
            onAddToCart={onAddToCart}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProductList
