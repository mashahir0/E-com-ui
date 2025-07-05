import ClothingCategory from '@/components/ui/categories/ClothingCategory'
import ElectronicsCategory from '@/components/ui/categories/ElectronicsCategory'
import ShoesCategory from '@/components/ui/categories/ShoesCategory'
import React from 'react'

const page = () => {
  return (
    <div>
        <ClothingCategory/>
        <ShoesCategory/>
        <ElectronicsCategory/>
    </div>
  )
}

export default page