'use client'

import React from 'react'
import { motion } from 'framer-motion'

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

interface ActivityListProps {
  user: User
}

const ActivityList: React.FC<ActivityListProps> = ({ user }) => {
  // Mock activity data
  const activities = [
    {
      id: 1,
      type: 'order',
      title: 'Order Placed',
      description: 'Nike Air Max 270 - Size 10',
      amount: '₹8,999',
      date: '2024-01-15',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 2,
      type: 'wishlist',
      title: 'Added to Wishlist',
      description: 'Samsung Galaxy S21',
      amount: '₹49,999',
      date: '2024-01-14',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 3,
      type: 'view',
      title: 'Product Viewed',
      description: 'Adidas Ultraboost',
      amount: '₹12,999',
      date: '2024-01-13',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 4,
      type: 'order',
      title: 'Order Delivered',
      description: 'Denim Jacket',
      amount: '₹2,499',
      date: '2024-01-12',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 5,
      type: 'review',
      title: 'Review Posted',
      description: 'Wireless Headphones - 5 stars',
      amount: '',
      date: '2024-01-11',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: 'bg-yellow-100 text-yellow-600'
    }
  ]

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
      >
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        Recent Activities
      </motion.h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {/* Activity Icon */}
            <div className={`p-3 rounded-lg ${activity.color}`}>
              {activity.icon}
            </div>

            {/* Activity Details */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                {activity.amount && (
                  <span className="text-sm font-medium text-gray-600">{activity.amount}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-1">{activity.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(activity.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>

            {/* Status Indicator */}
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      {/* View All Activities Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 pt-6 border-t border-gray-200 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors"
        >
          View All Activities
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ActivityList