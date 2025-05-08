import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Edit2Icon } from "lucide-react"
import { BannerUploadModal } from "./banner-upload-modal"
import { useState } from "react"


export const UserPageBannerSkeleton = () => {
  return (
    <div className="w-full max-h-[200px] h-[15vh] md:h-[25vh]" />
  )
}

export const TitleImage = () => {
  const { userId } = useAuth()
  const [isBannerUploadModalOpen, setIsBannerUploadModalOpen] = useState(false)

  return (
    <div className="relative group">
      <BannerUploadModal
        open={isBannerUploadModalOpen}
        onOpenChange={setIsBannerUploadModalOpen}
      />
      <div
        className={cn(
          "w-full max-h-[200px] h-[15vh] md:h-[25vh] bg-gradient-to-r to-gray-100 from-gray-200 rounded-xl",
        )}
      >
        <Button
          onClick={() => setIsBannerUploadModalOpen(true)}
          type="button"
          size={"icon"}
          className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/50 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Edit2Icon className="size-4 text-white" />
        </Button>

      </div>
    </div>
  )
}
