import { ResponsiveModal } from "@/components/responsive-modal"
import { UploadDropzone } from "@/lib/uploadthing"
import { trpc } from "@/trpc/client"


interface BannerUploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const BannerUploadModal = ({
  open,
  onOpenChange,
}: BannerUploadModalProps) => {
  const utils = trpc.useUtils()

  const onUpoloadComplete = () => {
    utils.beranda.getTitle.invalidate()
    onOpenChange(false)
  }

  return (
    <ResponsiveModal
      title="Upload a Banner"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone
        endpoint={"titleUploader"}
        onClientUploadComplete={onUpoloadComplete}
      />
    </ResponsiveModal>
  )
}
