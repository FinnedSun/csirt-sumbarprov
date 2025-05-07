import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

interface Props {
  children: React.ReactNode;
}

const about = {
  address: "Jalan Raya Sumbar - Sumsel",
  addressDetail: "Kecamatan Sumbar Barat, Kabupaten Sumedang, Jawa Barat",
  phone: "8123456789",
  email: "csirt@sumabar.go.id"
}

const BerandaLayout = ({
  children
}: Props) => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 flex-1">
        {children}
      </div>
      <Footer about={about} />
    </div>
  )
}

export default BerandaLayout