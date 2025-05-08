"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { trpc } from "@/trpc/client"
import { toast } from "sonner"
import { serviceTitleUpdateSchema } from "@/db/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export const SectionServiceTitle = () => {
  const utils = trpc.useUtils()
  const { data } = trpc.beranda.getTitle.useQuery()
  const mutate = trpc.beranda.editTitle.useMutation({
    onSuccess: () => {
      utils.beranda.getTitle.invalidate()
      toast.success("Berhasil mengubah title")
    },
    onError: () => {
      toast.error("Gagal mengubah title")
    }
  })

  const form = useForm<z.infer<typeof serviceTitleUpdateSchema>>({
    resolver: zodResolver(serviceTitleUpdateSchema),
    defaultValues: data
  })

  const onSubmit = (data: z.infer<typeof serviceTitleUpdateSchema>) => {
    mutate.mutateAsync(data)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center gap-x-2">
                    Title
                  </div>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Judul Layanan" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center gap-x-2">
                    Description
                  </div>
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Deskripsi Layanan"
                    rows={4}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="href"
            render={({ field }) => (
              <FormItem >
                <FormLabel>
                  <div className="flex items-center gap-x-2">
                    Link
                  </div>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Link Halaman" />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Simpan Perubahan
          </Button>
        </form>
      </Form >
    </>
  )
}
