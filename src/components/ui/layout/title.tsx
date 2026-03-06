'use client'

import { siteConfig } from '@/config/site.config'
import { usePathname } from 'next/navigation'

const Title = () => {
  const pathname = usePathname()

  const currentNavItem = siteConfig.navItems.find(
    item => item.href === pathname,
  )

  const pageTitle = currentNavItem ? currentNavItem.label : siteConfig.title

  return (
    <div className='w-full flex justify-center my-6'>
      <div className='text-3xl font-bold'>{pageTitle}</div>
    </div>
  )
}

export default Title
