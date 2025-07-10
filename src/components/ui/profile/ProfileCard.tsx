'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  avatar: string
  status: string
  verified: boolean
  joinedDate: string
  orders: number
  wishlistItems: number
  totalSpent: number
}

interface ProfileCardProps {
  user: User
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg"
        >
          <Image
            src={user.avatar}
            alt={user.name}
            fill
            className="object-cover"
          />
          {user.verified && (
            <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </motion.div>
      </div>

      {/* User Info */}
      <div className="text-center mb-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 mb-1"
        >
          {user.name}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-3"
        >
          @{user.username}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-500 mb-4"
        >
          {user.email}
        </motion.p>

        {/* Status Badges */}
        <div className="flex justify-center gap-2 mb-6">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
          >
            {user.status}
          </motion.span>
          {user.verified && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
            >
              Verified
            </motion.span>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="text-xl font-bold text-gray-900">{user.orders}</div>
            <div className="text-xs text-gray-500">Orders</div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="text-xl font-bold text-gray-900">{user.wishlistItems}</div>
            <div className="text-xs text-gray-500">Wishlist</div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="text-xl font-bold text-gray-900">₹{(user.totalSpent / 1000).toFixed(1)}k</div>
            <div className="text-xs text-gray-500">Spent</div>
          </motion.div>
        </div>

        {/* Edit Profile Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md"
        >
          Edit Profile
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProfileCard