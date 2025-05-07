import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AuthButton } from '@/module/auth/ui/components/auth-button'

export const AdminNavbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md'>
      <div className='flex items-center gap-4 w-full'>
        {/* menu and logo */}
        <div className='flex items-center flex-shrink-0'>
          <SidebarTrigger />
          <Link prefetch href={'/admin'} className='hidden md:block'>
            <div className='p-4 flex items-center gap-1'>
              <Image src={'/logo-sumbar.svg'} alt={'logo'} width={32} height={32} />
              <p className='text-xl font-semibold tracking-tight'>MyAdmin</p>
            </div>
          </Link>
        </div>

        <div className='flex-1' />

        <div className='flex-shrink-0 items-center flex gap-4'>
          <AuthButton />
        </div>
      </div>
    </div>
  )
}
