import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Props {
  publications: {
    title: string
    description: string
    href: string
    image: string
    cover: string
    date: Date
    author: string
  }[]
}

export const Publication = ({
  publications,
}: Props) => {

  // publication.date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <div className="m-1 bg-transparent">
      <h2 className="text-2xl font-bold m-4">Publikasi Terbaru</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {publications.map((publication, index) => (
          <Card key={index} className="flex flex-col gap-4">
            <CardContent>
              <div className="relative w-full overflow-hidden rounded-xl aspect-video">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="size-full object-cover "
                />
              </div>
              <div className="flex flex-col gap-2">
                <CardTitle className="text-2xl font-bold">{publication.title}</CardTitle>
                <p className="text-sm text-gray-500">{publication.date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-sm text-gray-500">{publication.author}</p>
              </div>
              <div className="flex flex-col gap-2">
                <CardDescription className="text-sm text-gray-500 line-clamp-3">
                  {publication.description}
                </CardDescription>
                <a href={publication.href} className="text-sm text-blue-500">Baca Selengkapnya</a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
