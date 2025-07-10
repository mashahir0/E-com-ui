'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProfileCard from '@/components/ui/profile/ProfileCard'
import UserDetails from '@/components/ui/profile/UserDetails'
import SettingsPanel from '@/components/ui/profile/SettingsPanel'
import ActivityList from '@/components/ui/profile/ActivityList'

// Mock user data
const mockUser = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  avatar: '/images/img1.png', // Using existing image as avatar
  status: 'Active',
  verified: true,
  joinedDate: '2023-01-15',
  orders: 12,
  wishlistItems: 8,
  totalSpent: 45000
}

const ProfilePage = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-8 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Profile
          </h1>
          <p className="text-gray-600">
            Manage your account settings and view your activity
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <ProfileCard user={mockUser} />
          </motion.div>

          {/* Right Column - Details and Activities */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Personal Information */}
            <UserDetails user={mockUser} />
            
            {/* Recent Activities */}
            <ActivityList user={mockUser} />
            
            {/* Settings Panel */}
            <SettingsPanel darkMode={darkMode} setDarkMode={setDarkMode} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProfilePage