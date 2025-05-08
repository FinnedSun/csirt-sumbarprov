import { BerandaView } from "@/module/beranda/views/beranda-view";
import { trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";

export default function Home() {

  void trpc.beranda.gatTitle.prefetch();
  return (
    <HydrateClient>
      <BerandaView />
    </HydrateClient>
  )
}
