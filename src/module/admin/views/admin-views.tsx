import React from 'react'
import { AdminSection } from '../ui/sctions/admin-section'

export const AdminView = () => {
  return (
    <div className="flex flex-col gap-y-6 pt-2.5">
      <div className="px-4">
        <h1 className="text-2xl font-bold">Beranda Content</h1>
        <p className="text-xs text-muted-foreground">
          Manage your beranda content and videos.
        </p>
      </div>
      <AdminSection />
    </div>
  )
}
