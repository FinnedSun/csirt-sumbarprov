import { ResponsiveModal } from "@/components/responsive-modal"
import { UploadDropzone } from "@/lib/uploadthing"
import { trpc } from "@/trpc/client"


interface ThumbnailUploadModalProps {
  crouselId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ThumbnailUploadModal = ({
  crouselId,
  open,
  onOpenChange,
}: ThumbnailUploadModalProps) => {
  const utils = trpc.useUtils()

  const onUpoloadComplete = () => {
    // utils.studio.getMany.invalidate()
    // utils.studio.getOne.invalidate({ id: videoId })
    onOpenChange(false)
  }

  return (
    <ResponsiveModal
      title="Upload a Thumbnail"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone
        endpoint={"crouselUploader"}
        input={{ crouselId }}
        onClientUploadComplete={onUpoloadComplete}
      />
    </ResponsiveModal>
  )
}
