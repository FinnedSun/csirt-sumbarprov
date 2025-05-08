import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  description: string
  image: string
  href: string
}

export const ServiceTitle = ({
  title,
  description,
  image,
  href,
}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-1">
      {/* Image Section - Hidden on mobile */}
      <div className="hidden lg:block relative w-full aspect-video">
        <Image
          src={image}
          alt="image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center lg:items-start p-4">
        <h1 className="text-4xl font-bold text-center lg:text-left mb-4">{title}</h1>
        <p className="text-lg text-center lg:text-left mb-6">{description}</p>
        <Button asChild className="w-fit" variant={"elevated"}>
          <Link href={href}>Lihat Semua</Link>
        </Button>
      </div>
    </div>
  )
}
