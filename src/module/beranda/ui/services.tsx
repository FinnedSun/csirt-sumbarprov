import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"



interface Props {
  title: string,
  description: string,
  image: string,
  href: string,
  services: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    href: string
  }[]
}

export const Services = ({
  title,
  description,
  image,
  href,
  services,
}: Props) => {
  return (
    <>
      <section className="flex justify-between">
        <div className="hidden lg:block ml-1 bg-transparent">
          <Image
            src={image}
            alt="image"
            width={1920}
            height={1080}
            className="h-100 w-330 object-cover rounded-lg "
          />
        </div>
        <div className="flex flex-col mx-1 rounded-lg">
          <h1 className="text-4xl font-bold text-center my-5">{title}</h1>
          <p className="text-lg text-center flex-1/2 px-5">{description}</p>
          <Button asChild className="my-5 lg:mb-10 w-30 flex ml-5" variant={"elevated"}>
            <Link href={href} >
              Lihat Semua
            </Link>
          </Button>
        </div>
      </section>
      <section>
        <div className="m-1 bg-transparent rounded-lg relative overflow-hidden">
          {/* Gradient dari transparan ke putih */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white z-0" />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-center my-1 pt-5">Layanan Kami</h1>
            <p className="text-lg text-center flex-1/2">Kami menyediakan layanan yang berkualitas dan terpercaya untuk memenuhi kebutuhan Anda</p>
          </div>
          <div className="flex flex-wrap justify-evenly h-70 relative z-10">
            {services.map((service, index) => (
              <Link href={service.href} key={index} className="flex flex-col items-center justify-center mx-5 my-5 bg-transparent">
                <div className="flex items-center justify-evenly w-16 h-16 bg-pink-400 rounded-full hover:scale-110 transition">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-bold mt-2">{service.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section >
    </>
  )
}
