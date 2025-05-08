
import { AdminView } from '@/module/admin/views/admin-views'
import { HydrateClient, trpc } from '@/trpc/server'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'

export const dynamic = "force-dynamic";

const AdminPage = async () => {

  void trpc.beranda.getTitle.prefetch() // prefetch data from trpc
  return (
    <HydrateClient>
      <Suspense fallback={"Loading.."}>
        <ErrorBoundary fallback={"Error.."}>
          <AdminView />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  )
}

export default AdminPage