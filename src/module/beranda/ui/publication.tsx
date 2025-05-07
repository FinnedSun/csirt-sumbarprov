import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Props {
  publications: {
    title: string
    description: string
    href: string
    image: string
    cover: string
    date: string
    author: string
  }[]
}

export const Publication = ({
  publications,
}: Props) => {

  // publication.date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4">
      {publications.map((publication, index) => (
        <Card key={index} className="flex flex-col gap-4">
          <CardContent>
            <div className="flex">
              <Image
                src={publication.image}
                alt={publication.title}
                width={1920}
                height={1080}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <CardTitle className="text-2xl font-bold">{publication.title}</CardTitle>
              <p className="text-sm text-gray-500">{publication.date}</p>
              <p className="text-sm text-gray-500">{publication.author}</p>
            </div>
            <div className="flex flex-col gap-2">
              <CardDescription className="text-sm text-gray-500">
                {publication.description}
              </CardDescription>
              <a href={publication.href} className="text-sm text-blue-500">Baca Selengkapnya</a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
