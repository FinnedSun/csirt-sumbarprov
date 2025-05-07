import { AdminLayout } from "@/components/layouts/admin-layout"

interface Props {
  children: React.ReactNode
}

const LayoutAdmin = ({
  children
}: Props) => {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}

export default LayoutAdmin
