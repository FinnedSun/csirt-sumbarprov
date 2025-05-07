import { CableIcon, CloudIcon, MonitorIcon } from "lucide-react"
import { CarouselBeranda } from "../ui/components/carousel-beranda"
import { Services } from "../ui/services"
import { Publication } from "../ui/publication"

const carouselImages = [
  {
    src: "/test2.png",
    alt: "beranda-1"
  },
  {
    src: "/test5.jpg",
    alt: "beranda-2"
  },
  {
    src: "/test6.jpg",
    alt: "beranda-3"
  }
]

const seviceTitle = {
  image: "/test4.jpg",
  title: "sumbarprov csirt",
  description: "sumbarprov csirt adalah penyedia layanan tim respon insiden keamanan siber. Guna kemudahan dalam penanganan siber, silahkan laporkan pada link dibawah ini. ",
  href: "/lapor"
}

const services = [
  {
    icon: CableIcon,
    title: "Aduan Siber",
    href: "/lapor",
  },
  {
    icon: MonitorIcon,
    title: "Panduan Teknis",
    href: "/lapor",
  },
  {
    icon: CloudIcon,
    title: "Asistensi Pembentukan CSIRT",
    href: "/lapor",
  }
]

const publications = [
  {
    title: "Pentingnya Pemahaman Teknologi Keamanan Siber",
    description: "Pentingnya Pemahaman Teknologi Keamanan Siber Pentingnya Pemahaman Teknologi Keamanan Siber, Pentingnya Pemahaman Teknologi Keamanan Siber",
    href: "/lapor",
    image: "/test6.jpg",
    cover: "/test2.png",
    date: new Date(2022, 4, 11),
    author: "Admin"
  },
  {
    title: "Pentingnya Pemahaman Teknologi Keamanan Siber",
    description: "Pentingnya Pemahaman Teknologi Keamanan Siber Pentingnya Pemahaman Teknologi Keamanan Siber, Pentingnya Pemahaman Teknologi Keamanan Siber",
    href: "/lapor",
    image: "/test5.jpg",
    cover: "/test2.png",
    date: new Date(2022, 4, 11),
    author: "Admin"
  },
  {
    title: "Pentingnya Pemahaman Teknologi Keamanan Siber",
    description: "Pentingnya Pemahaman Teknologi Keamanan Siber Pentingnya Pemahaman Teknologi Keamanan Siber, Pentingnya Pemahaman Teknologi Keamanan Siber",
    href: "/lapor",
    image: "/test6.jpg",
    cover: "/test2.png",
    date: new Date(2022, 4, 11),
    author: "Admin"
  },
]


export const BerandaView = () => {
  return (
    <div>
      <section>
        <CarouselBeranda carouselImages={carouselImages} />
      </section>
      <Services
        title={seviceTitle.title}
        image={seviceTitle.image}
        description={seviceTitle.description}
        href={seviceTitle.href}
        services={services}

      />
      <section>
        <Publication publications={publications} />
      </section>
    </div>
  )
}
