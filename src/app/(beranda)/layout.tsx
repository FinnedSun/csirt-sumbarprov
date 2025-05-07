import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

interface Props {
  children: React.ReactNode;
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
      <Footer />
    </div>
  )
}

export default BerandaLayout