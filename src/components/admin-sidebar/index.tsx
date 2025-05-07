"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'


import Link from 'next/link'
import { LogOutIcon, VideoIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { AdminSidebarHeader } from './admin-sidebar-header'


export const AdminSidebar = () => {
  const pathname = usePathname()

  return (
    <Sidebar className='pt-16 z-40' collapsible='icon'>
      <SidebarContent className='bg-background'>
        <SidebarGroup>
          <SidebarMenu>
            <AdminSidebarHeader />
            <SidebarMenuItem className='flex-1 flex'>
              <SidebarMenuButton isActive={pathname === "/admin"} tooltip={"Exit admin"} asChild>
                <Link prefetch href={"/admin"}>
                  <VideoIcon className='size-5' />
                  <span className='text-sm'>Beranda</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Separator />
            <SidebarMenuItem >
              <SidebarMenuButton tooltip={"Exit admin"} asChild>
                <Link prefetch href={"/"}>
                  <LogOutIcon className='size-5' />
                  <span className='text-sm'>Exit admin</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
